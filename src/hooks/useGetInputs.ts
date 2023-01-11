import { useEffect, useState } from 'react';

import { useAppSelector } from '../redux/hooks';

export default function useGetInputs() {
  const isLoading = useAppSelector((state) => state.user.loading);
  const userData = useAppSelector((state) => state.user.entities);
  const [inputs, setInputs] = useState(userData);

  useEffect(() => {
    setInputs(userData);
  }, [isLoading]);

  return { inputs, setInputs };
}
