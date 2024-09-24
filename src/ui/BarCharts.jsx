import React from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";
import { useWindowSize } from "@uidotdev/usehooks";

const BarChart = () => {
  const data = {
    labels: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
    datasets: [
      {
        data: [45, 65, 50, 41, 90, 70, 60],
        backgroundColor: [
          "rgba(115, 103, 240, 0.16)",
          "rgba(115, 103, 240, 0.16)",
          "rgba(115, 103, 240, 0.16)",
          "rgba(115, 103, 240, 0.16)",
          "rgba(115, 103, 240, 0.16)",
          "rgba(115, 103, 240, 0.16)",
          "rgba(115, 103, 240, 0.16)",
        ],
      },
    ],
  };

  // En yüksek değere sahip olan günün index'ini bulma
  const maxIndex = data.datasets[0].data.indexOf(
    Math.max(...data.datasets[0].data)
  );

  // En yüksek değere sahip olan günün arka plan rengini belirleme
  data.datasets[0].backgroundColor[maxIndex] = "rgba(115, 103, 240, 0.7)";

  const options = {
    responsive: true,
    scales: {
      y: {
        display: false,
        beginAtZero: false,
        grid: {
          display: false, // Grid lines removed
        },
      },
      x: {
        grid: {
          display: false, // Grid lines removed
        },
        border: {
          display: false, // Removes the border line
        },
        ticks: {
          display: true, // Display labels
          font: {
            size: 12,
          },
          color: "black",
        },
      },
    },
    plugins: {
      legend: {
        display: false, // Legends removed
      },
      tooltip: {
        enabled: false, // Tooltips removed
      },
    },
  };

  const size = useWindowSize();

  return (
    <div style={{ width: "100%" }}>
      <Bar data={data} options={options} key={`bar-${size.width}`} />
    </div>
  );
};

export default BarChart;
