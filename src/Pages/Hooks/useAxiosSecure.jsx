import axios from "axios"

const axiosSecure = axios.create({
    baseURL: 'https://polling-and-survey-app-server.vercel.app'
})
const useAxiosSecure = () =>{
    return axiosSecure;
}

export default useAxiosSecure;