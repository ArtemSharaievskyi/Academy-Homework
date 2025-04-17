import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchExpenses, deleteExpense } from '../redux/expenseSlice';
import ExpenseList from '../components/ExpenseList';
import SearchBar from '../components/SearchBar';


const Dashboard = () => {
  const dispatch = useDispatch();
  const { items, status, error } = useSelector(state => state.expenses);

  useEffect(() => { dispatch(fetchExpenses()); }, [dispatch]);

  const onDelete = id => { dispatch(deleteExpense(id)); };

  return (
    <>
      <h2>Dashboard</h2>
      {status === 'loading' && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <SearchBar />
      <ExpenseList expenses={items} onDelete={onDelete} />
    </>
  );
};
export default Dashboard;