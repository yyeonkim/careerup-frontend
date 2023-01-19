import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export default function useExpireToken() {
  const history = useHistory();

  useEffect(() => {
    const accessToken = JSON.parse(localStorage.getItem('accessToken') as string);

    if (accessToken) {
      const isExpire = accessToken.expiration <= Date.now();

      if (isExpire) {
        localStorage.removeItem('accessToken');
        alert('로그인이 만료되었습니다. 다시 로그인 해주세요.');
        refreshPage();
      }
    }
  }, []);

  const refreshPage = () => {
    history.push('/');
    history.go(0);
  };
}
