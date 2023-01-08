import axios from 'axios';

import { ILoginData, PostUserFn } from '../interfaces';

export const postUser: PostUserFn = async (url: string, data: ILoginData) => {
  const response = await axios.post(url, data, {
    withCredentials: true,
  });

  return response;
};
