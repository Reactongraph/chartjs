import React from "react";
import { Bar } from "react-chartjs-2";

function BarChart({ dailyData }) {
  const barChart = dailyData?.length ? (
    <Bar
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [
          {
            label: "Infected",
            backgroundColor: "rgba(54, 162, 235, 0.2)",
            borderColor: "rgba(54, 162, 235, 1)",
            borderWidth: 1,
            hoverBackgroundColor: "rgba(54, 162, 235, 0.4)",
            hoverBorderColor: "rgba(54, 162, 235, 1)",
            data: dailyData.map(({ confirmed }) => confirmed),
          },
          {
            label: "Deaths",
            backgroundColor: "rgba(255,99,132,0.2)",
            borderColor: "rgba(255,99,132,1)",
            borderWidth: 1,
            hoverBackgroundColor: "rgba(255,99,132,0.4)",
            hoverBorderColor: "rgba(255,99,132,1)",
            data: dailyData.map(({ deaths }) => deaths),
          },
        ],
      }}
    />
  ) : null;
  return <>{barChart}</>;
}

export default BarChart;
