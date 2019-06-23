import axios from 'axios';

const api = axios.create({
    baseURL: "https://instagramfakeapp.herokuapp.com"
})

export default api;