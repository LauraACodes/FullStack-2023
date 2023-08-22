const Person = ({person, deletePerson}) => {
    //console.log(person)
    return (
        <div>
            {person.name} {person.number}
            <button onClick={deletePerson}>poista</button>
        </div>
    )
}

export default Person