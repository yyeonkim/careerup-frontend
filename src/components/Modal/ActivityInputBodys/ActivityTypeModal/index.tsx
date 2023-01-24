import React, { useCallback } from 'react';
import { ActivityType, TypeImg, Types } from './styles';
import { useAppDispatch } from '../../../../redux/hooks';
import {
  clickActivity,
  clickCertificate,
  clickClub,
  clickContest,
  clickEtc,
  clickStudy,
  onCloseAllType,
} from '../../../../redux/reducers/RoadMapSlice';

const ActivityTypeModal = () => {
  const dispatch = useAppDispatch();
  const types = ['certificate', 'club', 'contest', 'external-activity', 'study', 'etc'];
  const typeName = ['자격증', '동아리', '공모전', '대외활동', '스터디', '기타'];

  const onClickType = useCallback((type: string) => {
    dispatch(onCloseAllType());

    if (type === 'certificate') dispatch(clickCertificate());
    else if (type === 'club') dispatch(clickClub());
    else if (type === 'contest') dispatch(clickContest());
    else if (type === 'external-activity') dispatch(clickActivity());
    else if (type === 'study') dispatch(clickStudy());
    else if (type === 'etc') dispatch(clickEtc());
  }, []);

  const stopPropagation = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  }, []);

  return (
    <ActivityType onClick={stopPropagation}>
      <div>
        <img src="/images/activityType.png" alt="활동" />
        <Types>
          {types.map((type, idx) => {
            return (
              <div key={type} onClick={() => onClickType(type)}>
                <TypeImg>
                  <img src={`/images/${type}.png`} alt={type} />
                </TypeImg>
                <span>{typeName[idx]}</span>
              </div>
            );
          })}
        </Types>
      </div>
    </ActivityType>
  );
};

export default ActivityTypeModal;
