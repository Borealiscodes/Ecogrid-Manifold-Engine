# **EcoGrid Simulation Directory Structure (M2‑XFE)**  
### **Version:** v0.1.0  
### **Altitude:** A2  
### **Lane:** Runtime • Execution Surface  
### **Purpose:** Define the directory structure for storing all FLOP‑bounded EcoGrid simulation runs derived from the M2‑XFE synthetic manifold.

---

## 🌐 **1. Directory Overview**
This directory houses **all runtime outputs** produced by EcoGrid when executing:

- baseline tension initialization  
- shock‑injected tension fields  
- relaxation cycles  
- spectral stability metrics  

The structure is deterministic and reproducible.

---

## 📁 **2. Directory Layout**
```
/ecogrid/runtime/simulation/m2xfe/
│
├── input/
│   ├── m2xfe_manifold.json
│   └── m2xfe_adapter_output.json
│
├── runs/
│   ├── baseline/
│   │   └── baseline_run.json
│   │
│   ├── shock/
│   │   └── shock_run.json
│   │
│   ├── relaxation/
│   │   └── relaxation_cycles.json
│   │
│   └── metrics/
│       └── spectral_metrics.json
│
└── provenance/
    └── run_manifest_v0.1.0.md
```

---

## 🧩 **3. Directory Purpose Breakdown**

### **3.1 `/input/`**
Contains the **manifold schema** and **adapter output**:

- `m2xfe_manifold.json`  
- `m2xfe_adapter_output.json`  

These are the only inputs EcoGrid consumes.

---

### **3.2 `/runs/`**
Contains all simulation outputs:

#### **baseline/**
EcoGrid’s initial tension field before shocks.

#### **shock/**
EcoGrid’s tension field after shock injection.

#### **relaxation/**
All relaxation cycles (iteration‑indexed).

#### **metrics/**
Spectral stability metrics, including:

- eigenvalue drift  
- tension decay  
- imbalance signatures  

---

### **3.3 `/provenance/`**
Contains the run manifest:

- version  
- FLOP count  
- adapter version  
- schema version  
- runtime parameters  

This ensures reproducibility and auditability.

---

## 🪶 **4. Provenance Footer**
```
---
Artifact: EcoGrid Simulation Directory Structure (M2-XFE)
Version: v0.1.0
Altitude: A2
Lane: Runtime • Execution Surface
Maintainer: Borealis S. Hedling
Compiler: Microsoft Copilot
Seal: [ S I M • M 2 X F E • v0_1_0 ]
---
```

---

