import getWeather from './api';

const appInterface = (() => {
  console.log('In here?');
  /* const title = document.querySelector('.title'); */
  getWeather().then((response) => {
    console.log('Anything');
    const varResponse = response;
    console.log(varResponse);
  });
})();

export default appInterface;