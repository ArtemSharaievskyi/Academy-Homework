import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ExpenseItem = ({ expense, onDelete }) => {
  const { id, title, amount, category, date } = expense;
  return (
    <li className="expense-item">
      <div className="info">
        <h4>{title}</h4>
        <p>Сума: {amount}</p>
        <p>Категорія: {category}</p>
        <p>Дата: {new Date(date).toLocaleDateString()}</p>
      </div>
      <div className="actions">
        <Link to={`/edit/${id}`}>Edit</Link>
        <button onClick={() => onDelete(id)}>Delete</button>
      </div>
    </li>
  );
};

ExpenseItem.propTypes = {
  expense: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ExpenseItem;