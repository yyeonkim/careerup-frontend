import React, { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { Header, TypeBtn } from './styles';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';
import { toggleIsActivityTypeModal, changeTitle } from '../../../../redux/reducers/RoadMapSlice';
import ActivityTypeModal from '../ActivityTypeModal';

const ActivityInputHeader = () => {
  const dispatch = useAppDispatch();
  const { isActivityTypeModal, isCertificate, isClub, isContest, isExternalActivity, isStudy, isEtc, title } =
    useAppSelector((state) => state.roadMap);

  const [nowType, setNowType] = useState('');
  const types = [isCertificate, isClub, isContest, isExternalActivity, isStudy, isEtc];
  const imgs = ['certificate', 'club', 'contest', 'external-activity', 'study', 'etc'];

  const onChangeTitle = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeTitle(e.target.value));
  }, []);

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

    dispatch(changeTitle(''));
  }, [isCertificate, isClub, isContest, isExternalActivity, isStudy, isEtc]);

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
