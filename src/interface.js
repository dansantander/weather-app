import Api from './api';

const appInterface = () => {
  console.log('here??');
  Api.weatherResult().then((response) => {
    const city = document.querySelector('.city');
    const tempValue = document.querySelector('.temp-value');
    const tempDescription = document.querySelector('.temp-description p');
    city.innerHTML = response.city;
    tempValue.innerHTML = response.temperature;
    tempDescription.innerHTML = response.expected;
  });
};

export default appInterface;