import axios from 'axios'
import { useEffect, useState } from 'react'

import FindForm from './components/findForm'
import CountryList from './components/countryList'
import SelectedCountry from './components/selectedCountry'
import countryService from './services/countryService'


const App = () => {

  const [countries, setCountries] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [matchingCountries, setMatchingCountries] = useState([])
  const [matchingCountry, setMatchingCountry] = useState([])

  const handleSearchValueChange = (event) => {
    const eventValue = event.target.value
    const filteredCountries = countries.filter(country => country.toLowerCase().includes(eventValue))
    setSearchValue(eventValue)
    setMatchingCountries(filteredCountries)
    console.log(`current search value = ${eventValue}, countries found = ${filteredCountries.length}`)

    if (filteredCountries.length === 1) {
      countryService
      .getOne(filteredCountries[0])
      .then(response => {
        setMatchingCountry(response)
        console.log(`recived country = ${response}`)
        console.log(`languages ${Object.values(response.languages)}`)
      })
    }
  }

  const handleMatchingChange = (event) => {

  }

  console.log(`matching country: ${matchingCountry}`)
  
  useEffect(() => {
    countryService
    .getNames() 
    .then(response => {
      setCountries(response.map(country => country.name.common))
      console.log('country data received')
      })
  }, [])

  //console.log(`${typeof(countries[0])}`)
  //console.log(countries[0])

  if (matchingCountries.length === 0) {
    return (
      <div>
        <h1>Countries</h1>
        <FindForm searchValue={searchValue} handleSearchValueChange={handleSearchValueChange} />
      </div>
    )
  } else if (matchingCountries.length > 10) {
    return (
      <div>
        <h1>Countries</h1>
        <FindForm searchValue={searchValue} handleSearchValueChange={handleSearchValueChange} />
        <p>Too many matches, specify another filter</p> 
      </div>
    )
  } else if (matchingCountries.length == 1) {
    console.log(`matching country = ${matchingCountry}`)
    return (
      <div>
        <h1>Countries</h1>
        <FindForm searchValue={searchValue} handleSearchValueChange={handleSearchValueChange} />
        <SelectedCountry matchingCountry={matchingCountry} name={matchingCountries[0]}/>

      </div>
    )


  } else {  

    return (
      <div>
        <h1>Countries</h1>
        <FindForm searchValue={searchValue} handleSearchValueChange={handleSearchValueChange} />
        <CountryList matchingCountries={matchingCountries}  />
      </div>
    )
  }

}
export default App
