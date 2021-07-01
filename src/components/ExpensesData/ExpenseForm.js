import React from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
  return (
    <form className="expenses-form">
      <div className="expenses-form__title">
        <label>Title</label>
        <input type="text" />
      </div>
      <div className="expenses-form__date">
        <label>Date</label>
        <input type="date" />
      </div>
      <div className="expenses-form__amount">
        <label>Amount</label>
        <input type="number" />
      </div>
      <div className="expenses-form__submit">
        <a href="." className="cansel">
          Cansel
        </a>
        <button type="submit" className="add">
          Add
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
