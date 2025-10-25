import React from 'react'
import { Doughnut } from "react-chartjs-2";

const Chart = ({ expenses }) => {
  const data = {
    labels: expenses.map(e => e.category),
    datasets: [
      {
        label: "Expenses",
        data: expenses.map(e => e.amount),
        backgroundColor: ["#f87171", "#60a5fa", "#34d399", "#fbbf24"],
      },
    ],
  };

  return <Doughnut data={data} />;
};

export default Chart;
