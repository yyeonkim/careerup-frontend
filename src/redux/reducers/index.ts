import { combineReducers } from '@reduxjs/toolkit';

import { roadMapSlice } from './RoadMapSlice';
import { loginFormSlice } from './LoginFormSlice';
import { userSlice } from './UserSlice';
import { myMapSlice } from './MyMapSlice';
import { dropdownSlice } from './DropdownSlice';

const reducer = combineReducers({
  roadMap: roadMapSlice.reducer,
  loginForm: loginFormSlice.reducer,
  user: userSlice.reducer,
  myMap: myMapSlice.reducer,
  dropdown: dropdownSlice.reducer,
});

export default reducer;
