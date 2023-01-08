import React, { useCallback } from 'react';
import { RoadMapContainer, MapWrapper, SideBar, AddRoadBtn, Map, Road, AddCircle } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import RoadMapModal from '../Modal/RoadMapModal';
import ActivityInput from '../Modal/ActivityInput';
import { addRoad, roadMap, toggleIsModal } from '../../redux/reducers/RoadMapSlice';

export default function RoadMap() {
  const dispatch = useAppDispatch();
  const { roadLen, activity, isModal } = useAppSelector((state) => state.roadMap);

  const onClickAddRoad = useCallback(() => {
    dispatch(addRoad());
  }, []);

  const onClickIsModal = useCallback(() => {
    dispatch(toggleIsModal());
  }, []);

  let isLeft = false,
    top = 0,
    left;

  return (
    <RoadMapContainer>
      <MapWrapper>
        <Map>
          <Road>
            <div className={'first'}>
              <img src="/images/firstMap.png" alt="firstMap" />
            </div>
            {[...Array(roadLen)].map((v, road) => {
              const roadImg = road % 2 === 0 ? '/images/SecondMap.png' : '/images/ThirdMap.png';

              return (
                <div key={road} className={road % 2 === 0 ? (road > 1 ? 'second2' : 'second') : 'third'}>
                  <img src={roadImg} alt="Map" />
                </div>
              );
            })}

            {[...Array(activity)].map((v, activity) => {
              const check = activity % 3;

              if (activity != 0 && check === 0) {
                top = activity > 7 ? top + 21.45 : top + 19.6;
                isLeft = !isLeft;
              }

              if ((!isLeft && check === 0) || (isLeft && check === 2)) left = 8;
              else if ((!isLeft && check === 1) || (isLeft && check === 1)) left = 40;
              else left = 70;

              return (
                <AddCircle key={activity} style={{ top: `${top}rem`, left: activity === 0 ? '4rem' : `${left}rem` }}>
                  {activity === 0 ? (
                    <img src="/images/green.png" alt="" />
                  ) : (
                    <FontAwesomeIcon icon={faPlus} className={'plusBtn'} onClick={onClickIsModal} />
                  )}
                </AddCircle>
              );
            })}
          </Road>
        </Map>
      </MapWrapper>
      <SideBar>
        <AddRoadBtn onClick={onClickAddRoad}>
          길<br />
          <br /> 추<br />가<br />하<br />기
        </AddRoadBtn>
      </SideBar>

      {isModal && (
        <RoadMapModal
          show={isModal}
          onCloseModal={onClickIsModal}
          style={{
            width: '100%',
            minHeight: '100vh',
            backgroundColor: 'rgba(80,80,80,0.53)',
          }}
        >
          <ActivityInput />
        </RoadMapModal>
      )}
    </RoadMapContainer>
  );
}
