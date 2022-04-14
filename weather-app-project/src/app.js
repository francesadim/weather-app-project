function getDate(time) {
  let date = new Date(time);
  let hours = date.getHours();
  if (hours < 10) {
    minutes = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  return `${day}, ${hours}:${minutes}`;
}

function displayTemperature(response) {
  console.log(response.data);
  let temperature = document.querySelector("#current-temp");
  let cityElement = document.querySelector("#city");
  let weatherElement = document.querySelector("#weather-description");
  let highTemp = document.querySelector("#max-temp");
  let lowtemp = document.querySelector("#min-temp");
  let windElement = document.querySelector("#wind-speed");
  let humidityElement = document.querySelector("#humidity");
  let dateElement = document.querySelector("#date");
  let iconElement = document.querySelector("#weather-icon");

  farenheitTemperature = response.data.main.temp;

  temperature.innerHTML = Math.round(farenheitTemperature);
  cityElement.innerHTML = response.data.name;
  weatherElement.innerHTML = response.data.weather[0].description;
  highTemp.innerHTML = Math.round(response.data.main.temp_max);
  lowtemp.innerHTML = Math.round(response.data.main.temp_min);
  windElement.innerHTML = Math.round(response.data.wind.speed);
  humidityElement.innerHTML = response.data.main.humidity;
  iconElement.setAttribute(
    "src",
    `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  dateElement.innerHTML = getDate(response.data.dt * 1000);
}

//let apiKey = "d5453a99d7bbcbcb83f0b73e111b264c";
//let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Lagos&appid=${apiKey}&units=imperial`;

function search(city) {
  let apiKey = "d5453a99d7bbcbcb83f0b73e111b264c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(displayTemperature);
}

function searchForm(event) {
  event.preventDefault();
  let cityInputElement = document.querySelector("#city-input");
  search(cityInputElement.value);
}

function displayCelsiusTemperature(event) {
  event.preventDefault();
  let celsiusTemperature = ((farenheitTemperature - 32) * 5) / 9;
  let currentTempElement = document.querySelector("#current-temp");
  currentTempElement.innerHTML = Math.round(celsiusTemperature);
}

function displayFarenheitTemperature(event) {
  event.preventDefault();
  let currentTempElement = document.querySelector("#current-temp");
  currentTempElement.innerHTML = Math.round(farenheitTemperature);
}
//let farenheitTemperature = null;

let formElement = document.querySelector("#search-form");
formElement.addEventListener("submit", searchForm);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", displayCelsiusTemperature);

let farenheitLink = document.querySelector("#farenheit-link");
farenheitLink.addEventListener("click", displayFarenheitTemperature);

search("Minneapolis");
