import axios from 'axios';

import { IMapInputs } from '../interfaces';
import { getAuthorization } from './user';

export const createMap = async (data: IMapInputs) => {
  const response = await axios.post('/map', data, { headers: getAuthorization() });
  return response;
};
