import axios from 'axios';

export const BASEURL = 'https://careerup.life';

export const instance = axios.create({
  baseURL: BASEURL,
  withCredentials: true,
});
