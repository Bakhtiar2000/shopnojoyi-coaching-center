import axios from 'axios';

const axiosSecure = axios.create({
    // baseURL: 'http://localhost:5000/',
    baseURL: 'https://legalmate-server.vercel.app/',
});

const useAxios = () => {
    return [axiosSecure];
};

export default useAxios;