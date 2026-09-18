"""
EcoGrid Manifold Engine — Test: Nullspace Escape (Stub)
Altitude: A3
Lane: TESTING

This test provides a structural placeholder for nullspace escape checks.
In a full implementation, it would ensure that the manifold does not
collapse into degenerate states under relaxation dynamics.

NDH Non-Activation Clause:
All tests here are inert. No spectral radius calculations, CFL timestep
logic, or continuous relaxation kernels are executed.
"""

import unittest

from src.math_engine import MathEngine


class TestNullspaceEscape(unittest.TestCase):
    """
    TestNullspaceEscape

    Ensures (stub level):
    - MathEngine can be initialized with non-uniform topology
    - State vector remains stable and non-degenerate in the inert stub
    """

    def test_non_uniform_initialization(self):
        """MathEngine must accept a non-uniform 9D topology array."""
        topology_9d = [0.1, 0.2, 0.3, 0.4, 0.5, 0.4, 0.3, 0.2, 0.1]
        engine = MathEngine(topology_9d)
        self.assertEqual(engine.state_vector, topology_9d)

    def test_no_nullspace_collapse_in_stub(self):
        """
        In the inert stub, the state vector must not collapse
        to all zeros or a single repeated value.
        """
        topology_9d = [0.05 * i for i in range(9)]
        engine = MathEngine(topology_9d)
        state = engine.step()

        # Ensure state is not all zeros
        self.assertTrue(any(x != 0.0 for x in state))

        # Ensure state is not a single repeated value
        self.assertGreater(len(set(state)), 1)


if __name__ == "__main__":
    unittest.main()
