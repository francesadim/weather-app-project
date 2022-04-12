function displayTemperature(response) {
  console.log(response.data);
  let temperature = document.querySelector("#current-temp");
  let cityElement = document.querySelector("#city");
  let weatherElement = document.querySelector("#weather-description");
  let highTemp = document.querySelector("#max-temp");
  let lowtemp = document.querySelector("#min-temp");
  let windElement = document.querySelector("#wind-speed");
  let humidityElement = document.querySelector("#humidity");

  temperature.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  weatherElement.innerHTML = response.data.weather[0].description;
  highTemp.innerHTML = Math.round(response.data.main.temp_max);
  lowtemp.innerHTML = Math.round(response.data.main.temp_min);
  windElement.innerHTML = Math.round(response.data.wind.speed);
  humidityElement.innerHTML = response.data.main.humidity;
}

let apiKey = "d5453a99d7bbcbcb83f0b73e111b264c";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=imperial`;

axios.get(apiUrl).then(displayTemperature);
