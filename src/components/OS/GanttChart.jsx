import React from 'react';

const GanttChart = ({ chart, animationIndex, idleTime }) => {
  const renderGantt = () => {
    let ganttChart = [];
    let lastEndTime = 0;

    chart.forEach((p, index) => {
      // CPU idle gap
      if (p.start > lastEndTime) {
        ganttChart.push(
          <div
            key={`idle-${lastEndTime}`}
            className="idle-time"
            style={{ width: `${(p.start - lastEndTime) * 50}px` }}
          >
            Idle
          </div>
        );
      }
      // Process block
      ganttChart.push(
        <div
          key={p.id}
          className={`process-bar ${index === animationIndex ? 'active' : ''}`}
          style={{ width: `${p.burst * 50}px` }}
          title={`P${p.id}: Start ${p.start}, End ${p.end}`}
        >
          P{p.id}
        </div>
      );
      lastEndTime = p.end;
    });

    return ganttChart;
  };

  return (
    <div className="gantt-chart">
      {renderGantt()}
    </div>
  );
};

export default GanttChart;
