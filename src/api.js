import Weather from './classes/weather';
// api.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}

/* const getWeather = () => {
  fetch('http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=d5c069562c9fcd7849eca2747d7a7982', { mode: 'cors' })
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      console.log(response);
    });
};
 */

const getWeather = () => {
  console.log('Working?');
  fetch('http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=d5c069562c9fcd7849eca2747d7a7982', { mode: 'cors' })
    .then((response) => response.json().then((response) => {
      console.log('Working inside then?');
      if (response) {
        const weather = new Weather(response.name, response.sys.country,
          response.weather[0].description, response.wind.speed, response.main.humidity,
          response.main.temp, response.weather[0].icon);
/* 
          const title = document.querySelector('.title');
          console.log(title);
          console.log(weather);

          title.innerHTML = weather.city;
           */
            console.log(weather);
            
            const res = Promise.resolve(weather);
           return res;
      
      }
      console.log('Error');
    }));
};

export default getWeather;