import Weather from './classes/weather';

const getWeather = (() => {
  const weatherQuery = () => new Promise((resolve, reject) => {
    fetch('http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=d5c069562c9fcd7849eca2747d7a7982',
      { mode: 'cors' }).then(response => response.json()).then((response) => {
      if (response) {
        console.log(response);
        const weather = new Weather(response.name, response.sys.country,
          response.weather[0].description, response.wind.speed, response.main.humidity,
          response.main.temp, response.weather[0].icon);
        console.log(weather);
        resolve(weather);
      } else {
        reject();
      }
    });
  });
  return { weatherQuery  };
})();

export default getWeather;