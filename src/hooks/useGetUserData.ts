import { useEffect } from 'react';

import { useAppDispatch } from '../redux/hooks';
import { fetchUserData } from '../redux/reducers/UserDateSlice';

export default function useGetUserData() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUserData());
  }, []);
}
