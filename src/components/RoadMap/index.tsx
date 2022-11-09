import { useCallback, useState } from 'react';
import { Button, Wrapper } from './styles';
import { ReactSortable } from 'react-sortablejs';

export default function RoadMap() {
  let count = 0;
  let isRight = true;
  let height = 10;

  const [state, setState] = useState([
    { id: 1, name: '1입니다.' },
    { id: 2, name: '2입니다.' },
    { id: 3, name: '3입니다.' },
  ]);

  const AddMap = useCallback(() => {
    const temp = {
      id: state.length + 1,
      name: `${state.length + 1}입니다.`,
    };

    setState([...state, temp]);
  }, [state]);

  return (
    <Wrapper>
      <ReactSortable list={state} setList={setState} className={'table'}>
        {state.map((item) => {
          if (count === 4) {
            isRight = !isRight;
            height += 300;

            count = 0;
          }
          count++;

          console.log(count, isRight);

          return !isRight ? (
            <div
              key={item.id}
              style={{
                position: 'absolute',
                top: `${height + count * 30}px`,
                //이게 위
                right: isRight ? 0 : `${count * 250}px`,
              }}
            >
              <span>{item.name}</span>
            </div>
          ) : (
            <div
              key={item.id}
              style={{
                position: 'absolute',
                top: `${height + count * 30}px`,

                // 이게 밑
                left: isRight ? `${count * 250}px` : 0,
              }}
            >
              <span>{item.name}</span>
            </div>
          );
        })}
      </ReactSortable>
      <Button onClick={AddMap}>추가 버튼</Button>
    </Wrapper>
  );
}
