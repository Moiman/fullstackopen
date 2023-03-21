import { useState, useEffect } from 'react'
import Countries from './components/Countries'
import axios from 'axios'

function App() {
  const [name, setName] = useState('')
  const [countries, setCountries] = useState([])

  useEffect(() => {
    axios
      .get(`https://restcountries.com/v3.1/all?fields=name,capital,flags,area,languages`)
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const handleChange = (event) => {
    setName(event.target.value)
  }

  return (
    <div>
      find countries
      <input onChange={handleChange} />
      <Countries countries={countries} name={name} />
    </div>
  )
}

export default App
