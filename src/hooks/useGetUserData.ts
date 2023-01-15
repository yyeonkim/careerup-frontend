import { useEffect } from 'react';

import { getUserData } from '../redux/actions/UserAPI';
import { useAppDispatch } from '../redux/hooks';

export default function useGetUserData() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUserData());
  }, []);
}
