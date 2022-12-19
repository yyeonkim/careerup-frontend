import { combineReducers } from '@reduxjs/toolkit';
import { testSlice } from './TestSlice';
import { roadMapSlice } from './RoadMapSlice';

const reducer = combineReducers({
  test: testSlice.reducer,
  roadMap: roadMapSlice.reducer,
});

export default reducer;
