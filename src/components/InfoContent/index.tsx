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

export default function InfoContent({ label, value, inputName, placeholder, inputValue, onChange }: Props) {
  const { isEdit } = useSetIsEdit();

  return (
    <Content>
      {label}{' '}
      {isEdit ? <input name={inputName} placeholder={placeholder} value={inputValue} onChange={onChange} /> : value}
    </Content>
  );
}
