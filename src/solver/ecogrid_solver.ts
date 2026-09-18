// EcoGrid TypeScript Solver Stub v0.1.0
// Canonical runtime-facing solver following EcoGrid Technical Guide v0.1.0

export type BudgetStatus = "within_budget" | "budget_exhausted";

export interface EcoGridInputBundle {
  loads: number[];          // length 9
  initialStrain: number[];  // length 9
  shocks: number[][];       // [9][T]
  alpha: number;
  beta: number;
  epsilon: number;
  maxIterations?: number;   // optional override
}

export interface EcoGridOutputBundle {
  finalStrain: number[];        // length 9
  stabilityHistory: number[];   // length T_actual
  iterations: number;
  budgetStatus: BudgetStatus;
  tensionIndicators: number[];  // length 9
}

/**
 * Construct a 9x9 combinatorial Laplacian matrix L = D - A.
 * For now, this stub uses a simple placeholder adjacency for a 9-node chain.
 * In future, this can be replaced with a governed zone-graph.
 */
function buildLaplacian9(): number[][] {
  const n = 9;
  const A: number[][] = Array.from({ length: n }, () =>
    Array.from({ length: n }, () => 0)
  );

  // Simple chain adjacency: 0-1-2-3-4-5-6-7-8
  for (let i = 0; i < n - 1; i++) {
    A[i][i + 1] = 1;
    A[i + 1][i] = 1;
  }

  const D: number[][] = Array.from({ length: n }, () =>
    Array.from({ length: n }, () => 0)
  );

  for (let i = 0; i < n; i++) {
    const degree = A[i].reduce((acc, v) => acc + v, 0);
    D[i][i] = degree;
  }

  const L: number[][] = Array.from({ length: n }, () =>
    Array.from({ length: n }, () => 0)
  );

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      L[i][j] = D[i][j] - A[i][j];
    }
  }

  return L;
}

/**
 * Multiply a 9x9 matrix by a 9-vector.
 */
function matVec9(L: number[][], v: number[]): number[] {
  const n = 9;
  const out = new Array<number>(n).fill(0);
  for (let i = 0; i < n; i++) {
    let sum = 0;
    for (let j = 0; j < n; j++) {
      sum += L[i][j] * v[j];
    }
    out[i] = sum;
  }
  return out;
}

/**
 * Compute Euclidean norm of difference between two 9-vectors.
 */
function deltaNorm9(a: number[], b: number[]): number {
  let sumSq = 0;
  for (let i = 0; i < 9; i++) {
    const d = a[i] - b[i];
    sumSq += d * d;
  }
  return Math.sqrt(sumSq);
}

/**
 * Simple tension indicator: absolute value of final strain per zone.
 */
function computeTensionIndicators(strain: number[]): number[] {
  return strain.map((s) => Math.abs(s));
}

/**
 * FLOP ceiling enforcement.
 * Using the Technical Guide’s approximate cost model:
 * ~117 FLOPs per iteration, ceiling 2000 FLOPs → T_max = 17.
 */
const FLOP_CEILING = 2000;
const FLOPS_PER_ITER = 117;
const DEFAULT_MAX_ITERATIONS = Math.floor(FLOP_CEILING / FLOPS_PER_ITER); // 17

export function solveEcoGrid(input: EcoGridInputBundle): EcoGridOutputBundle {
  const n = 9;
  const L = buildLaplacian9();

  // Defensive length checks (non-schema, just sanity)
  if (input.initialStrain.length !== n || input.loads.length !== n) {
    throw new Error("EcoGrid: initialStrain and loads must be length 9.");
  }

  const shocks = input.shocks;
  const alpha = input.alpha;
  const beta = input.beta;
  const epsilon = input.epsilon;

  const maxIterations =
    input.maxIterations !== undefined
      ? Math.min(input.maxIterations, DEFAULT_MAX_ITERATIONS)
      : DEFAULT_MAX_ITERATIONS;

  let s = [...input.initialStrain];
  const stabilityHistory: number[] = [];
  let iterations = 0;
  let budgetStatus: BudgetStatus = "within_budget";

  for (let t = 0; t < maxIterations; t++) {
    const shockVector =
      t < shocks[0]?.length
        ? shocks.map((row) => row[t] ?? 0)
        : new Array<number>(n).fill(0);

    const Ls = matVec9(L, s);

    const next: number[] = new Array<number>(n).fill(0);
    for (let i = 0; i < n; i++) {
      next[i] = s[i] - alpha * Ls[i] + beta * shockVector[i];
    }

    const delta = deltaNorm9(next, s);
    stabilityHistory.push(delta);
    iterations = t + 1;
    s = next;

    if (delta < epsilon) {
      budgetStatus = "within_budget";
      break;
    }

    if (iterations === maxIterations) {
      budgetStatus = "budget_exhausted";
    }
  }

  const tensionIndicators = computeTensionIndicators(s);

  return {
    finalStrain: s,
    stabilityHistory,
    iterations,
    budgetStatus,
    tensionIndicators,
  };
}
