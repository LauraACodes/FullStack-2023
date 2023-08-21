const PersonForm = (props) => {
    return (
        <form onSubmit={props.addPerson}>
        <div>
          name: <input 
          value={props.newName}
          onChange={props.handlePersonNameChange}/>
        </div>
        <div>
          number: <input
          value={props.newNumber}
          onChange={props.handlePersonNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )
} 

export default PersonForm