import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { editExpense } from '../redux/expenseSlice';
import ExpenseForm from '../components/ExpenseForm';

const EditExpense = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const expense = useSelector(state =>
    state.expenses.items.find(e => e._id === id)
  );

  useEffect(() => {
    if (!expense) navigate('/');
  }, [expense, navigate]);

  const initialValues = expense || {
    title: '',
    amount: '',
    category: '',
    date: '',
  };

  const handleSubmit = (values) => {
    dispatch(editExpense({ _id: id, ...values }));
    navigate('/');
  };

  return (
    <>
      <h2>Edit Expense</h2>
      <ExpenseForm initialValues={initialValues} onSubmit={handleSubmit} />
    </>
  );
};

export default EditExpense;
