import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.homologation.cliqdrive.com.br',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json;version=v1_web',
  },
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export { api };
