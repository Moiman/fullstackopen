import { useEffect, useState } from 'react'
import personService from './services/persons'
import Notification from './components/Notification'
import Filter from './components/Filter'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'



const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [message, setMessage] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

  const showMessage = (message) => {
    setMessage(message)
    setTimeout(() => {
      setMessage(null)
    }, 5000)
  }

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => setPersons(initialPersons))
  }, [])

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber,
    }

    if (persons.map(p => p.name).includes(newName)) {
      if (!window.confirm(
        `${newName} is already added to phonebook, replace old number with a new one?`
      ))
        return

      const oldPerson = persons.find(p => p.name === newName)

      personService
        .update(oldPerson.id, personObject)
        .then(returnedPerson => {
          setPersons(persons.map(p => p.id !== oldPerson.id ? p : returnedPerson))
          setNewName('')
          setNewNumber('')
          showMessage(`Updated ${returnedPerson.name}`)
        })
        .catch(error => {
          setErrorMessage(
            `Person ${personObject.name} was already deleted from server`
          )
          setTimeout(() => {
            setErrorMessage(null)
          }, 5000)
          setPersons(persons.filter(p => p.id !== oldPerson.id))
        })
    } else {
      personService
        .create(personObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewName('')
          setNewNumber('')
          showMessage(`Added ${returnedPerson.name}`)
        })
    }
  }

  const deletePerson = (person) => {
    if (!window.confirm(`Delete ${person.name} ?`))
      return
    const id = person.id
    personService
      .remove(id)
      .then(() => {
        setPersons(persons.filter(p => p.id !== id))
        showMessage(`Deleted ${person.name}`)
      })
  }

  const handlePersonChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} isError={false} />
      <Notification message={errorMessage} isError={true} />
      <Filter newFilter={newFilter} handleFilterChange={handleFilterChange} />
      <h3>add a new</h3>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        newNumber={newNumber}
        handlePersonChange={handlePersonChange}
        handleNumberChange={handleNumberChange}
      />
      <h3>Numbers</h3>
      <Persons
        persons={persons}
        newFilter={newFilter}
        deletePerson={deletePerson}
      />
    </div>
  )

}

export default App