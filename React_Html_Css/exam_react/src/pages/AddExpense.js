import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addExpense } from '../redux/expenseSlice';
import ExpenseForm from '../components/ExpenseForm';

const AddExpense = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValues = { title: '', amount: '', category: '', date: '' };

  const handleSubmit = (values) => {
    dispatch(addExpense(values));
    navigate('/');
  };

  return (
    <>
      <h2>Add Expense</h2>
      <ExpenseForm initialValues={initialValues} onSubmit={handleSubmit} />
    </>
  );
};

export default AddExpense;