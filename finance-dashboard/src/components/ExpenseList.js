import React from 'react'

const ExpenseList = ({ expenses, deleteExpense }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-700">Expenses</h2>
      {expenses.length === 0 ? (
        <p className="text-gray-500">No expenses added yet.</p>
      ) : (
        <ul className="divide-y divide-gray-200">
          {expenses.map((expense) => (
            <li
              key={expense._id}
              className="flex justify-between py-3 items-center hover:bg-gray-50 rounded transition"
            >
              <span className="font-medium text-gray-800">{expense.category}</span>
              <span className="flex items-center gap-4">
                ${expense.amount}
                <button
                  onClick={() => deleteExpense(expense._id)}
                  className="text-red-500 hover:text-red-700"
                >
                  Delete
                </button>
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ExpenseList;

