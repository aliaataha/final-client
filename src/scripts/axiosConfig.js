import axios from "axios";
const base_url = "http://localhost:8080"
export const axiosConfig=axios.create({
    baseURL:base_url
})