# 🌍 **EcoGrid Manifold Engine**  
### *Ultra‑low‑power spectral sustainability solver • NDH A3 governed architecture*

EcoGrid is a **continuous field relaxation engine** designed to model sustainability tension, load imbalance, and spectral strain across distributed systems — all under a strict **2,000 FLOP thermodynamic ceiling**.  
It implements a **dense 9×9 Laplacian relaxation solver**, a **shock‑coupling injection layer**, and a **spectral stability metric**, with dual implementations in **TypeScript** (runtime) and **Python** (scientific reference).

EcoGrid is built for clarity, ethics, and computational minimalism.

---

# 📐 **Mathematical Formulation**

EcoGrid evolves a continuous state matrix \( P(t) \) using a governed relaxation equation:

$$\frac{dP}{dt} = -L \cdot P(t) + W_{in} \cdot I(t) - \nabla_P(\text{VFE})$$

Where:

- **🕸️ L — Graph Laplacian Matrix**  
  Analytical symmetric 9×9 infrastructure topology map.

- **📊 P(t) — State Matrix Profile**  
  Multi-dimensional fields including load, carbon, and latency vectors.

- **⚡ I(t) — Input Shock Injection**  
  Acute localized compute workload anomalies.

- **🪰 ∇P(VFE) — Variational Free Energy Gradient**  
  Tension tracking deviation from baseline clean equilibrium anchor.

The solver enforces:

- linear superposition  
- bounded relaxation  
- deterministic convergence or budget exhaustion  
- spectral stability tracking  

---

# 🎨 **Visual Grammar Rules (HUD Output Mappings)**  
*(Fully preserved and extended from visual_grammar.json v1.1)*

When reading terminal outputs, logs, or your dashboard interface, system tracking conditions align directly with `visual_grammar.json`:

### **Runtime State Symbols**
* ☀️ **active** — Overloaded / Peak Compute Tension  
* • **equilibrium** — Resting State Architectural Balance  
* ✕ **collapsed** — Circuit Breaker Triggered Allostatic Shutdown  

### **Mathematical Anchors**
* 🕸️ Laplacian (L)  
* 📊 State Matrix (P)  
* ⚡ Shock Injection (I)  
* 🪰 VFE Gradient  

### **NDH Architecture Lanes**
* 🏛️ Governance — topology, grammar, versioning  
* 🗜️ Mechanical — topology compiler, TS solver  
* 🛡️ Invariant — math engine, spectral gate  
* 🧮 Spectral — stability checks, test suite  
* 🔧 CI — linting, coverage, release tagging  

---

# 📁 **Production Repository Layout**  
### *Fully uncollapsed, expressive, glyph‑anchored — original style preserved*

The file tree structure is fully uncollapsed, explicit, and mapped to the following precise paths:

