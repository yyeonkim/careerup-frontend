import axios from 'axios';

export const BASEURL = 'http://3.36.230.165:8080';

export const instance = axios.create({
  baseURL: BASEURL,
  withCredentials: true,
});
