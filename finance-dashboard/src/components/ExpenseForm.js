import React from 'react'

import { useState } from "react";


const ExpenseForm = ({ addExpense }) => {
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!category || !amount) return;
    addExpense({ category, amount: parseFloat(amount) });
    setCategory("");
    setAmount("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="border p-3 rounded-lg flex-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="border p-3 rounded-lg w-full md:w-32 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        type="submit"
        className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
      >
        Add
      </button>
    </form>
  );
};

export default ExpenseForm;

