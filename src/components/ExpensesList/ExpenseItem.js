import React from 'react';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = ({ title, date, amount }) => {
  // console.log(date.toLocaleString());
  return (
    <Card className="expense-item">
      <div className="expense-item__title">{title}</div>
      <div className="expense-item__date">
        {date.toLocaleString('en-GB', {
          day: '2-digit',
          year: 'numeric',
          month: 'short',
        })}
      </div>
      <div className="expense-item__amount">{'$' + amount}</div>
    </Card>
  );
};

export default ExpenseItem;
