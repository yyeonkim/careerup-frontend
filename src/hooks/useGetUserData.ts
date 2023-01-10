import { useEffect } from 'react';

import { useAppDispatch } from '../redux/hooks';
import { getUserData } from '../redux/reducers/UserDateSlice';

export default function useGetUserData() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUserData());
  }, []);
}
