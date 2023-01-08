import React, { useCallback, useEffect, useState } from 'react';
import { Header, TypeBtn } from './styles';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';
import useInput from '../../../../hooks/useInput';
import { toggleIsActivityTypeModal } from '../../../../redux/reducers/RoadMapSlice';
import ActivityTypeModal from '../ActivityTypeModal';

const ActivityInputHeader = () => {
  const dispatch = useAppDispatch();
  const { isActivityTypeModal, isCertificate, isClub, isContest, isActivity, isStudy, isEtc } = useAppSelector(
    (state) => state.roadMap
  );

  const [title, onChangeTitle, setTitle] = useInput('');
  const [nowType, setNowType] = useState('');
  const types = [isCertificate, isClub, isContest, isActivity, isStudy, isEtc];
  const imgs = ['certificate', 'club', 'contest', 'activity', 'study', 'etc'];

  const onClickHeaderBtn = useCallback(() => {
    dispatch(toggleIsActivityTypeModal());
  }, []);

  const stopPropagation = useCallback((e: any) => {
    e.stopPropagation();
  }, []);

  useEffect(() => {
    types.forEach((type, idx) => {
      if (type) setNowType(imgs[idx]);
    });
    setTitle('');
  }, [isCertificate, isClub, isContest, isActivity, isStudy, isEtc]);

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

      <input type="text" value={title} onChange={onChangeTitle} spellCheck={false} placeholder={'제목을 입력하세요'} />
      {isActivityTypeModal && <ActivityTypeModal />}
    </Header>
  );
};

export default ActivityInputHeader;
