import React, { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { Header, TypeBtn } from './styles';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';
import { toggleIsActivityTypeModal, changeTitle } from '../../../../redux/reducers/RoadMapSlice';
import ActivityTypeModal from '../ActivityTypeModal';
import { UploadFile } from 'antd';

const ActivityInputHeader = () => {
  const dispatch = useAppDispatch();
  const {
    isActivityTypeModal,
    isCertificate,
    isClub,
    isContest,
    isExternalActivity,
    isStudy,
    isEtc,
    title,
    isEditMode,
    itemInfo,
    nowType,
  } = useAppSelector((state) => state.roadMap);

  const onChangeTitle = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeTitle(e.target.value));
  }, []);

  const onClickTypeBtn = useCallback(() => {
    dispatch(toggleIsActivityTypeModal());
  }, []);

  const stopPropagation = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  }, []);

  useEffect(() => {
    dispatch(changeTitle(''));
  }, [isCertificate, isClub, isContest, isExternalActivity, isStudy, isEtc]);

  useEffect(() => {
    if (itemInfo) {
      dispatch(changeTitle(itemInfo.title));
    }
  }, [itemInfo]);

  return (
    <Header>
      <TypeBtn
        itemInfo={!!itemInfo}
        onClick={(e) => {
          if (isEditMode && !itemInfo) {
            stopPropagation(e);
            onClickTypeBtn();
          }
        }}
      >
        <img src={`/images/${nowType}.png`} alt={nowType} />
      </TypeBtn>

      <input
        type="text"
        value={title}
        onChange={onChangeTitle}
        spellCheck={false}
        placeholder={'제목을 입력하세요'}
        disabled={!isEditMode}
        required
      />
      {isActivityTypeModal && <ActivityTypeModal />}
    </Header>
  );
};

export default ActivityInputHeader;
