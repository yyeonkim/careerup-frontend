import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../redux/store';

export interface RoadMapState {
  orderEdit: boolean;
}

const initialState: RoadMapState = {
  orderEdit: false,
};

export const roadMapSlice = createSlice({
  name: 'roadMap',
  initialState,
  reducers: {
    toggleOrderEdit: (state) => {
      state.orderEdit = !state.orderEdit;
    },
  },
  extraReducers: (builder) => {
    true;
  },
});

export const { toggleOrderEdit } = roadMapSlice.actions;
export const roadMap = (state: RootState) => state.roadMap;

export default roadMapSlice.reducer;
