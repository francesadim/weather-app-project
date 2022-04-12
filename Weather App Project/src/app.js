let apiKey = "d5453a99d7bbcbcb83f0b73e111b264c";
let apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial";

axios.get(apiUrl).then(displayTemperature);
