import Country from './country'

const CountryList = ({matchingCountries}) => {
    console.log(matchingCountries)
    return (
        <ul>
        {matchingCountries.map(country => 
        <Country key={country} country={country}/>
        )}
        </ul>
    )
}

export default CountryList

