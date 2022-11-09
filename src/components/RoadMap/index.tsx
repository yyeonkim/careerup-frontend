import React, { useCallback, useEffect, useState } from 'react';
import { Button, Wrapper } from './styles';
import { ReactSortable } from 'react-sortablejs';

export default function RoadMap() {
  let count = 0;
  let isRight = true;
  let height = 10;

  const [state, setState] = useState(
    [
      { id: 3, name: '3입니다.' },
      { id: 1, name: '1입니다.' },
      { id: 2, name: '2입니다.' },
    ].sort((a, b) => {
      return a.id - b.id;
    })
  );

  useEffect(() => {
    setState([...state, { id: 9999, name: '+' }]);
  }, []);

  const AddMap = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.currentTarget.id === '9999') {
        setState(state.splice(state.length - 1));

        const temp = {
          // id: count < 4 ? state.length + 1 : 999,
          id: state.length + 1,
          name: `${state.length + 1}입니다.`,
        };

        setState([...state, temp, { id: 9999, name: '+' }]);
      }
    },
    [state]
  );

  return (
    <Wrapper>
      <ReactSortable list={state} setList={setState} className={'table'}>
        {state.map((item) => {
          if (count === 4) {
            isRight = !isRight;
            height += 350;

            count = 0;
          }
          count++;

          return !isRight ? (
            <div
              id={`${item.id}`}
              key={item.id}
              style={{
                position: 'absolute',
                top: `${height + count * 30}px`,
                //이게 위
                right: isRight ? 0 : `${count * 250}px`,
              }}
              onClick={AddMap}
            >
              <span>{item.name}</span>
            </div>
          ) : (
            <div
              id={`${item.id}`}
              key={item.id}
              style={{
                position: 'absolute',
                top: `${height + count * 30}px`,

                // 이게 밑
                left: isRight ? `${count * 250}px` : 0,
              }}
              onClick={AddMap}
            >
              <span>{item.name}</span>
            </div>
          );
        })}
      </ReactSortable>
      {/*<Button onClick={AddMap}>추가 버튼</Button>*/}
    </Wrapper>
  );
}
