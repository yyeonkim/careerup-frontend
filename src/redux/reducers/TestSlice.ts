import { createSlice } from '@reduxjs/toolkit';
import { addValue } from '../../actions/TestAPI';
import { RootState } from '../store';

export interface TestState {
  value: number;
}

const initialState: TestState = {
  value: 0,
};

export const testSlice = createSlice({
  name: 'test',
  initialState,
  reducers: {
    resetValue: (state) => {
      state.value = 0;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addValue.fulfilled, (state, action: any) => {
      state.value = action.payload.value;
    });
  },
});

export const { resetValue } = testSlice.actions;
export const testCount = (state: RootState) => state;

export default testSlice.reducer;
