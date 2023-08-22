import Person from "./Person"

const PersonList = ( {persons, newFilter, deletePerson} ) => {
    return (
        <div>
        {persons.filter((person) => person.name.toLowerCase().includes(newFilter.toLowerCase()))
        .map(person => <Person key={person.id} person={person} deletePerson={() => deletePerson(person.id)}/>
        )}
        </div>
    )
}

export default PersonList