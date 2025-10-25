import React from 'react'

const ExpenseList = ({ expenses }) => {
  return (
    <div className="border rounded p-4">
      <h2 className="text-xl font-bold mb-2">Expenses</h2>
      {expenses.length === 0 ? (
        <p>No expenses added yet.</p>
      ) : (
        <ul>
          {expenses.map((expense, index) => (
            <li
              key={index}
              className="flex justify-between border-b py-2 last:border-b-0"
            >
              <span>{expense.category}</span>
              <span>${expense.amount}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ExpenseList;
