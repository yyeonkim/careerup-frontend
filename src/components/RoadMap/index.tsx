import React, { ReactNode, useCallback, useEffect, useState } from 'react';
import { Wrapper } from './styles';
import { ReactSortable } from 'react-sortablejs';

export default function RoadMap() {
  let count = 0;
  let isRight = true;
  let height = 10;

  const [list, setList] = useState([
    { id: 0, name: '0입니다.' },
    { id: 1, name: '1입니다.' },
    { id: 2, name: '2입니다.' },
    { id: 9999, name: '+' },
  ]);

  const AddMap = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.currentTarget.id === '9999') {
        setList(list.splice(list.length - 1));

        const temp = {
          id: list.length,
          name: `${list.length}입니다.`,
        };

        setList([...list, temp, { id: 9999, name: '+' }]);
      }
    },
    [list]
  );

  let test: ReactNode;

  return (
    <Wrapper>
      <ReactSortable
        list={list}
        setList={setList}
        className={'table'}
        onChoose={(x) => {
          console.log(x);
        }}
      >
        {list.map((item) => {
          if (count === 4) {
            isRight = !isRight;
            height += 350;

            count = 0;
          }
          count++;

          test = !isRight ? (
            <div
              id={`${item.id}`}
              key={item.id}
              style={{
                position: 'absolute',
                top: `${height + count * 30}px`,
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
                left: isRight ? `${count * 250}px` : 0,
              }}
              onClick={AddMap}
            >
              <span>{item.name}</span>
            </div>
          );

          if (item.id === 9999) return <div style={{ display: 'none' }}></div>;

          return test;
        })}
      </ReactSortable>
      {test}
    </Wrapper>
  );
}
