import { combineReducers } from '@reduxjs/toolkit';

import { roadMapSlice } from './RoadMapSlice';
import { userSlice } from './UserSlice';
import { myMapSlice } from './MyMapSlice';
import { dropdownSlice } from './DropdownSlice';
import { loginSlice } from './LoginSlice';

const reducer = combineReducers({
  roadMap: roadMapSlice.reducer,
  login: loginSlice.reducer,
  user: userSlice.reducer,
  myMap: myMapSlice.reducer,
  dropdown: dropdownSlice.reducer,
});

export default reducer;
