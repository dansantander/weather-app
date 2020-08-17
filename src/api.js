// api.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}

const getWeather = async (city, units, action) => {
  const base = 'https://api.openweathermap.org/data/2.5/weather';
  const key = 'd5c069562c9fcd7849eca2747d7a7982';
  const response = await fetch(`${base}?q=${city()}&APPID=${key}&units=${units()}`, { mode: 'cors' });
  saveData(await response.json());
  action();
};