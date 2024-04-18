import React from "react";
import { Line, Bubble } from "react-chartjs-2";
function BubbleChart({ dailyData }) {
  const bubbleChart = dailyData?.length ? (
    <Bubble
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [
          {
            label: "Infected",
            backgroundColor: "#3333ff",
            borderColor: "#3333ff",
            data: dailyData.map(({ confirmed, deaths, date }) => ({
              x: deaths,
              y: confirmed,
              r: +"10",
            })),
          },
          {
            label: "Deaths",
            backgroundColor: "#FF6384",
            borderColor: "#rgba(255,99,132,0.2)",
            data: dailyData.map(({ deaths, index }) => ({
              x: deaths,
              y: deaths,
              r: 10,
            })),
          },
        ],
      }}
    />
  ) : null;
  return <>{bubbleChart}</>;
}

export default BubbleChart;
