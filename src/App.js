import React, { useState } from 'react';
import './App.css';
import Chart from './components/Chart/Chart';
import ExpensesData from './components/ExpensesData/ExpensesData';
import Card from './components/UI/Card';

const INITIAL_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: 'e5',
    title: 'Keyboard',
    amount: 30,
    date: new Date(2021, 5, 22),
  },
  {
    id: 'e7',
    title: 'New Shose',
    amount: 90.5,
    date: new Date(2021, 6, 13),
  },
  {
    id: 'e8',
    title: 'Sunglasses',
    amount: 70,
    date: new Date(2021, 8, 2),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);
  const [filteredYear, setFilteredYear] = useState('Filter year');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  let filteredExpenses = [...expenses];

  if (filteredYear !== 'Filter year') {
    filteredExpenses = expenses.filter(
      (item) => item.date.getFullYear().toString() === filteredYear
    );
  }

  const addNewExpense = (expense) => {
    const newExpenseData = {
      id: Math.random().toString() + expense.title,
      ...expense,
    };
    setExpenses((prevExpenses) => [newExpenseData, ...prevExpenses]);
  };

  const removeExpense = (id) => {
    setExpenses((prev) => prev.filter((exp) => exp.id !== id));
  };

  return (
    <Card className="container">
      <ExpensesData
        items={filteredExpenses}
        addNewExpenseHandler={addNewExpense}
        removeExpense={removeExpense}
        filterChangeHandler={filterChangeHandler}
      />
      <Chart
        items={filteredExpenses}
        filterChangeHandler={filterChangeHandler}
      />
    </Card>
  );
};

export default App;
