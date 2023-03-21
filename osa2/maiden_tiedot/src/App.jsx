import { useState, useEffect } from 'react'
import Countries from './components/Countries'
import axios from 'axios'

function App() {
  const [name, setName] = useState('')
  const [countries, setCountries] = useState([])
  const [country, setCountry] = useState(null)
  const [weatherData, setWeatherData] = useState(null)

  useEffect(() => {
    axios
      .get(`https://restcountries.com/v3.1/all?fields=name,capital,flags,area,languages,capitalInfo,cca2`)
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  useEffect(() => {
    if (country === null)
      return

    const api_key = import.meta.env.VITE_APP_API_KEY
    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${country.capital},${country.cca2}&appid=${api_key}`)
      .then(response => {
        setWeatherData(response.data)
      })
  }, [country])

  const handleChange = (event) => {
    const countryName = event.target.value
    setName(countryName)

    const matches = countries.filter(c =>
      c.name.common.toLowerCase().includes(countryName.toLowerCase())
    )

    if (matches.length === 1) {
      if (country !== matches[0]) {
        setCountry(matches[0])
        return
      }
    }
    if (country) {
      setCountry(null)
    }
  }

  return (
    <div>
      find countries
      <input onChange={handleChange} />
      <Countries
        countries={countries}
        name={name}
        country={country}
        setCountry={setCountry}
        weatherData={weatherData}
      />
    </div>
  )
}

export default App
