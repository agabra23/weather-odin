import weather from "./modules/weather";
import display from "./modules/display";
import "./styles/style.css";

const searchInput = document.getElementById("searchInput");
const searchSubmitBtn = document.getElementById("searchSubmitBtn");

searchSubmitBtn.onclick = async (e) => {
  e.preventDefault();
  const value = searchInput.value;

  const result = await weather.fetchWeatherData(value);

  display.displayWeatherData(result);
  console.log(result);
};
