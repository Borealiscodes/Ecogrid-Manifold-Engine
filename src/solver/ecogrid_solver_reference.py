# EcoGrid Python Reference Solver Stub v0.1.0
# Scientific-facing reference implementation following EcoGrid Technical Guide v0.1.0

from typing import List, Dict
import math

BudgetStatus = str  # "within_budget" | "budget_exhausted"

FLOP_CEILING = 2000
FLOPS_PER_ITER = 117
DEFAULT_MAX_ITERATIONS = FLOP_CEILING // FLOPS_PER_ITER  # 17


def build_laplacian_9() -> List[List[float]]:
    """
    Construct a 9x9 combinatorial Laplacian for a simple chain graph.
    Mirrors the TS implementation exactly.
    """
    n = 9
    A = [[0.0 for _ in range(n)] for _ in range(n)]

    # Chain adjacency: 0-1-2-3-4-5-6-7-8
    for i in range(n - 1):
        A[i][i + 1] = 1.0
        A[i + 1][i] = 1.0

    D = [[0.0 for _ in range(n)] for _ in range(n)]
    for i in range(n):
        degree = sum(A[i])
        D[i][i] = degree

    L = [[0.0 for _ in range(n)] for _ in range(n)]
    for i in range(n):
        for j in range(n):
            L[i][j] = D[i][j] - A[i][j]

    return L


def matvec_9(L: List[List[float]], v: List[float]) -> List[float]:
    """Matrix-vector multiply for 9x9 Laplacian."""
    out = []
    for i in range(9):
        s = 0.0
        for j in range(9):
            s += L[i][j] * v[j]
        out.append(s)
    return out


def delta_norm_9(a: List[float], b: List[float]) -> float:
    """Euclidean norm of difference between two 9-vectors."""
    return math.sqrt(sum((a[i] - b[i]) ** 2 for i in range(9)))


def tension_indicators(strain: List[float]) -> List[float]:
    """Absolute value per zone."""
    return [abs(s) for s in strain]


def solve_ecogrid(input_bundle: Dict) -> Dict:
    """
    Scientific reference solver.
    Mirrors the TS solver exactly, including FLOP ceiling behavior.
    """

    loads = input_bundle["loads"]
    s = input_bundle["initialStrain"].copy()
    shocks = input_bundle["shocks"]
    alpha = input_bundle["alpha"]
    beta = input_bundle["beta"]
    epsilon = input_bundle["epsilon"]

    max_iterations = min(
        input_bundle.get("maxIterations", DEFAULT_MAX_ITERATIONS),
        DEFAULT_MAX_ITERATIONS,
    )

    L = build_laplacian_9()
    stability_history = []
    iterations = 0
    budget_status: BudgetStatus = "within_budget"

    for t in range(max_iterations):
        # Shock vector for iteration t
        if t < len(shocks[0]):
            shock_vec = [row[t] for row in shocks]
        else:
            shock_vec = [0.0] * 9

        Ls = matvec_9(L, s)

        next_s = [
            s[i] - alpha * Ls[i] + beta * shock_vec[i]
            for i in range(9)
        ]

        delta = delta_norm_9(next_s, s)
        stability_history.append(delta)
        iterations = t + 1
        s = next_s

        if delta < epsilon:
            budget_status = "within_budget"
            break

        if iterations == max_iterations:
            budget_status = "budget_exhausted"

    return {
        "finalStrain": s,
        "stabilityHistory": stability_history,
        "iterations": iterations,
        "budgetStatus": budget_status,
        "tensionIndicators": tension_indicators(s),
    }
