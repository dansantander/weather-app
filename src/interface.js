import weather from './classes/weather';
import getWeather from './api';

const appInterface = (() => {
  const title = document.querySelector('.title');
  const temperature = document.querySelector('.temp-value');
  const description = document.querySelector('.temp-description');
  const city = document.querySelector('.city');
  const country = document.querySelector('.country');

  title.innerHTML = getWeather();
  temperature.innerHTML = `${weather.temperature}`;
  description.innerHTML = `${weather.description}`;
  city.innerHTML = `${weather.city}`;
  country.innerHTML = `${weather.country}`;
})();

export default appInterface;