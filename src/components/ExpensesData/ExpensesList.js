import React, { useState } from 'react';
import './ExpensesList.css';
import ExpenseItem from './ExpenseItem';
import FilterExpenses from './FilterExpenses';

const ExpensesList = ({ items }) => {
  const [filterYear, setFilterYear] = useState('Filter year');

  return (
    <>
      <FilterExpenses />
      <div className="expenses-list">
        {items.map((item) => (
          <ExpenseItem
            key={item.id}
            title={item.title}
            date={item.date}
            amount={item.amount}
          />
        ))}
      </div>
    </>
  );
};

export default ExpensesList;
