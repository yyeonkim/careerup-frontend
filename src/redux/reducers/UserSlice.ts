import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import { IUserData } from '../../interfaces';

const accessToken = localStorage.getItem('accessToken');

export const getUserData = createAsyncThunk('GET_USER', async () => {
  const response = await axios.get('/user', { headers: { Authorization: `Bearer ${accessToken}` } });
  return response.data.result;
});

export const patchUserData = createAsyncThunk('MODIFY_USER', async (data: IUserData) => {
  const response = await axios.patch('/user/modify', data, { headers: { Authorization: `Bearer ${accessToken}` } });

  return response.status;
});

interface UserState {
  entities: IUserData;
  loading: boolean;
}

const initialState: UserState = {
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

export const userSlice = createSlice({
  name: 'user',
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
  },
});

export const { setUserData } = userSlice.actions;

export default userSlice.reducer;
