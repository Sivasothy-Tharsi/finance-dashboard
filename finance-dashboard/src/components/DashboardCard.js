import React from 'react'

const DashboardCard = ({ title, amount, color }) => {
  return (
    <div className={`p-4 rounded shadow ${color} text-white`}>
      <h3 className="text-lg">{title}</h3>
      <p className="text-2xl font-bold">${amount}</p>
    </div>
  );
};

export default DashboardCard;
