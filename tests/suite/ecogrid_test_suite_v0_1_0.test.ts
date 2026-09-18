// EcoGrid Test Suite v0.1.0
// Validates TS solver behavior using canonical test vectors.
// Mirrors Python reference solver expectations.

import { solveEcoGrid } from "../../src/solver/ecogrid_solver";
import * as fs from "fs";
import * as path from "path";

interface TestVector {
  loads: number[];
  initialStrain: number[];
  shocks: number[][];
  alpha: number;
  beta: number;
  epsilon: number;
  maxIterations?: number;
}

const vectorsPath = path.join(
  __dirname,
  "../vectors/ecogrid_test_vectors_v0_1_0.json"
);

const vectors: Record<string, TestVector> = JSON.parse(
  fs.readFileSync(vectorsPath, "utf8")
);

// Utility: check monotonic decrease
function isMonotonicDecreasing(arr: number[]): boolean {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) return false;
  }
  return true;
}

// Utility: check plateau above epsilon
function isPlateauAbove(arr: number[], epsilon: number): boolean {
  return arr.every((v) => v > epsilon);
}

describe("EcoGrid Solver — Test Suite v0.1.0", () => {
  // ---------------------------------------------------------
  // Test 1 — Zero-Shock Convergence
  // ---------------------------------------------------------
  test("Zero-Shock Convergence", () => {
    const input = vectors["zeroShockConvergence"];
    const result = solveEcoGrid(input);

    expect(result.budgetStatus).toBe("within_budget");
    expect(result.iterations).toBeLessThan(17);
    expect(isMonotonicDecreasing(result.stabilityHistory)).toBe(true);
  });

  // ---------------------------------------------------------
  // Test 2 — Single-Zone Shock Pulse
  // ---------------------------------------------------------
  test("Single-Zone Shock Pulse", () => {
    const input = vectors["singleZoneShockPulse"];
    const result = solveEcoGrid(input);

    expect(result.budgetStatus).toBe("within_budget");
    expect(result.iterations).toBeGreaterThan(5);
    expect(result.finalStrain[0]).toBeGreaterThan(result.finalStrain[1]);
  });

  // ---------------------------------------------------------
  // Test 3 — Persistent Shock Train (Budget Exhaustion)
  // ---------------------------------------------------------
  test("Persistent Shock Train — Budget Exhaustion", () => {
    const input = vectors["persistentShockTrain"];
    const result = solveEcoGrid(input);

    expect(result.budgetStatus).toBe("budget_exhausted");
    expect(result.iterations).toBe(17);
    expect(isPlateauAbove(result.stabilityHistory, input.epsilon)).toBe(true);
  });

  // ---------------------------------------------------------
  // Test 4 — Symmetric Initial Strain
  // ---------------------------------------------------------
  test("Symmetric Initial Strain", () => {
    const input = vectors["symmetricInitialStrain"];
    const result = solveEcoGrid(input);

    expect(result.budgetStatus).toBe("within_budget");
    expect(isMonotonicDecreasing(result.stabilityHistory)).toBe(true);
  });

  // ---------------------------------------------------------
  // Test 5 — High-Alpha Stability Check
  // ---------------------------------------------------------
  test("High-Alpha Stability Check", () => {
    const input = vectors["highAlphaStability"];
    const result = solveEcoGrid(input);

    expect(result.budgetStatus).toBe("within_budget");
    expect(result.iterations).toBeLessThan(10);
    expect(isMonotonicDecreasing(result.stabilityHistory)).toBe(true);
  });
});
