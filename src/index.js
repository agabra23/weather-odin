import weather from "./modules/weather";

const searchInput = document.getElementById("searchInput");
const searchSubmitBtn = document.getElementById("searchSubmitBtn");

searchSubmitBtn.onclick = async () => {
  const value = searchInput.value;

  const result = await weather.fetchWeatherData(value);

  console.log(result);
};
