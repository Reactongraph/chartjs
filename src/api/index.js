// Define mock data
const mockData = {
  confirmed: { value: 100000 },
  recovered: { value: 50000 },
  deaths: { value: 2500 },
  lastUpdate: new Date().toISOString(),
};
const mockDailyData = [
  { confirmed: 10, deaths: 1, date: "2024-03-21" },
  { confirmed: 50, deaths: 5, date: "2024-03-25" },
  { confirmed: 100, deaths: 10, date: "2024-04-01" },
  { confirmed: 120, deaths: 15, date: "2024-04-02" },
  { confirmed: 150, deaths: 16, date: "2024-04-03" },
  { confirmed: 170, deaths: 18, date: "2024-04-04" },
  { confirmed: 200, deaths: 20, date: "2024-04-05" },
];

export const fetchData = async () => {
  return mockData;
};

export const fetchDailyData = async () => {
  return mockDailyData;
};
