import React from "react";

import Cards from "./components/Cards/Cards";
import Chart from "./components/Chart/Chart";
import CountryPicker from "./components/CountryPicker/CountryPicker";
import styles from "./App.module.css";
import { fetchData, fetchDailyData } from "./api";

class App extends React.Component {
  state = {
    data: {},
    country: "global",
    DailyData: [],
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });

    const fetchedDailyData = await fetchDailyData();
    this.setState({ DailyData: fetchedDailyData });
  }
  handleCountryChange = async (country) => {
    this.setState({ country: country });
  };
  render() {
    const { data, country, DailyData } = this.state;
    console.log(country, "country");
    return (
      <div className={styles.container}>
        <Cards data={data} />
        <CountryPicker
          handleCountryChange={this.handleCountryChange}
          DailyData={DailyData}
        />
        <Chart country={country} fetchedData={DailyData} />
      </div>
    );
  }
}

export default App;
