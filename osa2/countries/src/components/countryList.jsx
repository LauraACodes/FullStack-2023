import Country from './country'

const CountryList = ({matchingCountries, handleCountryClick}) => {
    console.log(matchingCountries)
    return (
        <ul>
        {matchingCountries.map(country => 
        <Country key={country} country={country} handleCountryClick={handleCountryClick}/>
        )}
        </ul>
    )
}

export default CountryList

