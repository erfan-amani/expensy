import React from 'react';
import './Chart.css';
import ChartBar from './ChartBar';

const ExpensesChart = ({ expenses, max }) => {
  const allExpensesAmount = expenses.map((expense) => expense.amount);
  const maxValue = Math.max(...allExpensesAmount);
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

  for (const expense of expenses) {
    const month = expense.date.getMonth();
    chartDataPoints[month].value += expense.amount;
  }
  console.log(chartDataPoints);

  return (
    <div className="chart">
      <h1 className="chart__header">Expensy</h1>
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
        <span className="chart__details--total">$1450.25</span>
        <p>Maximum expense:</p>
        <span className="chart__details--max">$530 - Buying TV</span>
      </div>
    </div>
  );
};

export default ExpensesChart;
