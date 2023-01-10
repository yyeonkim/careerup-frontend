import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import { IUserData } from '../../interfaces';

const accessToken = localStorage.getItem('accessToken');

export const fetchUserData = createAsyncThunk('GET_DATA', async () => {
  const response = await axios.get('/user', { headers: { Authorization: `Bearer ${accessToken}` } });
  return response.data.result;
});

export const postUserData = createAsyncThunk('POST_DATA', async (data: IUserData) => {
  const response = await axios.post(
    '/user/modify',
    { ...data },
    { headers: { Authorization: `Bearer ${accessToken}` } }
  );

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
    email: '',
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
    builder.addCase(fetchUserData.fulfilled, (state, { payload }) => {
      state.entities = { ...payload };

      // default 값 설정
      if (!payload.picture) {
        state.entities.picture = require('../../assets/profile.jpg');
      }

      state.loading = false;
    });
  },
});
export const { setUserData } = userDataSlice.actions;

export default userDataSlice.reducer;
