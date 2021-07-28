import React from 'react';
import './ExpensesList.css';
import ExpenseItem from './ExpenseItem';
import FilterExpenses from './FilterExpenses';

const ExpensesList = ({ items, filterChangeHandler, removeExpense }) => {
  let renderedExpenses = <p>No expenses found.</p>;

  if (items.length > 0) {
    renderedExpenses = items.map((item) => (
      <ExpenseItem
        key={item.id}
        title={item.title}
        date={item.date}
        amount={item.amount}
        onRemove={removeExpense.bind(null, item.id)}
      />
    ));
  }

  return (
    <>
      <FilterExpenses filterChangeHandler={filterChangeHandler} />
      <div className="expenses-list">{renderedExpenses}</div>
    </>
  );
};

export default ExpensesList;
