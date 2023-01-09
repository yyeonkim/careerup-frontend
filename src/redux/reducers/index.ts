import { combineReducers } from '@reduxjs/toolkit';
import { testSlice } from './TestSlice';
import { roadMapSlice } from './RoadMapSlice';
import { loginFormSlice } from './LoginFormSlice';
import { userDataSlice } from './UserDateSlice';

const reducer = combineReducers({
  test: testSlice.reducer,
  roadMap: roadMapSlice.reducer,
  loginForm: loginFormSlice.reducer,
  userData: userDataSlice.reducer,
});

export default reducer;
