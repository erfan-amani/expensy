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

  const addNewExpense = (enteredExpense) => {
    const newExpenseData = { id: Math.random().toString(), ...enteredExpense };
    setExpenses((prevExpenses) => [newExpenseData, ...prevExpenses]);
  };

  return (
    <Card className="container">
      <Chart expenses={expenses} />
      <ExpensesData items={expenses} addNewExpenseHandler={addNewExpense} />
    </Card>
  );
};

export default App;
