import React from 'react'

import { useState } from "react";

const ExpenseForm = ({ addExpense }) => {
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addExpense({ category, amount: parseFloat(amount) });
    setCategory("");
    setAmount("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="border p-2 rounded"
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="border p-2 rounded"
      />
      <button className="bg-blue-500 text-white px-4 rounded">Add</button>
    </form>
  );
};

export default ExpenseForm;
