import React from 'react';
import './ExpensesData.css';
import ExpenseForm from '../NewExpense/ExpenseForm';
import ExpensesList from './ExpensesList';

const ExpensesData = ({ items, addNewExpenseHandler, filterChangeHandler }) => {
  return (
    <div className="expenses-data">
      <ExpenseForm addNewExpenseHandler={addNewExpenseHandler} />
      <ExpensesList items={items} filterChangeHandler={filterChangeHandler} />
    </div>
  );
};

export default ExpensesData;
