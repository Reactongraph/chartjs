import React from "react";
import { Doughnut } from "react-chartjs-2";
function DoughnutChart({ dailyData }) {
  const doughnutChart = dailyData?.length ? (
    <Doughnut
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [
          {
            label: "Doughnut Chart",
            backgroundColor: [
              "#FF6384",
              "#36A2EB",
              "#FFCE56",
              "#4BC0C0",
              "#9966FF",
            ],
            borderColor: "#fff",
            data: dailyData.map(
              ({ confirmed, deaths, recovered }) =>
                confirmed - deaths - (recovered || 0)
            ),
          },
        ],
      }}
    />
  ) : null;
  return <>{doughnutChart}</>;
}

export default DoughnutChart;
