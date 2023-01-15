import { useEffect } from 'react';

import { getMyMap } from '../redux/actions/MyMapAPI';
import { useAppDispatch } from '../redux/hooks';

export default function useGetMyMaps() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getMyMap());
  }, []);
}
