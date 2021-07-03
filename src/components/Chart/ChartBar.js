import React from 'react';
import './ChartBar.css';

const ChartBar = ({ value, label, maxValue }) => {
  return (
    <div className="chart-bar">
      <div className="chart-bar__bar">
        <div
          className="chart-bar__fill"
          style={{ height: (value / maxValue) * 100 + '%' }}
        ></div>
      </div>
      <div className="chart-bar__label">{label}</div>
    </div>
  );
};

export default ChartBar;
