import { combineReducers } from '@reduxjs/toolkit';
import { testSlice } from './TestSlice';
import { roadMapSlice } from './RoadMapSlice';
import { loginFormSlice } from './LoginFormSlice';
import { userSlice } from './UserSlice';

const reducer = combineReducers({
  test: testSlice.reducer,
  roadMap: roadMapSlice.reducer,
  loginForm: loginFormSlice.reducer,
  user: userSlice.reducer,
});

export default reducer;
