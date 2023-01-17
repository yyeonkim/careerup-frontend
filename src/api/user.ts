import axios from 'axios';

import { ILoginData, IUserData, PostUserLoginFn } from '../interfaces';

export const getAccessToken = () => {
  const accessToken = JSON.parse(localStorage.getItem('accessToken') as string);
  if (accessToken) {
    return JSON.parse(localStorage.getItem('accessToken') as string).value;
  }
  return null;
};

export const getAuthorization = () => {
  return { Authorization: `Bearer ${getAccessToken()}` };
};

export const postUserLogin: PostUserLoginFn = async (url: string, data: ILoginData) => {
  const response = await axios.post(url, data);

  return response;
};

export const modifyUserData = async (data: IUserData) => {
  const response = await axios.patch('/user/modify', data, { headers: getAuthorization() });

  return response;
};
