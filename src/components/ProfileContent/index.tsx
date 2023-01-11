import useSetIsEdit from '../../hooks/useSetIsEdit';
import { Content } from './style';

interface Props {
  label: string;
  value: string;
  inputName: string;
  inputValue: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export default function ProfileContent({ label, value, inputName, inputValue, onChange }: Props) {
  const { isEdit } = useSetIsEdit();

  return (
    <Content>
      <span>{label}</span>
      {isEdit ? <input name={inputName} value={inputValue} onChange={onChange} /> : <span>{value}</span>}
    </Content>
  );
}
