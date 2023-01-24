import { useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import { RoadMapContainer, MapWrapper, SideBar, AddRoadBtn, Map, Road, AddCircle, InfoCircle } from './styles';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import RoadMapModal from '../Modal/RoadMapModal';
import ActivityInput from '../Modal/ActivityInput';
import {
  clickActivity,
  clickCertificate,
  clickClub,
  clickContest,
  clickEtc,
  clickStudy,
  editMode,
  onCloseAllType,
  readMode,
  toggleIsModal,
} from '../../redux/reducers/RoadMapSlice';
import { getItemInfo } from '../../redux/actions/RoadMapAPI';

type obj = { [key: string]: string };

export default function RoadMap() {
  let isLeft = false,
    top = 0,
    left;

  const types: obj = {
    자격증: 'certificate',
    동아리: 'club',
    공모전: 'contest',
    대외활동: 'external-activity',
    스터디: 'study',
    기타: 'etc',
  };

  const dispatch = useAppDispatch();
  const { roadLen, activity, isModal, items } = useAppSelector((state) => state.roadMap);

  const onClickAddRoad = useCallback(() => {
    dispatch(toggleIsModal());
    dispatch(editMode());
  }, []);

  const addActivity = useCallback(() => {
    dispatch(toggleIsModal());
    dispatch(editMode());
  }, []);

  const readActivity = useCallback((idx: number, category: string) => {
    dispatch(toggleIsModal());
    dispatch(readMode());
    dispatch(getItemInfo(idx));
    dispatch(onCloseAllType());

    if (category === '자격증') dispatch(clickCertificate());
    else if (category === '동아리') dispatch(clickClub());
    else if (category === '공모전') dispatch(clickContest());
    else if (category === '대외활동') dispatch(clickActivity());
    else if (category === '스터디') dispatch(clickStudy());
    else dispatch(clickEtc());
  }, []);

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

              if (activity === 0)
                return (
                  <AddCircle key={activity} style={{ top: `${top}rem`, left: activity === 0 ? '4rem' : `${left}rem` }}>
                    <img src="/images/green.png" alt="새싹" />
                  </AddCircle>
                );

              if (activity > 0)
                return (
                  <AddCircle
                    key={items[activity - 1] ? items[activity - 1].itemIdx : activity + items.length}
                    style={{ top: `${top}rem`, left: activity === 0 ? '4rem' : `${left}rem` }}
                  >
                    {items[activity - 1] ? (
                      <InfoCircle
                        title={items[activity - 1].title}
                        onClick={() => readActivity(items[activity - 1].itemIdx, items[activity - 1].category)}
                      >
                        <img
                          src={`/images/${types[items[activity - 1]?.category]}.png`}
                          alt={items[activity - 1]?.category}
                        />
                        <span>{items[activity - 1].category}</span>
                      </InfoCircle>
                    ) : (
                      <FontAwesomeIcon icon={faPlus} className={'plusBtn'} onClick={addActivity} />
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
          onCloseModal={addActivity}
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
