import { createSlice } from '@reduxjs/toolkit';

import { IMyMap } from '../../interfaces';
import { deleteMap, getMyMap } from '../actions/MyMapAPI';

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
      .addCase(getMyMap.fulfilled, (state, action) => {
        state.entities = action.payload;
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
