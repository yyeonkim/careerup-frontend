import { List } from './style';

interface Props {
  items: string[];
  onClick: React.MouseEventHandler<HTMLLIElement>;
}

export default function Dropdown({ items, onClick }: Props) {
  return (
    <List>
      {items.map((item, index) => {
        // 마지막 아이템이면
        if (index + 1 === items.length) {
          return <li onClick={onClick}>{item}</li>;
        }
        return (
          <>
            <li onClick={onClick}>{item}</li>
            <hr color="lightgrey" />
          </>
        );
      })}
    </List>
  );
}
