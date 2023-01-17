import { useEffect } from 'react';

import { useAppDispatch } from '../redux/hooks';

export default function useGetData(asyncThunk: any) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(asyncThunk());
  }, []);
}
