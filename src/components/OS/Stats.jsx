import React from 'react';

const Stats = ({ stats }) => (
  <div className="stats">
    <p><strong>CPU Idle Time:</strong> {stats.idleTime} units</p>
    <p><strong>Completion Time:</strong> {stats.completionTime} units</p>
  </div>
);

export default Stats;
