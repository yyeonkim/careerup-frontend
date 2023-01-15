import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import { getAccessToken } from '../../api/user';
import { IMyMap } from '../../interfaces';

const accessToken = getAccessToken();

export const getMyMap = createAsyncThunk('GET_MAP', async () => {
  const response = await axios.get('/map/my-map', { headers: { Authorization: `Bearer ${accessToken}` } });
  return response.data.result;
});

export const deleteMap = createAsyncThunk('DELETE_MAP', async (mapIdx: number) => {
  const response = await axios.patch(
    `/map/${mapIdx}/delete`,
    { mapIdx },
    { headers: { Authorization: `Bearer ${accessToken}` } }
  );

  return response;
});

interface MyMapState {
  entities: IMyMap[] | [];
  loading: boolean;
}

const initialState: MyMapState = {
  entities: [],
  loading: true,
};

export const myMapSlice = createSlice({
  name: 'myMap',
  initialState,
  reducers: {
    setMyMap: (state, action) => {
      state.entities = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMyMap.fulfilled, (state, { payload }) => {
        // 생성한 커리어 맵이 없으면 빈 배열
        if (payload !== undefined) {
          state.entities = payload;
        }
        state.loading = false;
      })

      .addCase(deleteMap.fulfilled, (state, { payload }) => {
        const mapIdx = payload.data.result.mapIdx;
        state.entities = state.entities.filter((item) => item.mapIdx !== mapIdx);
      });
  },
});

export const { setMyMap } = myMapSlice.actions;

export default myMapSlice.reducer;
