import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import { IUserData } from '../../interfaces';

export const fetchUserData = createAsyncThunk('GET_DATA', async (accessToken: string) => {
  const response = await axios.get('/user', { headers: { Authorization: `Bearer ${accessToken}` } });
  return response.data.result;
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
    interestField: '',
    job: '',
    link: '',
    major: '',
    name: '',
    phone: '',
    picture: '',
    univ: '',
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
    builder.addCase(fetchUserData.fulfilled, (state, action) => {
      state.entities = { ...action.payload };
      state.loading = false;
    });
  },
});
export const { setUserData } = userDataSlice.actions;

export default userDataSlice.reducer;
