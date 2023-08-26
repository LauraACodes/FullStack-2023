const FindForm = ({searchValue, handleSearchValueChange}) => {
    return (
        <form>Find countries
            <input 
            value={searchValue}
            onChange={handleSearchValueChange}
            />
        </form>
    )
}

export default FindForm