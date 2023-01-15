import axios from 'axios';

import { ILoginData, PostUserLoginFn } from '../interfaces';

export const getAccessToken = () => {
  const accessToken = JSON.parse(localStorage.getItem('accessToken') as string);
  if (accessToken) {
    return JSON.parse(localStorage.getItem('accessToken') as string).value;
  }
  return null;
};

export const postUserLogin: PostUserLoginFn = async (url: string, data: ILoginData) => {
  const response = await axios.post(url, data, {
    withCredentials: true,
  });

  return response;
};
