const API_KEY = "138e3170bacc42e892d180423231305";

function convertData(data) {
  const {
    current: {
      temp_f: tempF,
      temp_c: tempC,
      condition: { text: condition },
    },
  } = data;

  return { tempF, tempC, condition };
}

async function fetchWeatherData(location) {
  const endpoint = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location}`;

  try {
    const response = await fetch(endpoint, { mode: "cors" });
    const data = convertData(await response.json());

    return data;
  } catch (error) {
    alert(error);
    return null;
  }
}

fetchWeatherData("London");
