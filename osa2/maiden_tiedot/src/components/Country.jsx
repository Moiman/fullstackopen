const Country = ({ country, weatherData }) => {
  if (!weatherData) {
    return null
  }
  return (
    <div>
      <h2>{country.name.common}</h2>
      <div>capital {country.capital}</div>
      <div>area {country.area}</div>
      <h3>languages:</h3>
      <ul>
        {Object.values(country.languages).map(l =>
          <li key={l}>{l}</li>
        )}
      </ul>
      <img src={country.flags.png} height="200px" />
      <div>
        <h2>Weather in {weatherData.name}</h2>
        <div>temperature {(weatherData.main.temp - 273.15).toFixed(2)} Celcius</div>
        <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} />
        <div>wind {weatherData.wind.speed} m/s</div>
      </div>
    </div>
  )
}

export default Country