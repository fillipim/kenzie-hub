import axios from "axios";
import {
    baseUrl
} from "../constants/endpoints";

const api = axios.create({
    baseURL: baseUrl, 
})

export default api;