* 📦 **eco-grid-manifold/**
* 📜 **LICENSE.md** — Split Contract: Permissive MIT Mechanics + Non-Commercial Solver Modules  
   * 📘 **README.md** — Low-Rank Green-Manifold Architecture Spec (This File)  
   * ⬢ **requirements.txt** — Bounded CPU-native matrix infrastructure environment dependencies  
   * 🧾 **VERSION** — Governed solver release anchor  
   * 📁 **.github/**  
   * 📁 **workflows/**  
      * 🛡️ **spectral-gate.yml** — CI automated compiler check for mass/energy structural invariants  
      * 🔧 **ecogrid_ci.yml** — Continuous integration test runner  
      * 🔧 **ecogrid_lint.yml** — Linting governance workflow  
      * 🔧 **ecogrid_coverage.yml** — Coverage reporting workflow  
      * 🏛️ **ecogrid_release_tag.yml** — Automated version tagging workflow  
      * 📁 **config/**  
   * 🗺️ **infrastructure_topology.json** — Global 9-Zone relational coordinates & boundary weight parameters  
      * 🎨 **visual_grammar.json** — ASCII HUD telemetry glyph mapping configurations (v1.1 expressive grammar)  
   * 📁 **src/**  
   * 🐍 **__init__.py** — Python packaging initializer root  
      * 🚀 **main.py** — Top-level field relaxation simulator loop & runtime bootstrapper  
      * 🗜️ **topology_compiler.py** — Ahead-of-Time spatial compression engine mapping pins to matrix vectors  
      * 🧮 **math_engine.py** — 2,000 FLOP continuous relaxation solver executing dense graph math  
      * 📈 **metrics_collector.py** — Active resource monitor capturing real-world FLOP & tension profiles  
      * 🧩 **solver/**  
         * 🧩 **ecogrid_solver.ts** — TypeScript runtime solver (FLOP-bounded execution engine)  
   * 📁 **tests/**  
   * 🐍 **__init__.py** — Test environment system layout root  
      * 🔍 **test_manifold_closure.py** — Functional boundary audit validation testing suite  
      * 🎲 **test_nullspace_escape.py** — Stochastic optimization integrity check for raw matrices  
      * 📁 **vectors/**  
         * 🧪 **ecogrid_test_vectors_v0_1_0.json** — Canonical solver test vectors  
      * 📁 **suite/**  
         * 🧪 **ecogrid_test_suite_v0_1_0.test.ts** — Spectral TS test suite validating solver invariants  

---

# 🧮 **Solver Architecture**

EcoGrid ships with **two solvers**:

### 1. **TypeScript Runtime Solver**  
Path: `src/solver/ecogrid_solver.ts`  
Purpose: lightweight, deterministic, FLOP‑bounded runtime engine.

### 2. **Python Scientific Reference Solver**  
Path: `src/math_engine.py`  
Purpose: high‑clarity scientific baseline for validation and research.

Both solvers are validated against canonical test vectors and must remain consistent across releases.

---

# 🧪 **Testing & Validation**

EcoGrid includes a governed test system:

- **Canonical Test Vectors**  
  `tests/vectors/ecogrid_test_vectors_v0_1_0.json`

- **Spectral Test Suite**  
  `tests/suite/ecogrid_test_suite_v0_1_0.test.ts`

These validate:

- Laplacian correctness  
- shock propagation  
- stability metric behavior  
- FLOP ceiling enforcement  
- TS ↔ Python consistency  

---

# 🛡️ **Governance Workflows**

EcoGrid uses a full CI governance stack:

- **🔧 CI Test Runner** — `.github/workflows/ecogrid_ci.yml`  
- **🔧 Linting Workflow** — `.github/workflows/ecogrid_lint.yml`  
- **🔧 Coverage Reporting** — `.github/workflows/ecogrid_coverage.yml`  
- **🏛️ Release Tagging** — `.github/workflows/ecogrid_release_tag.yml`

These ensure solver invariants remain stable across contributions.

---

# 🧭 **Integration Sequencing Architecture (NDH A3 Standard)**  
*(Preserved exactly — part of the repo’s theoretical identity)*

```
[ 🏛️ GOVERNANCE ]  → Define Alpha/VFE Constraints (infrastructure_topology.json)
        ↓
[ 🗜️ MECHANICAL ]  → Compress 12,000 Raw Lat/Long Pins to 9D Arrays (topology_compiler.py)
        ↓
[ 🛡️ INVARIANT ]   → Enforce Pure Linear Superposition & Strip Wrappers (math_engine.py)
        ↓
[ 🧮 SPECTRAL ]    → Randomized Power Iteration Spectral Tension Check (math_engine.py)
```

---

# ⚡ **Quickstart**

### 1. Install dependencies  
```
pip install -r requirements.txt
npm install
```

### 2. Run the Python reference solver  
```
python3 src/main.py
```

### 3. Run the TypeScript solver tests  
```
npm test
```

---

# ⚖️ **Licensing, Provenance & Credits**

### 📄 Split‑Contract License Architecture  
- **MIT License** — scaffolding, utilities, mechanics, telemetry, tests, pipelines  
- **CAUSA Non‑Commercial License 1.1** — continuous relaxation kernel  

### 🪶 Provenance & Theoretical Context  
EcoGrid’s mathematical lineage descends from ANIMA and CAUSA spectral‑geometry architectures.  
It adheres strictly to the NDH A3 Mechanical Integration Specification (v1.0).

### 🔬 Citation  
```
Stell (2026). CAUSA: Causal Agency and Utterance-State Alignment (v0.1.0).
DOI: 10.5281/zenodo.22811988
```

---

