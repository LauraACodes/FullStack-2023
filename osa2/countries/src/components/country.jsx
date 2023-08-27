const Country = ({country, handleCountryClick}) => {
    console.log(country)
    return (
        <li>
            {country}
            <button id={country} onClick={handleCountryClick}>show</button>
        </li>
    )
}

export default Country