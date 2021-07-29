import axios from 'axios';


// PUXANDO A API
const api = axios.create({
    baseURL: 'https://www.mocky.io/v2/5d531c4f2e0000620081ddce'

}) 

export default api 
