import axios from "axios";

const baseUrl = '/api/persons'

const getAll = () => {
    const request = axios.get(baseUrl)
    console.log("axios hakee..")
    return request.then(response => response.data)
}

const create = newPerson => {
    const request = axios.post(baseUrl, newPerson)
    return request.then(response => response.data)
}

const deletePerson = id => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(() => console.log('deleted'))
}

const updateNumber = ( id, updatedPerson ) => {
    const request = axios.put(`${baseUrl}/${id}`, updatedPerson)
    return request.then(response => response.data)
}

export default { getAll, create, deletePerson, updateNumber }