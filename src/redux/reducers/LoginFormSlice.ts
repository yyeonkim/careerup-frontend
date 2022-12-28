import { createSlice } from '@reduxjs/toolkit';

interface ILoginFormValue {
  name: string;
  email: string;
  password: string;
  passwordCheck: string;
  message: string;
}

const initialValue: ILoginFormValue = {
  name: '',
  email: '',
  password: '',
  passwordCheck: '',
  message: '',
};

const isEmpty = (value: string) => {
  return value === '' ? true : false;
};

const isSame = (value1: string, value2: string) => {
  return value1 === value2 ? true : false;
};

export const loginFormSlice = createSlice({
  name: 'loginForm',
  initialState: { value: initialValue },
  reducers: {
    changeName: (state, action) => {
      state.value.name = action.payload;
    },
    changeEmail: (state, action) => {
      state.value.email = action.payload;
    },
    changePassword: (state, action) => {
      state.value.password = action.payload;
    },
    changePasswordCheck: (state, action) => {
      state.value.passwordCheck = action.payload;
    },
    resetForm: (state) => {
      state.value = initialValue;
    },
    setMessage: (state, { payload: isSignIn }) => {
      if (isSignIn) {
        if (isEmpty(state.value.email)) {
          state.value.message = '*이메일을 입력해주세요.';
        } else if (isEmpty(state.value.password)) {
          state.value.message = '*비밀번호를 입력해주세요.';
        }
      } else {
        if (isEmpty(state.value.name)) {
          state.value.message = '*이름을 입력해주세요.';
        } else if (isEmpty(state.value.email)) {
          state.value.message = '*이메일을 입력해주세요.';
        } else if (isEmpty(state.value.password)) {
          state.value.message = '*비밀번호를 입력해주세요.';
        } else if (isEmpty(state.value.passwordCheck)) {
          state.value.message = '*비밀번호 확인을 입력해주세요.';
        } else if (!isSame(state.value.password, state.value.passwordCheck)) {
          state.value.message = '*비밀번호가 일치하지 않습니다.';
        }
      }
    },
  },
});

export const { changeName, changeEmail, changePassword, changePasswordCheck, resetForm, setMessage } =
  loginFormSlice.actions;

export default loginFormSlice.reducer;
