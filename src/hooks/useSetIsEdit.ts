import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

// 해시 주소에 따라 boolean 반환
// 편집 모드면 true, 아니면 false
export default function useSetIsEdit() {
  const location = useLocation();
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    setIsEdit(location.hash === '#edit');
  }, [location.hash]);

  return isEdit;
}
