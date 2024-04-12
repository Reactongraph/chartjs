import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";

import styles from "./CountryPicker.module.css";

const CountryPicker = ({ handleCountryChange, DailyData }) => {
  const [fetchedCountries, setFetchedCountries] = useState([]);

  useEffect(() => {
    setFetchedCountries(DailyData);
  }, [setFetchedCountries, DailyData]);

  const filteredCountry = [
    ...new Set(fetchedCountries.map((item) => item.country)),
  ];

  return (
    <FormControl className={styles.FormControl}>
      <NativeSelect
        defaultValue=""
        onChange={(e) => handleCountryChange(e.target.value)}
      >
        <option value="global">Global</option>
        {filteredCountry.map((country, i) => (
          <option key={i} value={country}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;
