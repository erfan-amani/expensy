import React, { useState } from 'react';
import './FilterExpenses.css';

const FilterExpenses = ({ items }) => {
  const [selectedYear, setSelectedYear] = useState('Filter year');

  const selectYearHandler = (event) => {
    setSelectedYear(event.target.value);
    console.log(event.target.value);
  };

  return (
    <div className="filter-expenses">
      <h4 className="filter-expenses__header">Expense List</h4>
      <div className="filter-expenses__select">
        <select onChange={selectYearHandler} value={selectedYear}>
          <option>Filter year</option>
          <option>2021</option>
          <option>2020</option>
          <option>2019</option>
        </select>
      </div>
    </div>
  );
};

export default FilterExpenses;
