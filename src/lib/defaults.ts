import axios from 'axios';

import { getAuthorization } from '../api/user';

export const BASEURL = 'http://3.36.230.165:8080';

axios.defaults.baseURL = BASEURL;
axios.defaults.withCredentials = true;

// 사용자 로그인 후
export const instance = axios.create({
  baseURL: BASEURL,
  withCredentials: true,
  headers: getAuthorization(),
});
