import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
import { RoadMapContainer, MapWrapper, SideBar, AddRoadBtn, Map, FirstRoad, AddCircle } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useWindowSize } from '../../hooks/useWindowSize';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { resetValue, testCount } from '../../reducers/TestSlice';
import { addValue } from '../../actions/TestAPI';

interface Size {
  width: number | undefined;
  height: number | undefined;
}

interface Props {
  width: number | undefined;
  height: number | undefined;
}

const dummyCircle = [
  { id: 1, content: '1번' },
  { id: 2, content: '2번' },
];

const Circle: FC<Props> = ({ width, height }) => {
  let len, top, left, fontSize;
  if (width && height) {
    len = width / 13;
    top = height * 0.07;
    // left = width / 9;
    left = width / 9;
    // left = width / 1.4;
    fontSize = width / 20;
  }

  return (
    <AddCircle style={{ width: len, height: len, top: top, left: left, fontSize: fontSize }}>
      <FontAwesomeIcon icon={faPlus} />
    </AddCircle>
  );
};

export default function RoadMap() {
  const [lenRoad, setLenRoad] = useState(0);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const onClickAddRoad = useCallback(() => {
    setLenRoad((prev) => prev + 1);
  }, []);

  const ref = useRef<HTMLDivElement>(null);

  const size: Size = useWindowSize();

  useEffect(() => {
    const { current } = ref;
    if (current) {
      setWidth(current.clientWidth);
      setHeight(current.clientHeight);
    }
  }, [size]);

  let greenWidth, greenLeft;
  if (width) {
    greenWidth = width / 18;
    greenLeft = width / 20;
  }

  const value = useAppSelector(testCount);
  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log(value);
  }, [value]);

  return (
    <RoadMapContainer>
      <MapWrapper>
        <Map ref={ref}>
          <FirstRoad>
            <img
              src="/images/green.png"
              alt=""
              style={{ position: 'absolute', top: '6.5rem', left: greenLeft, width: greenWidth }}
            />
            <div className={'first'}>
              <img src="/images/firstMap.png" alt="firstMap" />
            </div>
            {[...Array(lenRoad)].map((v, road) => {
              const roadImg = road % 2 === 0 ? '/images/SecondMap.png' : '/images/ThirdMap.png';

              return (
                <div className={road % 2 === 0 ? (road > 1 ? 'second2' : 'second') : 'third'}>
                  <img src={roadImg} alt="Map" />
                </div>
              );
            })}
            <Circle width={width} height={height} />
          </FirstRoad>
        </Map>
      </MapWrapper>
      <SideBar>
        <AddRoadBtn onClick={onClickAddRoad}>
          길<br />
          <br /> 추<br />가<br />하<br />기
        </AddRoadBtn>

        <AddRoadBtn onClick={() => dispatch(addValue())}>테스트</AddRoadBtn>
        <AddRoadBtn onClick={() => dispatch(resetValue())}>리셋</AddRoadBtn>
      </SideBar>
    </RoadMapContainer>
  );
}
