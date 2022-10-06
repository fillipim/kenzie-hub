import axios from "axios";
import {
    baseUrl
} from "../../constants/endpoints";

const api = axios.create({
    baseURL: baseUrl,
    timeout: 3000,
})

export default api;