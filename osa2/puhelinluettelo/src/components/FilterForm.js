const FilterForm = ( {handleFilter} ) => {
    return (
        <form>
            filter shown with <input onChange={handleFilter} />
        </form> 
    )
}

export default FilterForm
