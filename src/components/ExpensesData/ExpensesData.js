import React from 'react';
import './ExpensesData.css';
import ExpenseForm from './ExpenseForm';
import ExpensesList from './ExpensesList';

const ExpensesData = ({ items }) => {
  return (
    <div className="expenses-data">
      <ExpenseForm />
      <ExpensesList items={items} />
    </div>
  );
};

export default ExpensesData;
