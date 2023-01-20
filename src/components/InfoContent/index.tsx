import React from 'react';

import useSetIsEdit from '../../hooks/useSetIsEdit';
import { Content } from './style';

interface Props {
  label: string;
  value: string;
  inputName: string;
  placeholder: string;
  inputValue: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

function InfoContent({ label, value, inputName, placeholder, inputValue, onChange }: Props) {
  const isEdit = useSetIsEdit();

  return (
    <Content>
      {label}{' '}
      <input
        disabled={inputName === 'username' ? true : isEdit ? false : true}
        name={inputName}
        placeholder={placeholder}
        value={isEdit ? inputValue : value}
        onChange={onChange}
      />
    </Content>
  );
}

export default React.memo(InfoContent);
