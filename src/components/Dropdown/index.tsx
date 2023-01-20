import { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { deleteUser } from '../../api/user';

import { useAppDispatch } from '../../redux/hooks';
import { close } from '../../redux/reducers/DropdownSlice';
import { List, itemStyle } from './style';

enum Items {
  LOGOUT = '로그아웃',
  MYPAGE = '마이페이지',
  PASSWORD = '비밀번호 변경',
  DELETE = '탈퇴하기',
}

export default function Dropdown() {
  const history = useHistory();
  const location = useLocation();
  const [items, setItems] = useState<Items[]>([Items.LOGOUT]);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setItems(
      location.pathname === '/mypage' ? [Items.LOGOUT, Items.PASSWORD, Items.DELETE] : [Items.LOGOUT, Items.MYPAGE]
    );
  }, [location.pathname]);

  const onClick = async (event: React.MouseEvent<HTMLLIElement>) => {
    const textContent = event.currentTarget.textContent;

    switch (textContent) {
      case Items.LOGOUT:
        logoutUser();
        refreshPage();
        break;

      case Items.MYPAGE:
        history.push('/mypage');
        break;

      case Items.PASSWORD:
        history.push('/changepassword');
        break;

      case Items.DELETE:
        try {
          const response = await deleteUser();
          if (response.status === 200) {
            alert('탈퇴가 완료되었습니다.');
            logoutUser();
            refreshPage();
          }
        } catch (error) {
          alert(error);
        }
        break;
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
            <li key={item} style={Items.DELETE ? itemStyle.delete : itemStyle.default} onClick={onClick}>
              {item}
            </li>
          );
        }
        return (
          <>
            <li key={item} style={itemStyle.default} onClick={onClick}>
              {item}
            </li>
            <hr color="lightgrey" />
          </>
        );
      })}
    </List>
  );
}
