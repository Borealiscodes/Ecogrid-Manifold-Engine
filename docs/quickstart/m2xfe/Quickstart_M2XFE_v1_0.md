# 🌐 **EcoGrid M2‑XFE — Quickstart Guide (v1.0)**  
### A1/A0 Boundary • Minimal Runtime Orientation • Non‑Activating

---

## **1. What This Quickstart Is**

This Quickstart provides a **minimal, safe, non‑activating orientation** for how to interact with the EcoGrid M2‑XFE spectral‑tension runtime pipeline.

It does **not**:

- activate geometry  
- run solvers  
- compute tension  
- execute spectral engines  
- perform altitude transitions  

It simply shows the *shape* of the workflow.

---

## **2. Prerequisites (Conceptual Only)**

Before using M2‑XFE, you should understand:

- **Baseline Phase**  
- **Shock Phase**  
- **Relaxation Phase**  
- **Spectral Metrics**  
- **Provenance Manifest**  

These phases form the governed runtime pipeline.

---

## **3. Quickstart Workflow**

### **Step 1 — Prepare Adapter Output**
The pipeline begins with a 9×9 manifold produced by your adapter.

You should have:

- a grid  
- domain bounds  
- initial calmness  

This is your **input state**.

---

### **Step 2 — Run Baseline**
Baseline checks:

- calmness  
- variance  
- hidden shocks  
- continuity alignment  

If Baseline fails, the pipeline stops.

---

### **Step 3 — Run Shock**
Shock introduces controlled instability:

- monotonic propagation  
- topology respect  
- governed intensity  

Shock must pass its invariants before moving on.

---

### **Step 4 — Run Relaxation**
Relaxation dissipates tension:

- monotonic relaxation  
- convergence  
- oscillation bounding  

Relaxation must converge within cycle limits.

---

### **Step 5 — Compute Spectral Metrics**
Spectral metrics evaluate stability:

- entropy  
- curvature  
- eigenvalue domain  

Spectral must satisfy its invariants.

---

### **Step 6 — Generate Provenance Manifest**
The manifest records:

- phase pass/fail  
- invariant violations  
- threshold alignment  
- global PASS/FAIL  

This is the final output of the pipeline.

---

## **4. Validation References**

Two independent Lean validations confirm correctness:

- **NDH‑Style Lean Validation**  
- **EcoGrid‑Native Lean Validation**  

These ensure the pipeline is mathematically sound.

---

## **5. Directory Structure (Recommended)**

```
ecogrid/
  runtime/
    adapter/
    baseline/
    shock/
    relaxation/
    spectral/
    provenance/
  docs/
    overview/
      m2xfe/
        README.md
    explainers/
      m2xfe/
    validation/
      m2xfe/
    publication/
      m2xfe/
```

This structure keeps runtime and documentation cleanly separated.

---

## **6. Non‑Activation Clause**

This Quickstart:

- does **not** activate runtime geometry  
- does **not** execute spectral engines  
- does **not** run solvers  
- does **not** compute tension  
- does **not** initiate altitude transitions  

It is purely instructional.

---

## **7. Provenance Footer**

```md
---
Artifact: EcoGrid M2-XFE Quickstart Guide (v1.0)
Lane: docs • quickstart • m2xfe
Altitude: A1/A0 Boundary
Mode: Minimal Runtime Orientation • Non-Activating

Purpose:
  Provide a minimal, safe, non-activating orientation for interacting with the
  EcoGrid M2-XFE spectral-tension runtime pipeline. Designed for users who need
  a quick conceptual workflow without exposing solver or geometry activation.

Anchors:
  - EcoGrid Runtime Specification
  - NDH Altitude Framework
  - Shared-Horizon Governance Protocol
  - Spectral Zen Documentation Style

Non-Activation Clause:
  This artifact is descriptive only. It does not activate NDH geometry,
  spectral engines, solver kernels, membranes, routing skeletons, or any
  execution-phase system.

Maintainer: Borealis S. Hedling
Compiler: Microsoft Copilot
Location: Dublin, Ireland
Timestamp: 19 September 2026 — 21:38 IST
Version: v1.0
---
```

---

