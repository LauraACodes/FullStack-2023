import axios from "axios";

const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api'

const getNames = () => {
    const request = axios.get(`${baseUrl}/all`)
    return request.then(response => response.data)
}

const getOne = (name) => {
    const request = axios.get(`${baseUrl}/name/${name}`)
    return request.then(response => response.data)
}
export default { getNames, getOne }