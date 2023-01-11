import { combineReducers } from '@reduxjs/toolkit';
import { roadMapSlice } from './RoadMapSlice';
import { loginFormSlice } from './LoginFormSlice';

const reducer = combineReducers({
  roadMap: roadMapSlice.reducer,
  loginForm: loginFormSlice.reducer,
});

export default reducer;
