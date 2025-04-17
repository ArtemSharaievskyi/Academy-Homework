import React from 'react';
import { useSelector } from 'react-redux';
import {
  PieChart, Pie, Cell,
  BarChart, Bar, XAxis, YAxis, Tooltip, Legend,
} from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const Charts = () => {
  const expenses = useSelector(state => state.expenses.items);

  // Групування за категоріями
  const data = Object.values(
    expenses.reduce((acc, exp) => {
      acc[exp.category] = acc[exp.category] || { category: exp.category, amount: 0 };
      acc[exp.category].amount += Number(exp.amount);
      return acc;
    }, {})
  );

  return (
    <>
      <h2>Expense Charts</h2>
      <div className="chart-wrapper">
        <PieChart width={400} height={300}>
          <Pie data={data} dataKey="amount" nameKey="category" cx="50%" cy="50%" outerRadius={80}>  
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>

        <BarChart width={500} height={300} data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <XAxis dataKey="category" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="amount">
            {data.map((entry, index) => (
              <Cell key={`cell-bar-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Bar>
        </BarChart>
      </div>
    </>
  );
};

export default Charts;