import React from 'react';
import './Chart.css';
import ChartBar from './ChartBar';

const ExpensesChart = ({ items }) => {
  const allExpensesAmount = items.map((expense) => expense.amount);
  const maxValue = Math.max(...allExpensesAmount);
  const formattedMax = maxValue > 0 ? `$${maxValue.toFixed(2)}` : '$0.00';
  const chartDataPoints = [
    { label: 'Jan', value: 0 },
    { label: 'Feb', value: 0 },
    { label: 'Mar', value: 0 },
    { label: 'Apr', value: 0 },
    { label: 'May', value: 0 },
    { label: 'Jun', value: 0 },
    { label: 'Jul', value: 0 },
    { label: 'Aug', value: 0 },
    { label: 'Sep', value: 0 },
    { label: 'Oct', value: 0 },
    { label: 'Nov', value: 0 },
    { label: 'Dec', value: 0 },
  ];

  const totalExpense = items.reduce((total, val) => total + val.amount, 0);

  for (const expense of items) {
    const month = expense.date.getMonth();
    chartDataPoints[month].value += expense.amount;
  }

  const formattedTotal = `$${totalExpense.toFixed(2)}`;

  return (
    <div className="chart">
      {/* <h1 className="header">Analyse</h1> */}
      <div className="chart__board">
        {chartDataPoints.map((dataPoint) => (
          <ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            label={dataPoint.label}
            maxValue={maxValue}
          />
        ))}
      </div>
      <div className="chart__details">
        <p>Total in year:</p>
        <span className="chart__details--total">{formattedTotal}</span>
        <p>Maximum expense:</p>
        <span className="chart__details--max">{formattedMax}</span>
      </div>
    </div>
  );
};

export default ExpensesChart;
