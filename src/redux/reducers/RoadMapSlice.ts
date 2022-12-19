import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface RoadMapState {
  orderEdit: boolean;
  roadLen: number;
  activity: number;
  isModal: boolean;
  isActivityTypeModal: boolean;
  isToolModal: boolean;
  modalData: {
    Date: {
      startYear: number;
      startMonth: number;
      endYear: number;
      endMonth: number;
    };
  };
}

const initialState: RoadMapState = {
  orderEdit: false,
  roadLen: 0,
  activity: 9,
  isModal: false,
  isActivityTypeModal: false,
  isToolModal: false,
  modalData: {
    Date: {
      startYear: new Date().getFullYear(),
      startMonth: new Date().getMonth() - 1,
      endYear: new Date().getFullYear(),
      endMonth: new Date().getMonth(),
    },
  },
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
      if (!state.isModal) {
        state.isToolModal = false;
        state.isActivityTypeModal = false;
      }
    },
    toggleIsActivityTypeModal: (state) => {
      state.isActivityTypeModal = !state.isActivityTypeModal;
    },
    closeIsActivityTypeModal: (state) => {
      state.isActivityTypeModal = false;
    },
    toggleIsToolModal: (state) => {
      state.isToolModal = !state.isToolModal;
    },
    closeIsToolModal: (state) => {
      state.isToolModal = false;
    },
    changeStartYear: (state, action: { payload: number }) => {
      state.modalData.Date.startYear = action.payload;
    },
    changeStartMonth: (state, action: { payload: number }) => {
      state.modalData.Date.startMonth = action.payload;
    },
    changeEndYear: (state, action: { payload: number }) => {
      state.modalData.Date.endYear = action.payload;
    },
    changeEndMonth: (state, action: { payload: number }) => {
      state.modalData.Date.endMonth = action.payload;
    },
  },
  extraReducers: (builder) => {
    true;
  },
});

export const {
  toggleOrderEdit,
  addRoad,
  toggleIsModal,
  toggleIsToolModal,
  closeIsToolModal,
  changeStartYear,
  changeStartMonth,
  changeEndYear,
  changeEndMonth,
  toggleIsActivityTypeModal,
  closeIsActivityTypeModal,
} = roadMapSlice.actions;
export const roadMap = (state: RootState) => state.roadMap;

export default roadMapSlice.reducer;
