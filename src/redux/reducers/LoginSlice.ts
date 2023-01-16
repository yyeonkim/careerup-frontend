import { createSlice } from '@reduxjs/toolkit';

interface ILoginValue {
  name: string;
  username: string;
  password: string;
  passwordCheck: string;
  message: string;
  checkNum: string;
  emailCertification: boolean;
}

const initialValue: ILoginValue = {
  name: '',
  username: '',
  password: '',
  passwordCheck: '',
  message: '',
  checkNum: '',
  emailCertification: false,
};

const isEmpty = (value: string) => {
  return value === '' ? true : false;
};

const isSame = (value1: string, value2: string) => {
  return value1 === value2 ? true : false;
};

export const loginSlice = createSlice({
  name: 'login',
  initialState: { value: initialValue },
  reducers: {
    setValue: (state, action) => {
      state.value = action.payload;
    },
    resetForm: (state) => {
      state.value = initialValue;
    },
    setMessage: (state, { payload: isSignIn }) => {
      if (isSignIn) {
        if (isEmpty(state.value.username)) {
          state.value.message = '*이메일을 입력해주세요.';
        } else if (isEmpty(state.value.password)) {
          state.value.message = '*비밀번호를 입력해주세요.';
        }
      } else {
        if (isEmpty(state.value.name)) {
          state.value.message = '*이름을 입력해주세요.';
        } else if (isEmpty(state.value.username)) {
          state.value.message = '*이메일을 입력해주세요.';
        } else if (isEmpty(state.value.password)) {
          state.value.message = '*비밀번호를 입력해주세요.';
        } else if (isEmpty(state.value.passwordCheck)) {
          state.value.message = '*비밀번호 확인을 입력해주세요.';
        } else if (!isSame(state.value.password, state.value.passwordCheck)) {
          state.value.message = '*비밀번호가 일치하지 않습니다.';
        } else if (!state.value.emailCertification) {
          state.value.message = '*이메일을 인증해주세요.';
        }
      }
    },
    completeCertification: (state) => {
      state.value.emailCertification = true;
    },
  },
});

export const { setValue, resetForm, setMessage, completeCertification } = loginSlice.actions;

export default loginSlice.reducer;
