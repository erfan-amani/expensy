import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const newExpense = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    emptyInputs();
    console.log(newExpense);
  };

  const emptyInputs = (event = null) => {
    if (event) event.preventDefault();
    setEnteredAmount('');
    setEnteredDate('');
    setEnteredTitle('');
  };

  return (
    <form className="expenses-form" onSubmit={submitHandler}>
      <div className="expenses-form__title">
        <label>Title</label>
        <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
      </div>
      <div className="expenses-form__date">
        <label>Date</label>
        <input
          type="date"
          min="2019-01-01"
          max="2022-12-31"
          value={enteredDate}
          onChange={dateChangeHandler}
        />
      </div>
      <div className="expenses-form__amount">
        <label>Amount</label>
        <input
          type="number"
          min=".01"
          step=".01"
          value={enteredAmount}
          onChange={amountChangeHandler}
        />
      </div>
      <div className="expenses-form__submit">
        <a href="." className="cansel" onClick={emptyInputs}>
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
