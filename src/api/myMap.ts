import axios from 'axios';

import { INewMap } from '../interfaces';
import { getAccessToken } from './user';

const accessToken = getAccessToken();

export const createMap = async (data: INewMap) => {
  const response = await axios.post('/map', data, { headers: { Authorization: `Bearer ${accessToken}` } });
  return response;
};
