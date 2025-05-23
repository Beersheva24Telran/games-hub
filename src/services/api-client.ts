import axios from 'axios';
export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "7f7d4bdcf46e46539597864da68574a1"
    }
})