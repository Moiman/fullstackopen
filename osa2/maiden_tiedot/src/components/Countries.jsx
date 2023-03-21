const Countries = ({ countries, name, setName }) => {
  if (name === '')
    return
  const matches = countries.filter(c => c.name.common.toLowerCase().includes(name.toLowerCase()))

  if (matches.length === 1) {
    const country = matches[0]
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
      </div>
    )
  } else if (matches.length < 11) {
    return (
      <div>
        {matches.map(c => (
          <div key={c.name.common}>
            {c.name.common}
            <button onClick={() => setName(c.name.common)}>show</button>
          </div>)
        )}
      </div>
    )
  } else {
    return (
      <div>
        Too many matches, specify another filter
      </div>
    )
  }
}

export default Countries