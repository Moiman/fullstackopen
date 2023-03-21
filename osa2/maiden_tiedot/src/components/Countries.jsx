import Country from './Country'

const Countries = (props) => {
  const {
    countries,
    name,
    country,
    setCountry,
    weatherData
  } = props

  if (name === '') {
    return null
  }

  if (country) {
    return (
      <Country country={country} weatherData={weatherData} />
    )
  }
  const matches = countries.filter(c =>
    c.name.common.toLowerCase().includes(name.toLowerCase())
  )

  if (matches.length === 0) {
    return (
      <div>
        No matches, specify another filter
      </div>
    )
  } else if (matches.length > 10) {
    return (
      <div>
        Too many matches, specify another filter
      </div>
    )
  } else {
    return (
      <div>
        {matches.map(c => (
          <div key={c.name.common}>
            {c.name.common}
            <button onClick={() => setCountry(c)}>
              show
            </button>
          </div>
        ))}
      </div>
    )
  }
}

export default Countries