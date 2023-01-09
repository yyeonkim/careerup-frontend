import axios from 'axios';

import { ILoginData, PostUserLoginFn } from '../interfaces';

export const postUserLogin: PostUserLoginFn = async (url: string, data: ILoginData) => {
  const response = await axios.post(url, data, {
    withCredentials: true,
  });

  return response;
};

export const getUserData = async (accessToken: string) => {
  const response = await axios.get('/user', { headers: { Authorization: `Bearer ${accessToken}` } });

  return response;
};
