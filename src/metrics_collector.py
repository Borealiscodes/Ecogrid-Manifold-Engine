"""
EcoGrid Manifold Engine — Metrics Collector (Stub)
Altitude: A3
Lane: METRICS / TELEMETRY

This module provides inert, altitude-safe telemetry scaffolding for EcoGrid.
It tracks FLOP estimates, tension glyphs, and placeholder resource metrics
without activating any solver, spectral kernel, or continuous relaxation loop.

NDH Non-Activation Clause:
All methods in this stub are inert. No real FLOP counting, tension modeling,
or spectral analysis is performed.
"""

import json
from pathlib import Path
from typing import List, Dict, Any


CONFIG_DIR = Path(__file__).resolve().parent.parent / "config"
VISUAL_GRAMMAR_PATH = CONFIG_DIR / "visual_grammar.json"


class MetricsCollector:
    """
    MetricsCollector (Stub)

    Responsibilities:
    - Provide placeholder FLOP counters
    - Provide inert tension glyph selection
    - Expose safe telemetry surfaces for runtime HUD
    """

    def __init__(self, grammar_path: Path = VISUAL_GRAMMAR_PATH) -> None:
        self.grammar_path = grammar_path
        self.grammar: Dict[str, Any] = self._load_grammar()

        # Inert counters
        self._flop_counter = 0
        self._tension_state = "equilibrium"

    def _load_grammar(self) -> Dict[str, Any]:
        """
        Load visual grammar JSON for HUD glyph mapping.
        """
        if not self.grammar_path.exists():
            raise FileNotFoundError(f"Visual grammar file not found at: {self.grammar_path}")

        with self.grammar_path.open("r", encoding="utf-8") as f:
            return json.load(f)

    def increment_flops(self, amount: int = 1) -> None:
        """
        Inert FLOP counter increment.

        Args:
            amount (int): Placeholder increment amount.
        """
        # Inert: no real FLOP tracking
        self._flop_counter += amount

    def get_flops(self) -> int:
        """
        Return inert FLOP counter.
        """
        return self._flop_counter

    def compute_tension_state(self, state_vector: List[float]) -> str:
        """
        Placeholder tension state computation.

        Args:
            state_vector (List[float]): Inert state vector.

        Returns:
            str: Always 'equilibrium' in this stub.
        """
        # Inert: always equilibrium
        self._tension_state = "equilibrium"
        return self._tension_state

    def get_tension_glyph(self) -> str:
        """
        Return the HUD glyph for the current tension state.
        """
        symbols = self.grammar.get("runtime_state_symbols", {})
        return symbols.get(self._tension_state, {}).get("unicode_char", "•")


if __name__ == "__main__":
    # Minimal inert sanity check
    mc = MetricsCollector()
    mc.increment_flops(5)
    print("EcoGrid Metrics Collector (Stub)")
    print("FLOPs:", mc.get_flops())
    print("Tension Glyph:", mc.get_tension_glyph())
