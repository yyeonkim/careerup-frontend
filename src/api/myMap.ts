import axios from 'axios';

import { IMapInputs } from '../interfaces';
import { getAccessToken } from './user';

const accessToken = getAccessToken();

export const createMap = async (data: IMapInputs) => {
  const response = await axios.post('/map', data, { headers: { Authorization: `Bearer ${accessToken}` } });
  return response;
};
