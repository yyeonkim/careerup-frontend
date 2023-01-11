import { useEffect } from 'react';

import { useAppDispatch } from '../redux/hooks';
import { getUserData } from '../redux/reducers/UserSlice';

export default function useGetUserData() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUserData());
  }, []);
}
