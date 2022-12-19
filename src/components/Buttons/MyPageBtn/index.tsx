import { MouseEventHandler } from 'react';
import { Button } from './style';

interface MyPageBtnProps {
  text: string;
  onClick: MouseEventHandler<HTMLDivElement>;
}

export default function MyPageBtn({ text, onClick }: MyPageBtnProps) {
  return <Button onClick={onClick}>{text}</Button>;
}
