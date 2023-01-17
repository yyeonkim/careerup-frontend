import { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import { useAppDispatch } from '../../redux/hooks';
import { close } from '../../redux/reducers/DropdownSlice';
import { List, itemStyle } from './style';

enum Items {
  LOGOUT = '로그아웃',
  MYPAGE = '마이페이지',
  DELETE = '탈퇴하기',
}

export default function Dropdown() {
  const history = useHistory();
  const location = useLocation();
  const [items, setItems] = useState<Items[]>([Items.LOGOUT]);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setItems(location.pathname === '/mypage' ? [Items.LOGOUT, Items.DELETE] : [Items.LOGOUT, Items.MYPAGE]);
  }, [location.pathname]);

  const onClick = (event: React.MouseEvent<HTMLLIElement>) => {
    const textContent = event.currentTarget.textContent;
    const isLogout = textContent === Items.LOGOUT;
    const isMyPage = textContent === Items.MYPAGE;
    const isDelete = textContent === Items.DELETE;

    if (isLogout) {
      localStorage.removeItem('accessToken');
      history.push('/');
      history.go(0);
    } else if (isMyPage) {
      history.push('/mypage');
    } else if (isDelete) {
      // 계정 탈퇴
    }
    dispatch(close());
  };

  return (
    <List>
      {items.map((item, index) => {
        // 마지막 아이템이면
        if (index + 1 === items.length) {
          return (
            <li style={Items.DELETE ? itemStyle.delete : itemStyle.default} onClick={onClick}>
              {item}
            </li>
          );
        }
        return (
          <>
            <li style={itemStyle.default} onClick={onClick}>
              {item}
            </li>
            <hr color="lightgrey" />
          </>
        );
      })}
    </List>
  );
}
