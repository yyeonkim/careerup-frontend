import React, { useCallback, useEffect, useState } from 'react';
import ActivityTypeModal from '../Modal/ActivityTypeModal';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { toggleIsActivityTypeModal } from '../../redux/reducers/RoadMapSlice';
import { Header, TypeBtn } from './styles';

const ActivityInputHeader = () => {
  const dispatch = useAppDispatch();
  const { isActivityTypeModal, isCertificate, isClub, isContest, isActivity, isStudy, isEtc } = useAppSelector(
    (state) => state.roadMap
  );

  const [nowType, setNowType] = useState('');
  const types = [isCertificate, isClub, isContest, isActivity, isStudy, isEtc];
  const imgs = ['certificate', 'club', 'contest', 'activity', 'study', 'etc'];

  useEffect(() => {
    types.forEach((type, idx) => {
      if (type) setNowType(imgs[idx]);
    });
  }, [isCertificate, isClub, isContest, isActivity, isStudy, isEtc]);

  const onClickHeaderBtn = useCallback(() => {
    dispatch(toggleIsActivityTypeModal());
  }, []);

  const stopPropagation = useCallback((e: any) => {
    e.stopPropagation();
  }, []);

  return (
    <Header>
      <TypeBtn
        onClick={(e) => {
          stopPropagation(e);
          onClickHeaderBtn();
        }}
      >
        <img src={`/images/${nowType}.png`} alt={nowType} />
      </TypeBtn>

      <span>잇타(It's Time)</span>
      {isActivityTypeModal && <ActivityTypeModal />}
    </Header>
  );
};

export default ActivityInputHeader;
