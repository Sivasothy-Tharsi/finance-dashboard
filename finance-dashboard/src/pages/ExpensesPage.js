import React, { useState, useEffect } from "react";
import axios from "axios";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";

const ExpensesPage = () => {
  const [expenses, setExpenses] = useState([]);

  // Fetch expenses from backend
  const fetchExpenses = async () => {
    try {
      const res = await axios.get("http://localhost:4000/api/expenses");
      setExpenses(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  // Add new expense/income
  const addExpense = async (expense) => {
    try {
      const res = await axios.post("http://localhost:4000/api/expenses", expense);
      setExpenses([res.data, ...expenses]);
    } catch (err) {
      console.error(err);
    }
  };

  // Delete expense/income
  const deleteExpense = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/api/expenses/${id}`);
      setExpenses(expenses.filter((exp) => exp._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  // Calculate totals
  const income = expenses
    .filter((exp) => exp.type === "income")
    .reduce((sum, exp) => sum + exp.amount, 0);

  const totalExpenses = expenses
    .filter((exp) => exp.type === "expense")
    .reduce((sum, exp) => sum + exp.amount, 0);

  const savings = income - totalExpenses;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-extrabold mb-6 text-center text-gray-800">
        Personal Finance Dashboard
      </h1>

      {/* Income / Expenses / Savings cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-green-500 text-white p-4 rounded shadow text-center">
          <h3 className="font-semibold">Income</h3>
          <p className="text-xl font-bold">${income}</p>
        </div>
        <div className="bg-red-500 text-white p-4 rounded shadow text-center">
          <h3 className="font-semibold">Expenses</h3>
          <p className="text-xl font-bold">${totalExpenses}</p>
        </div>
        <div className="bg-blue-500 text-white p-4 rounded shadow text-center">
          <h3 className="font-semibold">Savings</h3>
          <p className="text-xl font-bold">${savings}</p>
        </div>
      </div>

      {/* Expense Form */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <ExpenseForm addExpense={addExpense} />
      </div>

      {/* Expense/Income List */}
      <ExpenseList expenses={expenses} deleteExpense={deleteExpense} />
    </div>
  );
};

export default ExpensesPage;
