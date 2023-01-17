import { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { deleteUser } from '../../api/user';

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

  const onClick = async (event: React.MouseEvent<HTMLLIElement>) => {
    const textContent = event.currentTarget.textContent;
    const isLogout = textContent === Items.LOGOUT;
    const isMyPage = textContent === Items.MYPAGE;
    const isDelete = textContent === Items.DELETE;

    if (isLogout) {
      logoutUser();
      refreshPage();
    } else if (isMyPage) {
      history.push('/mypage');
    } else if (isDelete) {
      // 계정 탈퇴
      try {
        const response = await deleteUser();
        if (response.status === 200) {
          alert('탈퇴가 완료되었습니다.');
          logoutUser();
          refreshPage();
        }
      } catch (error) {
        console.log(error);
      }
    }
    dispatch(close());
  };

  const logoutUser = () => {
    localStorage.removeItem('accessToken');
  };

  const refreshPage = () => {
    history.push('/');
    history.go(0);
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
