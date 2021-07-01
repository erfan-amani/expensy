import React from 'react';
import './ExpensesData.css';
import ExpenseForm from '../NewExpense/ExpenseForm';
import ExpensesList from './ExpensesList';
import FilterExpenses from './FilterExpenses';

const ExpensesData = ({ items, addNewExpenseHandler }) => {
  return (
    <div className="expenses-data">
      <ExpenseForm addNewExpenseHandler={addNewExpenseHandler} />
      <FilterExpenses items={items} />
      <ExpensesList items={items} />
    </div>
  );
};

export default ExpensesData;
