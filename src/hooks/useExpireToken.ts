import { useEffect } from 'react';

export default function useExpireToken() {
  useEffect(() => {
    const accessToken = JSON.parse(localStorage.getItem('accessToken') as string);

    if (accessToken) {
      const isExpire = accessToken.expiration <= Date.now();

      if (isExpire) {
        localStorage.removeItem('accessToken');
      }
    }
  }, []);
}
