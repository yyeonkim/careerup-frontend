import axios from 'axios';

import { ILoginData, IUserData, PostUserLoginFn } from '../interfaces';

export const getAccessToken = () => {
  const accessToken = JSON.parse(localStorage.getItem('accessToken') as string);
  if (accessToken) {
    return JSON.parse(localStorage.getItem('accessToken') as string).value;
  }
  return null;
};

const accessToken = getAccessToken();

export const getAuthorization = () => {
  return { Authorization: `Bearer ${accessToken}` };
};

export const postUserLogin: PostUserLoginFn = async (url: string, data: ILoginData) => {
  const response = await axios.post(url, data, {
    withCredentials: true,
  });

  return response;
};

export const patchUserData = async (data: IUserData) => {
  const response = await axios.patch('/user/modify', data, { headers: { Authorization: `Bearer ${accessToken}` } });

  return response;
};
