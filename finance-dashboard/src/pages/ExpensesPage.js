import React from 'react'

import { useState } from "react";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";

const ExpensesPage = () => {
  const [expenses, setExpenses] = useState([
    { category: "Food", amount: 500 },
    { category: "Transport", amount: 200 },
  ]);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const totalExpenses = expenses.reduce((sum, exp) => sum + exp.amount, 0);

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-extrabold mb-6 text-center text-gray-800">
        Expense Tracker
      </h1>

      {/* Expense Form */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <ExpenseForm addExpense={addExpense} />
      </div>

      {/* Total Expenses */}
      <div className="bg-gray-800 text-white text-lg font-semibold rounded-lg p-4 mb-4 text-center shadow">
        Total Expenses: ${totalExpenses}
      </div>

      {/* Expense List */}
      <ExpenseList expenses={expenses} />
    </div>
  );
};

export default ExpensesPage;
