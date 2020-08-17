import Weather from './classes/weather';
// api.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}

/* const getWeather = async (city, units, action) => {
  const base = 'https://api.openweathermap.org/data/2.5/weather';
  const key = 'd5c069562c9fcd7849eca2747d7a7982';
  const response = await fetch(`${base}?q=${city()}&APPID=${key}&units=${units()}`,
   { mode: 'cors' });
  saveData(await response.json());
  action();
}; */

const getWeather = () => {
  fetch('http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=d5c069562c9fcd7849eca2747d7a7982', { mode: 'cors' })
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      console.log(response);
    });
};

export default getWeather;