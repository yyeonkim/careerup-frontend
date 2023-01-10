import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import { IUserData } from '../../interfaces';

const accessToken = localStorage.getItem('accessToken');

export const getUserData = createAsyncThunk('GET', async () => {
  const response = await axios.get('/user', { headers: { Authorization: `Bearer ${accessToken}` } });
  return response.data.result;
});

export const patchUserData = createAsyncThunk('MODIFY', async (data: IUserData) => {
  const response = await axios.patch('/user/modify', data, { headers: { Authorization: `Bearer ${accessToken}` } });

  return response.status;
});

interface UserDataState {
  entities: IUserData;
  loading: boolean;
}

const initialState: UserDataState = {
  entities: {
    address: '',
    age: '',
    username: '',
    gender: '',
    interestField1: '',
    interestField2: '',
    interestField3: '',
    job: '',
    link: '',
    major1: '',
    major2: '',
    name: '',
    phone: '',
    picture: '',
    univ: '',
    nickname: '',
  },
  loading: true,
};

export const userDataSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.entities = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUserData.fulfilled, (state, { payload }) => {
      state.entities = { ...payload };

      // default 값 설정
      if (!payload.picture) {
        state.entities.picture = require('../../assets/profile.jpg');
      }

      // input에 null을 넣을 수 없음
      if (!payload.username) {
        state.entities.username = '';
      }
      if (!payload.link) {
        state.entities.link = '';
      }

      state.loading = false;
    });
    builder.addCase(patchUserData.rejected, (state, { payload }) => {
      console.log(payload);
    });
  },
});
export const { setUserData } = userDataSlice.actions;

export default userDataSlice.reducer;
