import { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import { useAppDispatch } from '../../redux/hooks';
import { close } from '../../redux/reducers/DropdownSlice';
import { List } from './style';

export default function Dropdown() {
  const history = useHistory();
  const location = useLocation();
  const [items, setItems] = useState(['로그아웃']);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setItems(location.pathname === '/mypage' ? ['로그아웃'] : ['마이페이지', '로그아웃']);
  }, [location.pathname]);

  const onClick = (event: React.MouseEvent<HTMLLIElement>) => {
    const textContent = event.currentTarget.textContent;
    const isLogout = textContent === '로그아웃';

    if (isLogout) {
      localStorage.removeItem('accessToken');
      history.push('/');
      history.go(0);
    } else {
      history.push('/mypage');
    }
    dispatch(close());
  };

  return (
    <List>
      {items.map((item, index) => {
        // 마지막 아이템이면
        if (index + 1 === items.length) {
          return <li onClick={onClick}>{item}</li>;
        }
        return (
          <>
            <li onClick={onClick}>{item}</li>
            <hr color="lightgrey" />
          </>
        );
      })}
    </List>
  );
}
