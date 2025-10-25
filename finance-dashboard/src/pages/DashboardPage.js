import React from 'react'

import DashboardCard from "../components/DashboardCard";

const DashboardPage = () => {
  const income = 5000;
  const expenses = 3200;
  const savings = income - expenses;

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
      <DashboardCard title="Income" amount={income} color="bg-green-500" />
      <DashboardCard title="Expenses" amount={expenses} color="bg-red-500" />
      <DashboardCard title="Savings" amount={savings} color="bg-blue-500" />
    </div>
  );
};

export default DashboardPage;
