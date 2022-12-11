import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
import { RoadMapContainer, MapWrapper, SideBar, AddRoadBtn, Map, Road, AddCircle } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import BaseModal from '../BaseModal';
import ActivityInput from '../Modal/ActivityInput';
import { useWindowSize } from '../../hooks/useWindowSize';

interface Props {
  num: number;
}

const Circle: FC<Props> = ({ num }) => {
  return (
    <AddCircle style={{ left: num === 1 ? '18rem' : '8.7rem' }}>
      {num === 1 ? <img src="/images/green.png" alt="" /> : <FontAwesomeIcon icon={faPlus} />}
    </AddCircle>
  );
};

export default function RoadMap() {
  const [lenRoad, setLenRoad] = useState(0);

  const onClickAddRoad = useCallback(() => {
    setLenRoad((prev) => prev + 1);
  }, []);

  const width = useWindowSize().width;
  let leftWidth = 0;

  if (width) {
    leftWidth = width - 418;
  }

  return (
    <RoadMapContainer>
      <MapWrapper>
        <Map>
          <Road>
            <div className={'first'}>
              <img src="/images/firstMap.png" alt="firstMap" />
            </div>
            {[...Array(lenRoad)].map((v, road) => {
              const roadImg = road % 2 === 0 ? '/images/SecondMap.png' : '/images/ThirdMap.png';

              return (
                <div key={road} className={road % 2 === 0 ? (road > 1 ? 'second2' : 'second') : 'third'}>
                  <img src={roadImg} alt="Map" />
                </div>
              );
            })}
            <Circle num={1} />
            <Circle num={2} />
          </Road>
        </Map>
      </MapWrapper>
      <SideBar>
        <AddRoadBtn onClick={onClickAddRoad}>
          길<br />
          <br /> 추<br />가<br />하<br />기
        </AddRoadBtn>
      </SideBar>

      {
        <BaseModal
          show={true}
          onCloseModal={() => {
            true;
          }}
          style={{
            width: `${leftWidth}px`,
            minHeight: '100vh',
            backgroundColor: 'rgba(80,80,80,0.53)',
          }}
        >
          <ActivityInput />
        </BaseModal>
      }
    </RoadMapContainer>
  );
}
