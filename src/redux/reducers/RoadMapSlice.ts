import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { getMaps, makeMap } from '../actions/RoadMapAPI';

export interface RoadMapState {
  orderEdit: boolean;
  roadLen: number;
  activity: number;
  isModal: boolean;
  isActivityTypeModal: boolean;
  isCertificate: boolean;
  isClub: boolean;
  isContest: boolean;
  isExternalActivity: boolean;
  isStudy: boolean;
  isEtc: boolean;
  isFile: boolean;

  //carrer
  nowType: string;
  nowTypeKr: string;
  title: string;
  projectName: string;
  institution: string;
  each: string;
  //기간
  period: string;
  //취득일
  date: string;

  maps: Array<{ maxIdx: number; title: string }>;
}

const initialState: RoadMapState = {
  orderEdit: false,
  roadLen: 0,
  activity: 9,
  isModal: false,
  isActivityTypeModal: false,
  isCertificate: false,
  isClub: false,
  isContest: false,
  isExternalActivity: false,
  isStudy: false,
  isEtc: true,
  isFile: false,

  nowType: 'etx',
  nowTypeKr: '기타',
  title: '',
  projectName: '',
  institution: '',
  each: '',
  period: '',
  date: '',

  maps: [],
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
      state.nowType = 'certificate';
      state.nowTypeKr = '자격증';
    },
    clickClub: (state) => {
      state.isClub = true;
      state.nowType = 'club';
      state.nowTypeKr = '동아리';
    },
    clickContest: (state) => {
      state.isContest = true;
      state.nowType = 'contest';
      state.nowTypeKr = '공모전';
    },
    clickActivity: (state) => {
      state.isExternalActivity = true;
      state.nowType = 'external-activity';
      state.nowTypeKr = '대외활동';
    },
    clickStudy: (state) => {
      state.isStudy = true;
      state.nowType = 'study';
      state.nowTypeKr = '스터디';
    },
    clickEtc: (state) => {
      state.isEtc = true;
      state.nowType = 'etc';
      state.nowTypeKr = '기타';
    },
    onCloseAllType: (state) => {
      state.isCertificate =
        state.isClub =
        state.isContest =
        state.isExternalActivity =
        state.isStudy =
        state.isEtc =
          false;
    },
    onChangeIsFile: (state, action) => {
      state.isFile = action.payload;
    },

    //  carrer
    changeTitle: (state, action) => {
      state.title = action.payload;
    },
    changeProjectName: (state, action) => {
      state.projectName = action.payload;
    },
    changeInstitution: (state, action) => {
      state.institution = action.payload;
    },
    changeEach: (state, action) => {
      state.each = action.payload;
    },
    changeDate: (state, action) => {
      state.date = action.payload;
    },
    changePeriod: (state, action) => {
      state.period = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder
      //make map
      .addCase(makeMap.pending, (state) => {
        true;
      })
      .addCase(makeMap.fulfilled, (state, payload: any) => {
        true;
      })
      .addCase(makeMap.rejected, (state) => {
        true;
      })
      // get map
      .addCase(getMaps.pending, (state) => {
        true;
      })
      .addCase(getMaps.fulfilled, (state, action: any) => {
        state.maps = action.payload;
      })
      .addCase(getMaps.rejected, (state) => {
        true;
      }),
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
  onChangeIsFile,
  changeTitle,
  changeProjectName,
  changeInstitution,
  changeEach,
  changeDate,
  changePeriod,
} = roadMapSlice.actions;
export const roadMap = (state: RootState) => state.roadMap;

export default roadMapSlice.reducer;
