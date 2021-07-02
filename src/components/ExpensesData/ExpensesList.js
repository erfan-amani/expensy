import React, { useState } from 'react';
import './ExpensesList.css';
import ExpenseItem from './ExpenseItem';
import FilterExpenses from './FilterExpenses';

const ExpensesList = ({ items }) => {
  const [filteredYear, setFilteredYear] = useState('Filter year');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  let renderedExpenses = <p>No expenses found.</p>;
  if (filteredYear === 'Filter year') {
    renderedExpenses = items.map((item) => (
      <ExpenseItem
        key={item.id}
        title={item.title}
        date={item.date}
        amount={item.amount}
      />
    ));
  } else {
    const filteredExpenses = items.filter(
      (item) => item.date.getFullYear().toString() === filteredYear
    );

    if (filteredExpenses.length > 0) {
      renderedExpenses = filteredExpenses.map((item) => (
        <ExpenseItem
          key={item.id}
          title={item.title}
          date={item.date}
          amount={item.amount}
        />
      ));
    }
  }

  return (
    <>
      <FilterExpenses
        selectedYear={filteredYear}
        filterChangeHandler={filterChangeHandler}
      />
      <div className="expenses-list">{renderedExpenses}</div>
    </>
  );
};

export default ExpensesList;
