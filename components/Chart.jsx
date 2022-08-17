import "chart.js/auto";
import { Line } from "react-chartjs-2";
import { useState } from "react";

const ChartBar = ({ history }) => {
  const coinHistory = [];
  const coinTimestamp = [];

  if (!Array.isArray(history)) return null;

  for (let i = 0; i < history.length; i++) {
    coinHistory.push(history[i].price);
  }
  for (let i = 0; i < history.length; i++) {
    coinTimestamp.push(history[i].timestamp);
  }

  const datasets = {
    labels: coinTimestamp.map((coin) => new Date(coin).toLocaleDateString()),
    datasets: [
      {
        id: 1,
        label: "",
        data: coinHistory.map((coin) => coin),
        fill: false,
        backgroundColor: "#0071bd",
        borderColor: "#0071bd",
      },
    ],
  };
  return (
    <div className="w-full mt-10 xl:h-full">
      <Line data={datasets} />
    </div>
  );
};

export default ChartBar;
