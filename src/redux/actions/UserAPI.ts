import { createAsyncThunk } from '@reduxjs/toolkit';

import { getAccessToken, getAuthorization } from '../../api/user';
import { IUserData } from '../../interfaces';
import { instance } from '../../lib/defaults';

export const getUserData = createAsyncThunk('user/getUser', async () => {
  const isLogin = getAccessToken();
  if (isLogin) {
    const response = await instance.get('user', { headers: getAuthorization() });
    return response.data.result;
  }
});

export const modifyUserData = createAsyncThunk('user/modifyUser', async (data: IUserData) => {
  const response = await instance.patch('user/modify', data, { headers: getAuthorization() });

  return response;
});

export const patchPicture = createAsyncThunk('user/patchPicture', async (file: File) => {
  const formData = new FormData();
  formData.append('data', file);

  const response = await instance.patch('user/picture', formData, {
    headers: { ...getAuthorization(), 'Content-Type': 'multipart/form-data' },
  });

  return response.data.result;
});
