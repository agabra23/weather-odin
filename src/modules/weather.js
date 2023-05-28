const weather = (() => {
  const API_KEY = "138e3170bacc42e892d180423231305";

  function convertData(data) {
    const {
      location: { name: cityName, region: region, country: country },
      current: {
        temp_f: tempF,
        temp_c: tempC,
        condition: { text: condition },
      },
    } = data;

    return { cityName, region, country, tempF, tempC, condition };
  }

  async function fetchWeatherData(location) {
    const endpoint = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location}`;

    try {
      const response = await fetch(endpoint, { mode: "cors" });
      if (!response.ok) throw new Error(`City ${location} not found`);
      const data = convertData(await response.json());

      return data;
    } catch (error) {
      alert(error);
      return null;
    }
  }
  return { fetchWeatherData };
})();

export default weather;
