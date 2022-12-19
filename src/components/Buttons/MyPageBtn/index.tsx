import { Button } from './style';

interface MyPageBtnProps {
  text: string;
}

export default function MyPageBtn({ text }: MyPageBtnProps) {
  return <Button>{text}</Button>;
}
