import React, { useState } from "react";

const ExpenseForm = ({ addExpense }) => {
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("expense"); // new state

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!category || !amount) return;
    addExpense({
      category,
      amount: parseFloat(amount),
      type, // send type to backend
    });
    setCategory("");
    setAmount("");
    setType("expense");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 items-center">
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
      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="border p-3 rounded-lg w-full md:w-32 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>
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
