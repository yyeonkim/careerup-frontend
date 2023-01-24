import React, { useCallback, useEffect, useLayoutEffect, useState } from 'react';
import { VscThreeBars } from 'react-icons/vsc';

import {
  Menu,
  CareerMapsWrapper,
  Profile,
  InfoWrapper,
  ProfileTop,
  ProfileBottom,
  Activity,
  ActivityContent,
  EditBtn,
} from './style';
import RoadMap from '../../components/RoadMap';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { roadMap, toggleOrderEdit } from '../../redux/reducers/RoadMapSlice';
import { changeItems, getItems } from '../../redux/actions/RoadMapAPI';

type Nullable<T> = T | null;

interface DragAndDrop {
  draggedFrom: Nullable<number>;
  draggedTo: Nullable<number>;
  isDragging: boolean;
  originalOrder: Array<string>;
  updatedOrder: Array<string>;
}

interface item {
  itemIdx: number;
  title: string;
  category: string;
  sequence: number;
}

export default function CareerMaps() {
  const { reLender, items } = useAppSelector((state) => state.roadMap);
  const { name, age, job } = useAppSelector((state) => state.user.entities);

  const [list, setList] = useState<any>([]);

  useEffect(() => {
    setList(items.slice());
  }, [items]);

  const [dragAndDrop, setDragAndDrop] = useState<DragAndDrop>({
    draggedFrom: null,
    draggedTo: null,
    isDragging: false,
    originalOrder: [],
    updatedOrder: [],
  });

  const orderEdit = useAppSelector(roadMap).orderEdit;
  const dispatch = useAppDispatch();

  const onClickOrderEdit = useCallback(() => {
    dispatch(toggleOrderEdit());
  }, []);

  const onClickCancel = useCallback(() => {
    dispatch(toggleOrderEdit());
  }, []);

  const onDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    event.currentTarget.style.opacity = '0.4';
    const initialPosition = parseInt(event.currentTarget.dataset.position!);
    setDragAndDrop({
      ...dragAndDrop,
      draggedFrom: initialPosition,
      originalOrder: list,
    });
  };

  const onDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    let newList = dragAndDrop.originalOrder;
    const draggedFrom = dragAndDrop.draggedFrom; // 드래그 되는 항목의 인덱스(시작)
    const draggedTo = parseInt(event.currentTarget.dataset.position!); // 놓을 수 있는 영역의 인덱스(끝)
    const itemDragged = newList[draggedFrom ?? 0];
    const remainingItems = newList.filter(
      // draggedFrom(시작) 항목 제외한 배열 목록
      (item: any, index: any) => index !== draggedFrom
    );
    newList = [
      // 드래그 시작, 끝 인덱스를 활용해 새로운 배열로 반환해줌
      ...remainingItems.slice(0, draggedTo),
      itemDragged,
      ...remainingItems.slice(draggedTo),
    ];
    if (draggedTo !== dragAndDrop.draggedTo) {
      // 놓을 수 있는 영역이 변경 되면 객체를 변경해줌
      setDragAndDrop({
        ...dragAndDrop,
        updatedOrder: newList,
        draggedTo: draggedTo,
      });
    }
  };

  const onDrop = () => {
    setList(dragAndDrop.updatedOrder);
    setDragAndDrop({
      ...dragAndDrop,
      draggedFrom: null,
      draggedTo: null,
    });
  };

  const onDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    event.currentTarget.classList.remove('over');
    setDragAndDrop({
      ...dragAndDrop,
      draggedTo: null,
    });
  };

  // 잡은 Item이 다른 Item이랑 겹쳤을 때 발생<겹쳐졌을 때>
  const onDragEnter = (event: React.DragEvent<HTMLDivElement>) => {
    event.currentTarget.classList.add('over');
  };

  const onDragEnd = (event: React.DragEvent<HTMLDivElement>) => {
    event.currentTarget.style.opacity = '1';
    const listItems = document.querySelectorAll('.draggable');
    listItems.forEach((item) => {
      item.classList.remove('over');
    });
  };

  const onClickSave = useCallback(() => {
    for (let i = 0; i < list.length; i++) {
      list[i] = { ...list[i], sequence: i + 1 };
    }

    //console.log(list);
    dispatch(changeItems({ mapIdx: 37, list }));
    dispatch(toggleOrderEdit());
  }, [list]);

  useLayoutEffect(() => {
    dispatch(getItems(37));
  }, [reLender]);

  return (
    <CareerMapsWrapper>
      <Menu>
        <Profile>
          <InfoWrapper>
            <ProfileTop>
              <img
                src="https://img.danawa.com/prod_img/500000/017/350/img/13350017_1.jpg?shrink=330:330&_v=20210224095944"
                alt=""
              />
              <div>
                <span>이름</span>
                <span>나이</span>
                <span>직업</span>
              </div>
              <div>
                <span>{name}</span>
                <span>{age}</span>
                <span>{job}</span>
              </div>
            </ProfileTop>
            <ProfileBottom>
              <div>희망 커리어</div>
              <div>프론트엔드 개발자</div>
            </ProfileBottom>
          </InfoWrapper>
        </Profile>

        <Activity orderEdit={orderEdit}>
          <div>
            <span>활동</span>
          </div>
          <ActivityContent orderEdit={orderEdit}>
            {list.map((item: any, idx: number) => {
              return (
                <div
                  className="draggable"
                  key={idx}
                  draggable={orderEdit} //  draggable => true이면 드래그가 가능합니다.
                  data-position={idx} //  dataset에 index값을 주어 선택된 index를 찾을 수 있습니다.
                  onDragStart={onDragStart} //  ex) event.currentTarget.dataset.position
                  onDragOver={onDragOver}
                  onDragLeave={onDragLeave}
                  onDrop={onDrop}
                  onDragEnter={onDragEnter}
                  onDragEnd={onDragEnd}
                >
                  {item.title}
                  <span>{orderEdit && <VscThreeBars />}</span>
                </div>
              );
            })}
          </ActivityContent>

          {!orderEdit && (
            <EditBtn>
              <button onClick={onClickOrderEdit}>순서 편집</button>
            </EditBtn>
          )}
          {orderEdit && (
            <EditBtn>
              <button className="save" onClick={onClickSave}>
                저장
              </button>
              <button
                className="cancel"
                onClick={() => {
                  onClickCancel();
                  setList(items);
                }}
              >
                취소
              </button>
            </EditBtn>
          )}
        </Activity>
      </Menu>
      <RoadMap />
    </CareerMapsWrapper>
  );
}
