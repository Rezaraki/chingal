import { message } from 'antd';
import axios from 'axios';

const configuredAxios = axios.create({
  baseURL: 'https://63c2988fe3abfa59bdaf89f6.mockapi.io',
});

configuredAxios.interceptors.response.use(
  (response) => response,
  (error) => {
    message.error(error.message);
    return Promise.reject(error);
  },
);

export default configuredAxios;
