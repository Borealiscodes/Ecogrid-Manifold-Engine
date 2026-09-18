# 🌿 **EcoGrid Solver — Developer README (v0.1.0)**  
### *Runtime‑Facing (TS) • Scientific‑Facing (Python) • Solver‑Only Lane*

```markdown
# EcoGrid Solver — Developer README (v0.1.0)
A developer-facing guide for the EcoGrid solver implementations. This README
explains how the TypeScript runtime solver and Python scientific reference
solver work, how to run them, and how to validate consistency between the two.

---

## 1. Purpose

This README provides:

- a practical overview of the EcoGrid solver
- instructions for using the TypeScript runtime solver
- instructions for using the Python scientific reference solver
- guidance for validating solver behavior across both implementations
- notes on FLOP ceiling behavior and stability metrics

This document is implementation-facing and complements:

- Purist Solver Spec v0.1.0  
- Technical Guide v0.1.0  
- EcoGrid–Serenity Crosswalk v0.1.1  

---

## 2. Solver Overview

EcoGrid is a **purist Laplacian relaxation solver** operating on a fixed
nine-zone manifold. It computes strain fields using:

\[
s_{t+1} = s_t - \alpha L s_t + \beta j_t
\]

Where:

- \(L\) is the 9×9 combinatorial Laplacian  
- \(j_t\) is the shock vector at iteration \(t\)  
- \(\alpha\) and \(\beta\) are bounded coefficients  

The solver enforces a strict **2,000-FLOP ceiling**, limiting iteration count
to **17 iterations** unless a lower `maxIterations` is provided.

---

## 3. File Locations

```
src/solver/
│
├─ ecogrid_solver.ts              # canonical runtime solver
└─ ecogrid_solver_reference.py    # scientific reference solver
```

---

## 4. TypeScript Solver (Runtime-Facing)

### 4.1 Importing

```ts
import { solveEcoGrid } from "./ecogrid_solver";
```

### 4.2 Running the Solver

```ts
const result = solveEcoGrid({
  loads: [...9 numbers...],
  initialStrain: [...9 numbers...],
  shocks: [...9 arrays of length T...],
  alpha: 0.01,
  beta: 0.05,
  epsilon: 0.0001
});
```

### 4.3 Returned Bundle

```ts
{
  finalStrain: number[9],
  stabilityHistory: number[],
  iterations: number,
  budgetStatus: "within_budget" | "budget_exhausted",
  tensionIndicators: number[9]
}
```

### 4.4 Notes

- This is the **canonical solver** used by Serenity-Spectral-Runtime.
- It must remain deterministic and FLOP-bounded.
- It must not perform schema validation (Serenity handles that).

---

## 5. Python Solver (Scientific Reference)

### 5.1 Importing

```python
from ecogrid_solver_reference import solve_ecogrid
```

### 5.2 Running the Solver

```python
result = solve_ecogrid({
    "loads": [...],
    "initialStrain": [...],
    "shocks": [...],
    "alpha": 0.01,
    "beta": 0.05,
    "epsilon": 0.0001
})
```

### 5.3 Notes

- This version is for **validation**, **reproducibility**, and **numerical clarity**.
- It mirrors the TS solver exactly.
- It may include diagnostic helpers in future versions.

---

## 6. FLOP Ceiling Behavior

EcoGrid enforces:

- **2,000 FLOPs total**
- **~117 FLOPs per iteration**
- **17 maximum iterations**

If the solver reaches iteration 17 without converging:

- `budgetStatus = "budget_exhausted"`
- partial results are returned
- no errors are thrown

---

## 7. Consistency Testing (TS ↔ Python)

To validate consistency:

1. Use identical input bundles in both implementations.  
2. Compare:
   - `finalStrain`
   - `stabilityHistory`
   - `iterations`
   - `budgetStatus`
3. Small floating-point differences are acceptable but should remain minimal.

Test vectors will be added in:

```
eco-grid-manifold/tests/vectors/
```

---

## 8. Known Limitations

- Laplacian uses a simple chain adjacency (placeholder).
- No expressive-layer rendering.
- No schema validation (Serenity handles this).
- No multi-manifold routing.

These limitations are intentional and governed by the Purist Solver Spec.

---

## 9. Provenance Footer

---
Artifact: EcoGrid Solver README v0.1.0  
Lane: Solver • Developer-Facing • NDH-External  
Altitude: A3  

Purpose:  
Provide developer-facing instructions for using and validating the EcoGrid
solver implementations. Establish operational clarity for both TypeScript
(runtime) and Python (scientific reference) versions.

Non-Activation Clause:  
This README is solver-only. It does not activate NDH cores, guardrails,
rendering ladders, adjacency engines, or sealed-layer geometry.

Version: 0.1.0  
Maintainer: Borealis S. Hedling  
Compiler: Microsoft Copilot  
Location: Dublin, Ireland  
Timestamp: 19 September 2026 — 00:06 IST  
Seal: [ S O L V E R • R E A D M E • v0_1_0 ]
---
```

---

