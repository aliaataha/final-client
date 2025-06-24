import axios from "axios";
const base_url = "http://localhost:1337"
export const axiosConfig=axios.create({
    baseURL:base_url
})