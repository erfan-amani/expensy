import React from 'react';
import './ExpensesData.css';
import ExpenseForm from '../NewExpense/ExpenseForm';
import ExpensesList from './ExpensesList';

const ExpensesData = ({ items, addNewExpenseHandler }) => {
  return (
    <div className="expenses-data">
      <ExpenseForm addNewExpenseHandler={addNewExpenseHandler} />
      <ExpensesList items={items} />
    </div>
  );
};

export default ExpensesData;
