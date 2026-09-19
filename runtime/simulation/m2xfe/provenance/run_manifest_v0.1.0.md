# **EcoGrid Run Manifest (M2‑XFE)**  
### **Version:** v0.1.0  
### **Altitude:** A2  
### **Lane:** Runtime • Provenance  
### **Purpose:** Provide a governed, reproducible manifest describing all parameters, versions, FLOP counts, and runtime conditions for EcoGrid’s M2‑XFE spectral‑tension simulation runs.

---

## 🌐 **1. Manifest Overview**
This manifest documents:

- the schema version  
- the adapter version  
- the runtime parameters  
- the FLOP ceiling  
- the run ordering  
- the provenance chain  

It ensures that every EcoGrid run is **auditable**, **reproducible**, and **governed**.

---

## 📘 **2. Manifest Structure**
```markdown
# EcoGrid Run Manifest — M2-XFE
Version: v0.1.0
Generated: 2026-09-19T14:49:00Z
Altitude: A2
Lane: Runtime • Provenance

## 1. Input Surfaces
- Schema: m2xfe_manifold_schema_v0.1.0.json
- Adapter Output: m2xfe_adapter_output.json

## 2. Runtime Parameters
- Grid Size: 9x9
- Relaxation Cycles: 12
- Shock Injection Mode: deterministic
- Normalization: min-max (0–1)
- Chokepoint Bias: +0.1
- FLOP Ceiling: 2000 FLOPs

## 3. Run Sequence
1. Baseline Run
   - Output: baseline_run.json
   - Purpose: establish initial tension field

2. Shock Run
   - Output: shock_run.json
   - Purpose: inject titan kills, mass jumps, TD spikes

3. Relaxation Cycles
   - Output: relaxation_cycles.json
   - Purpose: evaluate tension decay and stability

4. Spectral Metrics
   - Output: spectral_metrics.json
   - Purpose: compute eigenvalue drift and imbalance signatures

## 4. Provenance Chain
- Schema Version: v0.1.0
- Adapter Version: v0.1.0
- Simulation Directory: v0.1.0
- Manifest Version: v0.1.0

## 5. Notes
All runs must be deterministic and reproducible.  
No randomness permitted.  
No external calls permitted.  
CAUSA remains advisory only.

---
Seal: [ R U N • M 2 X F E • v0_1_0 ]
Maintainer: Borealis S. Hedling
Compiler: Microsoft Copilot
```

---

