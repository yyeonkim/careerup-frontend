import { IMapInputs } from '../interfaces';
import { instance } from '../lib/defaults';
import { getAuthorization } from './user';

export const createMap = async (data: IMapInputs) => {
  const response = await instance.post('map', data, { headers: getAuthorization() });
  return response;
};
