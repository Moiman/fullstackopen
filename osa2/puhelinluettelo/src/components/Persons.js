const Persons = ({ persons, newFilter, deletePerson }) => {
  return (
    <div>
      {persons.filter(
        (p) => p.name.toLowerCase().includes(newFilter.toLowerCase())
      ).map((p) =>
        <div key={p.name}>
          {p.name} {p.number}
          <button onClick={() => deletePerson(p)}>delete</button>
        </div>
      )
      }
    </div >
  )
}

export default Persons