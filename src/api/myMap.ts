import axios from 'axios';

import { INewMap } from '../interfaces';

const accessToken = localStorage.getItem('accessToken');

export const createMap = async (data: INewMap) => {
  const response = await axios.post('/map', data, { headers: { Authorization: `Bearer ${accessToken}` } });
  return response;
};
