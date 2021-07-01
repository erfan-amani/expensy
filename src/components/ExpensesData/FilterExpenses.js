import React from 'react';
import './FilterExpenses.css';

const FilterExpenses = ({ items }) => {
  return (
    <div className="filter-expenses">
      <h4 className="filter-expenses__header">Expense List</h4>
      <div className="filter-expenses__select">
        <select>
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
