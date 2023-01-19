import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { patchNewPassword } from '../../api/user';
import useInputs from '../../hooks/useInputs';
import { Message, StyledInput, Title } from '../ForgottenPassword/style';
import { CancelButton, ConfirmButton, Container } from './style';

const isEmpty = (text: string) => {
  return text === '';
};

const isSame = <T,>(value1: T, value2: T): boolean => {
  return value1 === value2;
};

interface IPasswords {
  [index: string]: string;
  password: string;
  passwordCheck: string;
}

const ChangePassword = () => {
  const history = useHistory();
  const [inputs, onChange, resetInputs] = useInputs<IPasswords>({ password: '', passwordCheck: '' });
  const [message, setMessage] = useState('');

  useEffect(() => {
    const { password, passwordCheck } = inputs;

    if (!isEmpty(passwordCheck) && !isSame(password, passwordCheck)) {
      setMessage('*비밀번호가 일치하지 않습니다.');
    }

    if (isSame(password, passwordCheck)) {
      setMessage('');
    }
  }, [inputs]);

  const onClickConfirm = async () => {
    try {
      const response = await patchNewPassword(inputs.password);
      if (response.status === 200) {
        alert('비밀번호가 변경되었습니다.');
        goMyPage();
        resetInputs();
      }
    } catch (error) {
      alert(error);
    }
  };

  const goMyPage = () => {
    history.push('/mypage');
  };

  return (
    <Container>
      <Title>비밀번호를 변경해주세요</Title>
      <StyledInput
        type="password"
        name="password"
        placeholder="새 비밀번호"
        value={inputs.password}
        onChange={onChange}
      />
      <StyledInput
        type="password"
        name="passwordCheck"
        placeholder="새 비밀번호 확인"
        value={inputs.passwordCheck}
        onChange={onChange}
      />
      <Message>{message}</Message>

      <div className="button-fields">
        <ConfirmButton onClick={onClickConfirm}>확인</ConfirmButton>
        <CancelButton onClick={goMyPage}>취소</CancelButton>
      </div>
    </Container>
  );
};

export default React.memo(ChangePassword);
