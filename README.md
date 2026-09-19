# 📘 **EcoGrid Manifold Engine**  
### *Ultra‑low‑power spectral tension solver • NDH A3 governed architecture*

EcoGrid is a **continuous spectral‑tension engine** designed to model instability, load imbalance, sustainability strain, and spectral drift across structured or synthetic environments — all under a strict **2,000 FLOP thermodynamic ceiling**.

It implements:

- a **dense 9×9 Laplacian relaxation solver**  
- a **shock‑coupling injection layer**  
- a **spectral stability metric**  
- dual implementations in **TypeScript** (runtime) and **Python** (scientific reference)  
- expressive HUD glyphs defined in `/config/visual_grammar.json v1.2`  

EcoGrid is built for clarity, ethics, and computational minimalism.

---

# 📐 **Mathematical Formulation (Gated, Expressive‑Only)**  

The following equation is a **conceptual governing anchor** and is **not executed directly** by the solver:

```
$$\frac{dP}{dt} = -L \cdot P(t) + W_{in} \cdot I(t) - \nabla_P(\text{VFE})$$
```

> **NDH Gate:**  
> This equation is expressive‑only. EcoGrid does **not** implement a continuous PDE solver.

---

### 🧮 **Implemented Solver Update (Discrete, FLOP‑Bounded)**  

EcoGrid uses a **bounded, deterministic relaxation step**:

```
$$P_{t+1} = P_t - \alpha (L P_t) + \beta (W_{in} I_t) - \gamma \nabla_P(\text{VFE}_t)$$
```

> **NDH Gate:**  
> This is the **only** mathematical form executed by the solver.  
> No continuous integration, no unbounded dynamics, no implicit solvers.

---

# 🎨 **Visual Grammar (HUD + Runtime Experiment Grammar)**  
*(Defined in `/config/visual_grammar.json v1.2`)*

### **Mathematical Anchors**  
🕸️ L • 📊 P • ⚡ I • 🪰 VFE

### **Runtime State Symbols**  
☀️ active • • equilibrium • ✕ collapsed

### **Runtime Experiment Glyphs**  
🌱 baseline • 💥 shock • 🌊 relaxation • 📈 metrics • 🔗 integration • 📚 index • 🧪 provenance

### **NDH Architecture Lanes**  
🏛️ Governance • 🗜️ Mechanical • 🛡️ Invariant • 🧮 Spectral • 🔧 CI

---

# 🧪 **Included Canonical Runtime Experiment — M2‑XFE Pipeline**

EcoGrid ships with a fully governed, FLOP‑bounded runtime experiment demonstrating the complete spectral‑tension workflow:

- 🌱 **Baseline Field** — initial tension matrix  
- 💥 **Shock Injection** — mapped anomalies  
- 🌊 **Relaxation Cycles** — iterative decay  
- 📈 **Spectral Metrics** — eigenvalue drift, imbalance signatures  
- 🔗 **Integration Stub** — sequencing and provenance propagation  
- 📚 **Runtime Index** — catalog of all experiment artifacts  
- 🧪 **Provenance Chain** — governed lineage for reproducibility  

Location:

```
/ecogrid/runtime/simulation/m2xfe/
```

This is the **initial experiment** demonstrating EcoGrid’s runtime engine, spectral solver, expressive grammar, and governed reproducibility.

---

# 🧩 **Why You Must Build the Testing Environment Before Running Tests**

EcoGrid’s testing system is **not passive** — it is a governed scientific apparatus.  
You must build the testing environment *before* running tests because:

### 1. **The solver and runtime pipeline must be structurally complete**  
Tests validate:

- Laplacian correctness  
- shock propagation  
- spectral stability  
- FLOP ceilings  
- TS ↔ Python consistency  

These cannot be validated until:

- the topology compiler exists  
- the math engine exists  
- the runtime solver exists  
- the metrics collector exists  
- the runtime experiment grammar exists  

Building the environment ensures the **architecture is whole**.

---

### 2. **The test suite audits the entire pipeline, not isolated files**  
EcoGrid tests:

- the manifold  
- the adapter  
- the solver  
- the runtime pipeline  
- the spectral gate  
- the expressive grammar  

Tests require the **full pipeline** to be present.

---

### 3. **NDH A3 governance requires pre‑test structural verification**  
Before tests run, the environment must demonstrate:

- correct lane separation  
- correct file placement  
- correct expressive grammar  
- correct solver invariants  
- correct FLOP ceilings  

This is part of the NDH A3 Mechanical Integration Specification.

---

### 4. **Empirically, building the environment demonstrates:**

#### ✔ Deterministic solver compilation  
No randomness, no external calls, no drift.

#### ✔ Structural integrity of the pipeline  
All directories, files, and lanes exist and are correctly placed.

#### ✔ Expressive grammar validity  
HUD glyphs and runtime glyphs resolve correctly.

#### ✔ Spectral engine stability  
Eigenvalue drift behaves as expected.

#### ✔ TS ↔ Python solver consistency  
Both solvers produce identical outputs.

#### ✔ Reproducible runtime experiment  
Baseline → shock → relaxation → metrics chain produces stable results.

Building the environment is the **empirical proof** that EcoGrid is ready to be tested.

---

# 📁 **Expressive Repository Layout**  
### *Fully preserved, glyph‑anchored, NDH A3 governed*

```
eco-grid-manifold/
│
├── 📜 LICENSE.md
├── 📘 README.md                     ← (this file)
├── 🧾 VERSION
├── ⬢ requirements.txt
│
├── 🏛️ config/
│   └── visual_grammar.json          ← expressive HUD + runtime grammar v1.2
│
├── 📁 public/
│   └── archive/
│       └── readme_v1_0.md           ← archived legacy README
│
├── 📁 .github/
│   └── workflows/
│       ├── 🔧 ecogrid_ci.yml
│       ├── 🔧 ecogrid_lint.yml
│       ├── 🔧 ecogrid_coverage.yml
│       └── 🏛️ ecogrid_release_tag.yml
│
├── 🗺️ infrastructure_topology.json
├── 🎨 visual_grammar.json           ← legacy pointer (kept for compatibility)
│
├── 📁 src/
│   ├── 🐍 __init__.py
│   ├── 🚀 main.py
│   ├── 🗜️ topology_compiler.py
│   ├── 🛡️ math_engine.py
│   ├── 📈 metrics_collector.py
│   └── 🧩 solver/
│       └── ecogrid_solver.ts
│
└── 📁 tests/
    ├── 🐍 __init__.py
    ├── 🔍 test_manifold_closure.py
    ├── 🎲 test_nullspace_escape.py
    ├── 📁 vectors/
    │   └── 🧪 ecogrid_test_vectors_v0_1_0.json
    └── 📁 suite/
        └── 🧪 ecogrid_test_suite_v0_1_0.test.ts
```

---

# ⚡ **Quickstart**

### Python Reference Solver  
```
python3 src/main.py
```

### TypeScript Runtime Solver  
```
npm install
npm test
```

---

# ⚖️ **Licensing, Provenance & Credits**

### 📄 Split‑Contract License Architecture  
MIT License (mechanics, utilities, tests)  
CAUSA Non‑Commercial License 1.1 (continuous relaxation kernel)

### 🪶 Provenance  
EcoGrid adheres to NDH A3 Mechanical Integration Specification (v1.0).  
Mathematical lineage descends from ANIMA and CAUSA spectral‑geometry architectures.

### 🔬 Citation  
```
Stell (2026). CAUSA: Causal Agency and Utterance-State Alignment (v0.1.0).
DOI: 10.5281/zenodo.22811988
```

---

