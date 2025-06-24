import axios from "axios";
const base_url = "final-server-gamma.vercel.app"
export const axiosConfig=axios.create({
    baseURL:base_url
})