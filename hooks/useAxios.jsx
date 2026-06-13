import axios from "axios";
import react from 'react';

const axiosInstance = axios.create({
    baseURL:"http://localhost:3000"
})

const useAxios = () => {
    return axiosInstance;
}

export default useAxios;