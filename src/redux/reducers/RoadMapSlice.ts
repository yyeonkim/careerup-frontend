import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface RoadMapState {
  orderEdit: boolean;
  roadLen: number;
  activity: number;
  isModal: boolean;
  isActivityTypeModal: boolean;
  isCertificate: boolean;
  isClub: boolean;
  isContest: boolean;
  isActivity: boolean;
  isStudy: boolean;
  isEtc: boolean;
  nowType: string;
}

const initialState: RoadMapState = {
  orderEdit: false,
  roadLen: 0,
  activity: 9,
  isModal: true,
  isActivityTypeModal: true,
  isCertificate: false,
  isClub: false,
  isContest: false,
  isActivity: false,
  isStudy: false,
  isEtc: true,
  nowType: '기타',
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
        state.isActivityTypeModal = false;
      }
    },
    toggleIsActivityTypeModal: (state) => {
      state.isActivityTypeModal = !state.isActivityTypeModal;
    },
    closeIsActivityTypeModal: (state) => {
      state.isActivityTypeModal = false;
    },
    clickCertificate: (state) => {
      state.isCertificate = true;
      state.nowType = '자격증';
    },
    clickClub: (state) => {
      state.isClub = true;
      state.nowType = '동아리';
    },
    clickContest: (state) => {
      state.isContest = true;
      state.nowType = '공모전';
    },
    clickActivity: (state) => {
      state.isActivity = true;
      state.nowType = '대외활동';
    },
    clickStudy: (state) => {
      state.isStudy = true;
      state.nowType = '스터디';
    },
    clickEtc: (state) => {
      state.isEtc = true;
      state.nowType = '기타';
    },
    onCloseAllType: (state) => {
      state.isCertificate = state.isClub = state.isContest = state.isActivity = state.isStudy = state.isEtc = false;
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
  toggleIsActivityTypeModal,
  closeIsActivityTypeModal,
  clickCertificate,
  clickClub,
  clickContest,
  clickActivity,
  clickStudy,
  clickEtc,
  onCloseAllType,
} = roadMapSlice.actions;
export const roadMap = (state: RootState) => state.roadMap;

export default roadMapSlice.reducer;
