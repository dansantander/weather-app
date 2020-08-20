import Weather from './classes/weather';

const getWeather = (() => {
  const weatherQuery = (city) => new Promise((resolve, reject) => {
    const base = 'https://api.openweathermap.org/data/2.5/weather';
    const key = 'd5c069562c9fcd7849eca2747d7a7982';
    fetch(`${base}?q=${city}&units=metric&APPID=${key}`, { mode: 'cors' })
      .then(response => response.json()).then((response) => {
        if (response) {
          const weather = new Weather(response.name, response.sys.country,
            response.weather[0].description, response.wind.speed, response.main.humidity,
            response.main.temp, response.weather[0].icon);
          resolve(weather);
        } else {
          reject();
        }
      });
  });
  return { weatherQuery };
})();

export default getWeather;