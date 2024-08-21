import React from "react";
import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const AlertGraphPage = () => {
  const data = {
    labels: ["Wildlife", "Traffic", "Construction"],
    datasets: [
      {
        label: "Number of Alerts",
        data: [12, 19, 3],
        backgroundColor: [
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
        ],
        borderColor: [
          "rgba(75, 192, 192, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const pieData = {
    labels: ["Wildlife", "Traffic", "Construction"],
    datasets: [
      {
        data: [12, 19, 3],
        backgroundColor: [
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
        ],
        borderColor: [
          "rgba(75, 192, 192, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="bg-gradient-to-tr from-gray-900 via-gray-900 to-gray-900 text-white min-h-screen px-6 py-10 flex flex-col gap-10 md:px-10 lg:px-20 lg:py-10">
      <header className="flex justify-between items-center">
        <h1 className="font-extrabold text-4xl">Alert Statistics</h1>
      </header>
      <main className="flex flex-col items-center gap-24">
        <div className="w-full lg:w-2/3 h-80">
          <h2 className="text-2xl font-bold text-center mb-4">
            Alert Types Overview
          </h2>
          <Bar data={data} options={{ maintainAspectRatio: false }} />
        </div>
        <div className="w-full lg:w-2/3 h-80 flex flex-col justify-center items-center">
          <h2 className="text-2xl font-bold text-center mb-4">
            Alert Distribution
          </h2>
          <Pie data={pieData} options={{ maintainAspectRatio: true }} />
        </div>
      </main>
    </div>
  );
};

export default AlertGraphPage;
