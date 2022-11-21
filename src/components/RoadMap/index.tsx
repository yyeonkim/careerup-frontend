import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
import { RoadMapContainer, MapWrapper, SideBar, AddRoadBtn, Map, FirstRoad, AddCircle } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useWindowSize } from '../../hooks/useWindowSize';

interface Size {
  width: number | undefined;
  height: number | undefined;
}

interface Props {
  width: number | undefined;
}

const Circle: FC<Props> = ({ width }) => {
  let len, left, fontSize;
  if (width) {
    len = width / 13;
    left = width / 9;
    fontSize = width / 20;
  }

  return (
    <AddCircle style={{ width: len, height: len, left: left, fontSize: fontSize }}>
      <FontAwesomeIcon icon={faPlus} />
    </AddCircle>
  );
};

export default function RoadMap() {
  const [lenRoad, setLenRoad] = useState(0);
  const [width, setWidth] = useState(0);

  const onClickAddRoad = useCallback(() => {
    setLenRoad((prev) => prev + 1);
  }, []);

  const ref = useRef<HTMLDivElement>(null);

  const size: Size = useWindowSize();

  useEffect(() => {
    const { current } = ref;
    if (current) setWidth(current.clientWidth);
  }, [size]);

  let greenWidth, greenLeft;
  if (width) {
    greenWidth = width / 18;
    greenLeft = width / 20;
  }

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
            <Circle width={width} />
          </FirstRoad>
        </Map>
      </MapWrapper>
      <SideBar>
        <AddRoadBtn onClick={onClickAddRoad}>
          길<br />
          <br /> 추<br />가<br />하<br />기
        </AddRoadBtn>
      </SideBar>
    </RoadMapContainer>
  );
}
