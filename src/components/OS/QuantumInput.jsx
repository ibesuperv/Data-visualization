import React from "react";

const QuantumInput = ({ quantum, setQuantum }) => (
  <div className="quantum-input">
    <label>
      Quantum:
      <input
        type="number"
        value={quantum}
        onChange={(e) => setQuantum(Number(e.target.value))}
        min="1"
      />
    </label>
  </div>
);

export default QuantumInput;
