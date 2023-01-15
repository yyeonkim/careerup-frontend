import { createSlice } from '@reduxjs/toolkit';

export const dropdownSlice = createSlice({
  name: 'dropdown',
  initialState: { value: false },
  reducers: {
    toggle: (state) => {
      state.value = !state.value;
    },
    open: (state) => {
      state.value = true;
    },
    close: (state) => {
      state.value = false;
    },
  },
});

export const { toggle, open, close } = dropdownSlice.actions;

export default dropdownSlice.reducer;
