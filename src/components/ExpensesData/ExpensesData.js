import { useState } from 'react';
import './ExpensesData.css';
import ExpenseForm from '../NewExpense/ExpenseForm';
import ExpensesList from './ExpensesList';
import AddIcon from '../UI/icon/AddIcon';

const ExpensesData = ({ items, addNewExpenseHandler, filterChangeHandler }) => {
  const [formIsVisible, setFormIsVisible] = useState(false);

  const openFormHandler = () => {
    setFormIsVisible(true);
  };

  const closeFormHandler = () => {
    setFormIsVisible(false);
  };

  return (
    <div className="expenses-data">
      {formIsVisible ? (
        <ExpenseForm
          addNewExpenseHandler={addNewExpenseHandler}
          onClose={closeFormHandler}
        />
      ) : (
        <button className="open" onClick={openFormHandler}>
          New Expense
          <AddIcon />
        </button>
      )}
      <ExpensesList items={items} filterChangeHandler={filterChangeHandler} />
    </div>
  );
};

export default ExpensesData;
