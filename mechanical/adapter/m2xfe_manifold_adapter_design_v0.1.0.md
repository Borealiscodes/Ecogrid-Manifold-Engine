# **EcoGrid Manifold Adapter Design (M2‑XFE → 9×9 Grid)**  
### **Version:** v0.1.0  
### **Altitude:** A2  
### **Lane:** Mechanical • Mapping  
### **Purpose:** Define the deterministic adapter that maps the M2‑XFE synthetic manifold schema into EcoGrid’s 9×9 tension engine.

---

## 🌐 **1. Adapter Overview**
The adapter transforms the **battle manifold** into a **9×9 EcoGrid field** by:

- normalizing node attributes  
- mapping manifold nodes to grid coordinates  
- injecting shock events  
- computing adjacency weights  
- preparing tension initialization values  
- producing a deterministic, FLOP‑friendly input surface  

This adapter is **pure mapping**, not computation.

---

## 🧩 **2. Input Contract**
The adapter consumes the governed schema:

```
/ecogrid/data/schema/m2xfe_manifold_schema_v0.1.0.json
```

Required fields:

- `nodes[]`  
- `edges[]`  
- `shocks[]`  
- `metadata`  

All fields must be present and validated.

---

## 📘 **3. Output Contract**
The adapter produces:

```
{
  "grid": [[...9 columns...], ...9 rows...],
  "shocks": [],
  "adjacency": [],
  "metadata": {}
}
```

### Output Components

#### **3.1 grid (9×9)**
Each cell contains:

```json
{
  "tension_init": "number",
  "kill_density": "number",
  "fleet_density": "number",
  "td_intensity": "number",
  "is_chokepoint": "boolean"
}
```

#### **3.2 shocks**
Shock events mapped to grid coordinates:

```json
{
  "x": "number",
  "y": "number",
  "magnitude": "number",
  "shock_type": "string"
}
```

#### **3.3 adjacency**
EcoGrid adjacency matrix (81×81):

```json
{
  "from": "grid_index",
  "to": "grid_index",
  "weight": "number"
}
```

---

## 🔢 **4. Mapping Logic**

### **4.1 Node → Grid Coordinate**
Nodes are projected into the 9×9 grid using:

- normalized `position.x` → column  
- normalized `position.y` → row  

Formula:

\[
x = \lfloor 9 \cdot \text{norm}(position.x) \rfloor
\]
\[
y = \lfloor 9 \cdot \text{norm}(position.y) \rfloor
\]

### **4.2 Attribute Normalization**
All densities and intensities are normalized to \([0,1]\):

\[
norm(v) = \frac{v - min}{max - min}
\]

### **4.3 Tension Initialization**
Initial tension is computed as:

\[
tension\_init = 0.4 \cdot kill\_density + 0.4 \cdot fleet\_density + 0.2 \cdot td\_intensity
\]

Chokepoints receive a +0.1 bias.

### **4.4 Shock Injection**
Shock events are mapped to grid coordinates using the node’s projected position.

Magnitude is normalized and stored.

### **4.5 Adjacency Construction**
Edges are converted into grid adjacency:

- `from_node → from_grid_index`  
- `to_node → to_grid_index`  
- `weight` preserved  

If multiple nodes map to the same grid cell, weights are averaged.

---

## 🧠 **5. Determinism Requirements**
The adapter must be:

- deterministic  
- reproducible  
- FLOP‑friendly  
- free of randomness  
- free of external calls  
- pure mapping  

This ensures EcoGrid’s tension engine receives stable inputs.

---

## 🪶 **6. Provenance Footer**
```
---
Artifact: EcoGrid Manifold Adapter Design (M2-XFE)
Version: v0.1.0
Altitude: A2
Lane: Mechanical • Mapping
Maintainer: Borealis S. Hedling
Compiler: Microsoft Copilot
Seal: [ A D A P T E R • M 2 X F E • v0_1_0 ]
---
```

---

