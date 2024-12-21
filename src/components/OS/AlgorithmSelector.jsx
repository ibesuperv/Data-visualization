import React from 'react';

const AlgorithmSelector = ({ algorithm, setAlgorithm }) => (
  <div className="algorithm-selector">
    <label>
      Algorithm:
      <select value={algorithm} onChange={(e) => setAlgorithm(e.target.value)}>
        <option value="FCFS">FCFS</option>
        <option value="SJF">SJF</option>
      </select>
    </label>
  </div>
);

export default AlgorithmSelector;
