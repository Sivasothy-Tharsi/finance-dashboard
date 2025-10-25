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

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Manage Expenses</h1>
      <ExpenseForm addExpense={addExpense} />
      <ExpenseList expenses={expenses} />
    </div>
  );
};

export default ExpensesPage;
