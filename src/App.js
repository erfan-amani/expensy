import React from 'react';
import './App.css';
import ExpensesList from './components/ExpensesList/ExpensesList';
import Card from './components/UI/Card';

const App = () => {
  return (
    <Card className="container">
      <ExpensesList />
    </Card>
  );
};

export default App;
