class Weather {
  constructor(city, country, expected, wind, humidity, temperature, icon) {
    this.city = city;
    this.country = country;
    this.expected = expected;
    this.wind = wind;
    this.humidity = humidity;
    this.temperature = temperature;
    this.icon = icon;
  }
}

export default Weather;