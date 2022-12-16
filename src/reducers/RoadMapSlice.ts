import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../redux/store';

export interface RoadMapState {
  orderEdit: boolean;
  roadLen: number;
  activity: number;
  isModal: boolean;
}

const initialState: RoadMapState = {
  orderEdit: false,
  roadLen: 0,
  activity: 9,
  isModal: false,
};

export const roadMapSlice = createSlice({
  name: 'roadMap',
  initialState,
  reducers: {
    toggleOrderEdit: (state) => {
      state.orderEdit = !state.orderEdit;
    },
    addRoad: (state) => {
      state.roadLen++;
      state.activity += 3;
    },
    toggleIsModal: (state) => {
      state.isModal = !state.isModal;
    },
  },
  extraReducers: (builder) => {
    true;
  },
});

export const { toggleOrderEdit, addRoad, toggleIsModal } = roadMapSlice.actions;
export const roadMap = (state: RootState) => state.roadMap;

export default roadMapSlice.reducer;
