import { useEffect } from 'react';

import { useAppSelector } from '../redux/hooks';
import useInputs from './useInputs';

export default function useUserInputs() {
  const isLoading = useAppSelector((state) => state.user.loading);
  const userData = useAppSelector((state) => state.user.entities);
  const { inputs, setInputs, onChange } = useInputs(userData);

  // 사용자 정보를 가져오면 input에 저장
  useEffect(() => {
    setInputs(userData);
  }, [isLoading]);

  const resetInputs = () => {
    setInputs(userData);
  };

  return { inputs, setInputs, resetInputs, onChange };
}
