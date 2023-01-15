import axios from 'axios';
import { useEffect, useState } from 'react';
import { IMyMap } from '../interfaces';

export default function useGetMyMaps() {
  const accessToken = localStorage.getItem('accessToken');
  const [myMaps, setMyMaps] = useState<IMyMap[]>([]);

  useEffect(() => {
    (async () => {
      const response = await axios.get('/map/my-map', { headers: { Authorization: `Bearer ${accessToken}` } });

      if (response.status === 200) {
        if (response.data.result === undefined) {
          setMyMaps([]);
        } else {
          setMyMaps(response.data.result);
        }
      }
    })();
  }, []);

  return { myMaps, setMyMaps };
}
