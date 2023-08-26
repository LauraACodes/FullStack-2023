import Language from './language'

const SelectedCountry = ( {matchingCountry, name} ) => {
    const languages = (list) => {
        if (list === null || list === undefined) {
            return []
        }
        return (
            Object.values(list)
        )
    }  
    console.log(languages)

    const flag = (list) => {
        if (list === null || list === undefined) {
            return []
        }
        return (
            Object.values(list)[0]
        )
    }  
    console.log(languages)

    return (
        <div>
        <h2>{name}</h2>
        <p>capital {matchingCountry.capital}</p>
        <p>area {matchingCountry.area}</p>
        <h3>Languages</h3>
        <ul>
            {languages(matchingCountry.languages).map((language, index) => <Language key={index} language={language} />)}
        </ul>
        <div>
            <img src={flag(matchingCountry.flags)} />
        </div>
        </div>
    )
}


export default SelectedCountry
