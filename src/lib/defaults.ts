import axios from 'axios';

export const BASEURL = 'https://careerup.life/api';

export const instance = axios.create({
  baseURL: BASEURL,
  withCredentials: true,
});
