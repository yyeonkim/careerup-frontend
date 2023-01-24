import { useEffect } from 'react';

import { useAppDispatch } from '../redux/hooks';
import { AsyncThunk } from '../../node_modules/@reduxjs/toolkit/dist/createAsyncThunk';
import { AxiosResponse } from '../../node_modules/axios/index';
import { AsyncThunkConfig } from '../../node_modules//@reduxjs/toolkit/dist/createAsyncThunk';

export default function useGetData(asyncThunk: AsyncThunk<AxiosResponse<unknown, unknown>, void, AsyncThunkConfig>) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(asyncThunk());
  }, []);
}
