import React from 'react';
import useInput from '../../hooks/use-input';
import '../NewExpense/ExpenseForm.css';

const isEmpty = (value) => value.trim() !== '';
const isPositive = (value) => value > 0;
const dateValidate = (value) => {
  const date = new Date(value);
  return date > new Date('2019-01-01') && date < new Date('2022-12-31');
};

const ExpenseForm = ({ addNewExpenseHandler, onClose }) => {
  const {
    value: title,
    valueIsValid: titleIsValid,
    hasError: titleHasError,
    onChange: titleChangeHandler,
    onBlur: titleBlurHandler,
    reset: resetTitle,
  } = useInput(isEmpty);
  const {
    value: amount,
    valueIsValid: amountIsValid,
    hasError: amountHasError,
    onChange: amountChangeHandler,
    onBlur: amountBlurHandler,
    reset: resetAmount,
  } = useInput(isPositive);
  const {
    value: date,
    valueIsValid: dateIsValid,
    hasError: dateHasError,
    onChange: dateChangeHandler,
    onBlur: dateBlurHandler,
    reset: resetDate,
  } = useInput(dateValidate);

  const formIsValid = titleIsValid && dateIsValid && amountIsValid;

  const submitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) return;

    const newExpense = { title, amount: +amount, date: new Date(date) };
    resetForm();
    addNewExpenseHandler(newExpense);
  };

  const resetForm = () => {
    onClose();
    resetTitle();
    resetAmount();
    resetDate();
  };

  const titleClasses = titleHasError ? 'control invalid' : 'control';
  const dateClasses = dateHasError ? 'control invalid' : 'control';
  const amountClasses = amountHasError ? 'control invalid' : 'control';

  return (
    <form className="expenses-form" onSubmit={submitHandler}>
      <div className={titleClasses}>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={titleChangeHandler}
          onBlur={titleBlurHandler}
        />
        {titleHasError && <p className="error-text">Title can't be empty!</p>}
      </div>
      <div className={dateClasses}>
        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          min="2019-01-01"
          max="2022-12-31"
          value={date}
          onChange={dateChangeHandler}
          onBlur={dateBlurHandler}
        />
        {dateHasError && <p className="error-text">Enter valid date!</p>}
      </div>
      <div className={amountClasses}>
        <label htmlFor="amount">Amount</label>
        <input
          id="amount"
          type="number"
          min=".01"
          step=".01"
          value={amount}
          onChange={amountChangeHandler}
          onBlur={amountBlurHandler}
        />
        {amountHasError && <p className="error-text">Enter positive number!</p>}
      </div>
      <div className="expenses-form__submit">
        <button type="reset" href="." className="cansel" onClick={resetForm}>
          Cansel
        </button>
        <button type="submit" className="add" disabled={!formIsValid}>
          Add
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
