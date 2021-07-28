import React from 'react';
import Card from '../UI/Card';
import RemoveIcon from '../UI/icon/RemoveIcon';
import './ExpenseItem.css';

const ExpenseItem = ({ title, date, amount, onRemove }) => {
  const formattedAmount = `$${amount.toFixed(2)}`;

  return (
    <Card className="expense-item">
      <div className="expense-item__title">{title}</div>
      <div className="detail">
        <span className="expense-item__date">
          (
          {date.toLocaleString('en-GB', {
            day: '2-digit',
            year: 'numeric',
            month: 'short',
          })}
          )
        </span>
        <span className="expense-item__amount">{formattedAmount}</span>
      </div>
      <span className="remove-icon" onClick={onRemove}>
        <RemoveIcon />
      </span>
    </Card>
  );
};

export default ExpenseItem;
