import React from 'react'

import Chart from "../components/Chart";

const expenses = [
  { category: "Food", amount: 800 },
  { category: "Transport", amount: 500 },
  { category: "Entertainment", amount: 400 },
];

const ReportsPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Expenses Report</h1>
      <Chart expenses={expenses} />
    </div>
  );
};

export default ReportsPage;
