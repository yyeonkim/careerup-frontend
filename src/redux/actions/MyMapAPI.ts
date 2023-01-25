import { createAsyncThunk } from '@reduxjs/toolkit';

import { getAuthorization } from '../../api/user';
import { IMyMap } from '../../interfaces';
import { instance } from '../../lib/defaults';

const authorization = getAuthorization();

export const getMyMap = createAsyncThunk('map/getMap', async () => {
  const response = await instance.get('map/my-map', { headers: authorization });
  return response.data.result;
});

export const deleteMap = createAsyncThunk('map/deleteMap', async (mapIdx: number) => {
  const response = await instance.patch(`map/${mapIdx}/delete`, { mapIdx }, { headers: authorization });

  return response;
});

export const modifyMap = createAsyncThunk('map/modifyMap', async ({ mapIdx, title, career }: IMyMap) => {
  const response = await instance.patch(`map/${mapIdx}/modify`, { title, career }, { headers: authorization });

  return response;
});
