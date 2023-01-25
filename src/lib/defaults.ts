import axios from 'axios';
import { getAccessToken } from '../api/user';

axios.defaults.baseURL = 'http://3.36.230.165:8080';
axios.defaults.withCredentials = true;

const instance = axios.create({
  baseURL: 'https://api.example.com',
  withCredentials: true,
});

instance.defaults.headers.common['Authorization'] = getAccessToken();
