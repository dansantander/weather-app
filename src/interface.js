import Api from './api';

const appInterface = (() => {
  const farenheitSelector = document.querySelector('.farenheit');
  const celsiusSelector = document.querySelector('.celsius');
  const city = document.querySelector('.city');
  const country = document.querySelector('.country');
  const tempValue = document.querySelector('.temp-value');
  const tempDescription = document.querySelector('.description');
  const windValue = document.querySelector('.wind');
  const humidityValue = document.querySelector('.humidity');
  const iconValue = document.getElementById('icon');
  const inputValue = document.getElementById('city-input');
  const errorMessage = document.getElementById('err-message');

  const renderHTML = (response) => {
    city.innerHTML = response.city;
    country.innerHTML = `<i class="fas fa-globe-americas"></i> ${response.country}`;
    tempValue.innerHTML = `${Math.round(response.temperature)}°`;
    tempDescription.innerHTML = response.expected;
    windValue.innerHTML = `<i class="fas fa-wind"></i> Wind: ${response.wind} m/s`;
    humidityValue.innerHTML = `<i class="fas fa-tint"></i> Humidity: ${response.humidity}%`;
    iconValue.src = `http://openweathermap.org/img/wn/${response.icon}@4x.png`;
  };

  const switchToFarenheit = (celsiusDegrees) => {
    const farenheitResult = Math.round((celsiusDegrees * (9 / 5)) + 32);
    return farenheitResult;
  };

  const setListener = () => {
    inputValue.addEventListener('keypress', (e) => {
      if (e.code === 'Enter' || e.code === 'NumpadEnter') {
        if (inputValue.value.trim() === '') {
          errorMessage.innerHTML = 'Field must not be empty';
          errorMessage.classList = 'd-block';
        } else {
          errorMessage.classList = 'd-none';
          Api.weatherQuery(inputValue.value).then((response) => {
            renderHTML(response);

            farenheitSelector.addEventListener('click', () => {
              tempValue.innerHTML = `${switchToFarenheit(response.temperature)}°`;
            });

            celsiusSelector.addEventListener('click', () => {
              tempValue.innerHTML = `${Math.round(response.temperature)}°`;
            });
          });
        }
      }
    });
  };

  return { setListener };
})();

export default appInterface;