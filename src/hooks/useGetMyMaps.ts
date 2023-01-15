import { useEffect } from 'react';
import { useAppDispatch } from '../redux/hooks';
import { getMyMap } from '../redux/reducers/MyMapSlice';

export default function useGetMyMaps() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getMyMap());
  }, []);
}
