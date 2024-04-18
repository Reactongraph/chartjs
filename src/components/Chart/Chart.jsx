import React, { useState, useEffect } from "react";
import styles from "./Chart.module.css";
import BubbleChart from "./bubbleChart";
import LineChart from "./lineChart";
import BarChart from "./barChart";
import DoughnutChart from "./doughnutChart";

const Chart = ({ country, fetchedData }) => {
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const filterDataByCountry = () => {
      if (country !== "global") {
        setFilteredData(fetchedData.filter((data) => data.country === country));
      } else {
        setFilteredData(fetchedData);
      }
    };

    filterDataByCountry();
  }, [country, fetchedData]);

  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <LineChart dailyData={filteredData} />
        <BubbleChart dailyData={filteredData} />
      </div>
      <div className={styles.row}>
        <DoughnutChart dailyData={filteredData} />
        <BarChart dailyData={filteredData} />
      </div>
    </div>
  );
};

export default Chart;
