import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { getAuthorization } from '../../api/user';
import { IUserData } from '../../interfaces';

export const getUserData = createAsyncThunk('user/getData', async () => {
  const response = await axios.get('/user', { headers: getAuthorization() });
  return response.data.result;
});

export const modifyUserData = createAsyncThunk('user/modifyData', async (data: IUserData) => {
  const response = await axios.patch('/user/modify', data, { headers: getAuthorization() });

  return response;
});
