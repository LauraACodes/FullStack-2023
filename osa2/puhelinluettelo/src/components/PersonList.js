import Person from "./Person"

const PersonList = ( {persons, newFilter} ) => {
    return (
        <div>
        {persons.filter((person) => person.name.toLowerCase().includes(newFilter.toLowerCase()))
        .map(person => <Person key={person.name} person={person} />
        )}
        </div>
    )
}

export default PersonList