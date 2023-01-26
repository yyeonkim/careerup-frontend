import axios from 'axios';

export const BASEURL = 'https://careerup.life:8080';

export const instance = axios.create({
  baseURL: BASEURL,
  withCredentials: true,
});
