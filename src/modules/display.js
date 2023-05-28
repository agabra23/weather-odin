const display = (() => {
  const container = document.getElementById("weatherInfoContainer");

  function displayWeatherData(data) {
    container.innerHTML = "";

    const location = document.createElement("h6");
    location.innerHTML = `${data.cityName}, ${data.region}, ${data.country}`;
    location.classList.add("info-text");

    const temp = document.createElement("h6");
    temp.innerHTML = `${data.tempF} Degrees Farenheit`;
    temp.classList.add("info-text");

    const condition = document.createElement("h6");
    condition.innerHTML = `${data.condition}`;
    condition.classList.add("info-text");

    container.appendChild(location);
    container.appendChild(temp);
    container.appendChild(condition);
  }

  function toggleActive() {
    container.classList.toggle("active");
  }
  return { displayWeatherData, toggleActive };
})();

export default display;
