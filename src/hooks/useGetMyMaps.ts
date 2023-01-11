import axios from 'axios';
import { useEffect, useState } from 'react';
import { IMyMap } from '../interfaces';

export default function useGetMyMaps() {
  const accessToken = localStorage.getItem('accessToken');
  const [myMaps, setMyMaps] = useState<IMyMap[]>([]);

  useEffect(() => {
    (async () => {
      const {
        data: { result },
      } = await axios.get('/map/my-map', { headers: { Authorization: `Bearer ${accessToken}` } });

      if (result !== undefined) {
        setMyMaps(result);
      }
    })();
  }, []);

  return { myMaps, setMyMaps };
}
