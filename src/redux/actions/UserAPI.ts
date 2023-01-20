import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { getAccessToken, getAuthorization } from '../../api/user';
import { IUserData } from '../../interfaces';

export const getUserData = createAsyncThunk('user/getUser', async () => {
  const isLogin = getAccessToken();
  if (isLogin) {
    const response = await axios.get('/user', { headers: getAuthorization() });
    return response.data.result;
  }
});

export const modifyUserData = createAsyncThunk('user/modifyUser', async (data: IUserData) => {
  const response = await axios.patch('/user/modify', data, { headers: getAuthorization() });

  return response;
});

export const patchPicture = createAsyncThunk('user/patchPicture', async (file: File) => {
  const formData = new FormData();
  formData.append('data', file);
  const response = await axios.patch('/user/picture', formData, {
    headers: { ...getAuthorization(), 'Content-Type': 'multipart/form-data' },
  });

  return response.data.result;
});
