import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { getAuthorization } from '../../api/user';

const authorization = getAuthorization();

export const getMyMap = createAsyncThunk('map/getMap', async () => {
  const response = await axios.get('/map/my-map', { headers: authorization });
  return response.data.result;
});

export const deleteMap = createAsyncThunk('map/deleteMap', async (mapIdx: number) => {
  const response = await axios.patch(`/map/${mapIdx}/delete`, { mapIdx }, { headers: authorization });

  return response;
});
