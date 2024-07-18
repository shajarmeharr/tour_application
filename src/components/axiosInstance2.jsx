import axios from 'axios';

const axiosInstance2 = axios.create({
    baseURL: 'http://127.0.0.1:3000/api/v1',
    headers: {
        'Content-Type': 'multipart/form-data',
    },
});

export default axiosInstance2;
