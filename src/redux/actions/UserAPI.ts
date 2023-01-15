import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { getAuthorization } from '../../api/user';
// import { IUserData } from '../../interfaces';

export const getUserData = createAsyncThunk('user/getData', async () => {
  const authorization = getAuthorization();
  const response = await axios.get('/user', { headers: authorization });
  return response.data.result;
});

// export const patchUserData = createAsyncThunk('user/modifyData', async (data: IUserData) => {
//   const response = await axios.patch('/user/modify', data, { headers: { Authorization: `Bearer ${accessToken}` } });

//   return response;
// });
