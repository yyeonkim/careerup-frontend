import { createAsyncThunk } from '@reduxjs/toolkit';

const delay = (time: number, value: object) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value);
    }, time);
  });

export const addValue = createAsyncThunk('test/add', async () => {
  return await delay(500, {
    value: 10,
  });
});
