import React, { useCallback, useState } from 'react';
import { RoadMapContainer, MapWrapper, SideBar, AddRoadBtn, Map, FirstRoad, AddRound } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const Round = () => {
  return (
    <AddRound>
      <FontAwesomeIcon icon={faPlus} />
    </AddRound>
  );
};

export default function RoadMap() {
  const [lenRoad, setLenRoad] = useState(0);

  const onClickAddRoad = useCallback(() => {
    setLenRoad((prev) => prev + 1);
  }, []);

  return (
    <RoadMapContainer>
      <MapWrapper>
        <Map>
          <FirstRoad>
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
            <Round />
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
