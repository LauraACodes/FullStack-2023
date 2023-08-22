import { useState, useEffect } from 'react'
import FilterForm from './components/FilterForm.js'
import PersonForm from './components/PersonForm.js'
import PersonList from './components/PersonList.js'
import personService from './services/persons.js'

const App = () => {
  const [persons, setPersons] = useState([]) 

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        console.log('promise fulfilled')
        setPersons(initialPersons)
      })
  }, [])

  const handlePersonNameChange = (event) => {
    console.log('filling name ', event.target.value)
    setNewName(event.target.value)
  }

  const handlePersonNumberChange = (event) => {
    console.log('filling number ', event.target.value)
    setNewNumber(event.target.value)
  }

  const handleFilter = (event) => {
    console.log('filling filter', event.target.value)
    setNewFilter(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()
    console.log('clicked', event.target)

    if (persons.findIndex((person) => person.name === newName) == -1) {
      const personObject = {
        name: newName,
        number: newNumber
      }
      personService
        .create(personObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewName('')
          setNewNumber('')
        })
    }
    else {
      console.log('tupla')
      if (window.confirm(`${newName} is already added to phonebook. Replace the old number with a new one?`)) {
        const person = persons.find(p => p.name === newName)
        const updatedPerson = { ...person, number: newNumber}

        personService
          .updateNumber(person.id, updatedPerson)
          .then(updatedP=> {
            setPersons(persons.map(p => p.id !== person.id ? p : updatedP))
            setNewName('')
            setNewNumber('')
          })
      }
    }
  }

  const deletePerson = (id) => {
    console.log('deleteä kutsuttiin')

    if (window.confirm(`Sure to delete ${persons.find( (person) => person.id === id).name}?`)) {
      personService
        .deletePerson(id)
        .then(() => setPersons(persons.filter(person => person.id !== id)))
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <FilterForm handleFilter={handleFilter} />
      <h2>Add a new</h2>
      <PersonForm addPerson={addPerson} newName={newName} handlePersonNameChange={handlePersonNameChange} newNumber={newNumber} handlePersonNumberChange={handlePersonNumberChange} />
      <h2>Numbers</h2>
      <PersonList persons={persons} newFilter={newFilter} deletePerson={deletePerson}/>
    </div>
  )

}

export default App