
const appInterface = (() => {
  const value = document.querySelector('.temp-value');
  const description = document.querySelector('.temp-description');
  const city = document.querySelector('.city');
  const country = document.querySelector('.country');

  value.innerHTML = '';
  description.innerHTML = '';
  city.innerHTML = '';
  country.innerHTML = '';
})();

export default appInterface;