# 🌌 **EcoGrid M2‑XFE Runtime README (v0.1.0)**  
*(Subfolder README for `/runtime/simulation/m2xfe/`)*

## 🌍 What This Folder Is  
This directory contains the **entire runtime pipeline** for the M2‑XFE spectral‑tension simulation.  
Everything inside here is **deterministic**, **FLOP‑bounded**, and **governed**.

EcoGrid uses this pipeline to study how instability moves through a synthetic battlefield — the Battle of M2‑XFE — using a **9×9 spectral grid**.

---

## 🧪 Pipeline Summary  
This folder contains the full runtime chain:

1. **Manifold Schema** — the blueprint  
2. **Adapter Output** — the translator  
3. **Baseline Run** — calm before the storm  
4. **Shock Run** — moment of impact  
5. **Relaxation Cycles** — ripples settling  
6. **Spectral Metrics** — final diagnosis  
7. **Run Manifest** — lab notebook  
8. **Integration Stub** — wiring diagram  
9. **Runtime Index** — table of contents  

All artifacts are versioned and reproducible.

---

## 📁 Directory Map  
```
/input/               → schema + adapter output  
/runs/baseline/       → baseline tension field  
/runs/shock/          → shock-injected tension field  
/runs/relaxation/     → relaxation cycles  
/runs/metrics/        → spectral stability metrics  
/provenance/          → run manifest  
```

---

## ⚙️ Determinism Requirements  
- No randomness  
- No external calls  
- FLOP ceiling: **2000 FLOPs**  
- All outputs must be reproducible  
- CAUSA remains advisory only  

---

## 🧭 How Developers Use This Folder  
1. Load the adapter output  
2. Generate baseline  
3. Apply shocks  
4. Run relaxation cycles  
5. Compute spectral metrics  
6. Update provenance  
7. Consult the runtime index  

This README is the entry point for anyone exploring the M2‑XFE runtime pipeline.

---

# 🪶 **Provenance Footer**
```
---
Artifact: Subfolder README — EcoGrid M2-XFE Runtime
Version: v0.1.0
Altitude: A0
Lane: Documentation • Frontmatter
Maintainer: Borealis S. Hedling
Compiler: Microsoft Copilot
Seal: [ R E A D M E • M 2 X F E • v0_1_0 ]
---
```

---

