class Weather {
  constructor(city, country, expectedDate, wind, humidity, temperature, icon) {
    this.city = city;
    this.country = country;
    this.expectedDate = expectedDate;
    this.wind = wind;
    this.humidity = humidity;
    this.temperature = temperature;
    this.icon = icon;
  }
}

export default Weather;