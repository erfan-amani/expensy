import { useState } from 'react';
import './ExpensesData.css';
import ExpenseForm from '../NewExpense/ExpenseForm';
import ExpensesList from './ExpensesList';
import AddIcon from '../UI/icon/AddIcon';

const ExpensesData = ({
  items,
  addNewExpenseHandler,
  removeExpense,
  filterChangeHandler,
}) => {
  const [formIsVisible, setFormIsVisible] = useState(false);

  const openFormHandler = () => {
    setFormIsVisible(true);
  };

  const closeFormHandler = () => {
    setFormIsVisible(false);
  };

  return (
    <div className="expenses-data">
      <h1 className="header">Expensy</h1>
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
      <ExpensesList
        items={items}
        removeExpense={removeExpense}
        filterChangeHandler={filterChangeHandler}
      />
    </div>
  );
};

export default ExpensesData;
