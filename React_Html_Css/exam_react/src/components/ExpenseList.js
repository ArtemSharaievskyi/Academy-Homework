import React from 'react';
import PropTypes from 'prop-types';
import ExpenseItem from './ExpenseItem';

const ExpenseList = ({ expenses, onDelete }) => {
  if (!expenses.length) return <p>No expenses found.</p>;

  return (
    <ul className="expense-list">
      {expenses.map(exp => (
        <ExpenseItem key={exp.id} expense={exp} onDelete={onDelete} />
      ))}
    </ul>
  );
};

ExpenseList.propTypes = {
  expenses: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ExpenseList;