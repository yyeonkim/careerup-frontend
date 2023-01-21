import { useEffect } from 'react';

import { IMapInputs } from '../interfaces';
import { useAppSelector } from '../redux/hooks';
import useInputs from './useInputs';

type IMapIdx = string | number;

// 커리어 맵 제목과 커리어 가져오기
export default function useMapInputs(mapIdx: IMapIdx) {
  const myMaps = useAppSelector((state) => state.myMap.entities);
  const { inputs, setInputs, onChange, resetInputs } = useInputs<IMapInputs>({ title: '', career: '' });

  useEffect(() => {
    const found = myMaps.find((item) => `${item.mapIdx}` === mapIdx);
    setInputs({ title: found?.title as string, career: found?.career as string });
  }, [mapIdx]);

  return { inputs, setInputs, onChange, resetInputs };
}
