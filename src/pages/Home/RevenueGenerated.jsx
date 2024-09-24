import React from "react";
import { CiCreditCard1 } from "react-icons/ci";
import { Line } from "react-chartjs-2";
import { CustomCard } from "../../ui/CustomCard";

const RevenueGenerated = ({ value }) => {
  const backgroundColor = "rgba(75, 192, 192, 0.2)";
  const borderColor = "rgba(38, 163, 165, 1)";
  const pointBackgroundColor = "rgba(75, 192, 192, 1)";

  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Revenue Generated",
        data: [10, 20, 15, 30, 25, 40, value],
        fill: true,
        cubicInterpolationMode: "monotone",
        tension: 0.4,
        backgroundColor: backgroundColor,
        borderColor: borderColor,
        pointStyle: "circle",
        pointRadius: 0,
        pointBackgroundColor: pointBackgroundColor,
      },
    ],
  };

  
  const options = {
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
    elements: {
      line: {
        borderRadius: 100,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
  };

  return (
    <CustomCard className="w-[calc(50%)] p-0">
      <div className="p-[24px]">
        <span className="w-[40px] bg-[#dff7e9] text-[18px] text-green-500 flex items-center justify-center h-[40px] relative rounded-full">
          <CiCreditCard1 />
        </span>
        <h5 className="mb-0 pt-3 text-[22px] text-gray-500 leading-7 font-semibold">
          {value}
        </h5>
        <small className="text-gray-400 text-sm">Revenue Generated</small>
      </div>
      {/* Grafik */}
      <Line data={data} options={options} />
    </CustomCard>
  );
};

export default RevenueGenerated;
