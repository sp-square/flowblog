import axios from 'axios';

// We set up some default configuration for every request the client will make
const axiosInstance = axios.create({
	baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
	timeout: 5000, // if the server doesn't respond after 5 seconds, we will abort the request
});

export default axiosInstance;
