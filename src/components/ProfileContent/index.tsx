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
      <input
        disabled={isEdit ? false : true}
        name={inputName}
        value={isEdit ? inputValue : value}
        onChange={onChange}
      />
    </Content>
  );
}
