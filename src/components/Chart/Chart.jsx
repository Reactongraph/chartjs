import React, { useState, useEffect } from "react";
import { Line, Doughnut, Bar } from "react-chartjs-2";
import styles from "./Chart.module.css";
import BubbleChart from "./bubbleChart";

const Chart = ({ country, fetchedData }) => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    if (country !== "global") {
      const filteredData = fetchedData.filter(
        (data) => data.country === country
      );
      setDailyData(filteredData);
    } else {
      setDailyData(fetchedData);
    }
  }, [country, fetchedData, setDailyData]);

  const lineChart = dailyData?.length ? (
    <Line
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [
          {
            data: dailyData.map(({ confirmed }) => confirmed),
            label: "Infected",
            borderColor: "#3333ff",
            fill: true,
          },
          {
            data: dailyData.map(({ deaths }) => deaths),
            label: "Deaths",
            borderColor: "red",
            backgroundColor: "rgba(255,0,0,0.5)",
            fill: true,
          },
        ],
      }}
    />
  ) : null;

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

  return (
    <>
      <div className={styles.container}>
        <div className={styles.row}>
          {lineChart}
          <BubbleChart dailyData={dailyData} />
        </div>
        {/* </div> */}
        {/* <div className={styles.container}> */}
        <div className={styles.row}>
          {doughnutChart}
          {barChart}
        </div>
      </div>
    </>
  );
};

export default Chart;
