import React, { ChangeEvent, useCallback, useEffect, useRef, useState } from 'react';
import {
  Wrapper,
  Line,
  Content,
  Title,
  TextArea,
  Form,
  ProjectImage,
  Review,
  InputImgWrapper,
  FinishBtns,
  CloseBtn,
} from './styles';
import useInput from '../../../hooks/useInput';
import autosize from 'autosize';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import 'react-datepicker/dist/react-datepicker.css';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { closeIsActivityTypeModal, onChangeIsFile, toggleIsModal } from '../../../redux/reducers/RoadMapSlice';
import ActivityInputHeader from '../ActivityInputBodys/ActivityInputHeader';
import ActivityInputContent from '../ActivityInputBodys/ActivityInputInfo';
import ActivityInputImages from '../ActivityInputBodys/ActivityInputImages';
import ActivityInputUpload from '../ActivityInputBodys/ActivityInputUpload';

const ActivityInput = () => {
  const dispatch = useAppDispatch();
  const { isCertificate, isClub, isContest, isActivity, isStudy, isEtc } = useAppSelector((state) => state.roadMap);

  const [content, , setContent] = useInput('');
  const [review, , setReview] = useInput('');
  const [isImg, setIsImg] = useState(false);

  const onChangeContent = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  }, []);

  const onChangeReview = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
    setReview(e.target.value);
  }, []);

  const onClickClose = useCallback(() => {
    dispatch(toggleIsModal());
    dispatch(onChangeIsFile(false));
  }, []);

  const onTypeActivityModalClose = useCallback(() => {
    dispatch(closeIsActivityTypeModal());
  }, []);

  const toggleIsImg = useCallback(() => {
    setIsImg((prev) => !prev);
  }, [isImg]);

  useEffect(() => {
    setContent('');
    setReview('');
  }, [isCertificate, isClub, isContest, isActivity, isStudy, isEtc]);

  const contentTextareaRef = useRef<HTMLTextAreaElement>(null);
  const reviewTextareaRef = useRef<HTMLTextAreaElement>(null);
  useEffect(() => {
    if (contentTextareaRef) {
      autosize(contentTextareaRef.current as HTMLTextAreaElement);
    }
    if (reviewTextareaRef) {
      autosize(reviewTextareaRef.current as HTMLTextAreaElement);
    }
  }, []);

  const reviewTitleList = ['과정에서', '동아리를 하면서', '스터디를 하면서', '활동을 하면서'];
  const [reviewTitle, setReviewTitle] = useState('');
  useEffect(() => {
    if (isCertificate) setReviewTitle(reviewTitleList[0]);
    else if (isClub) setReviewTitle(reviewTitleList[1]);
    else if (isStudy) setReviewTitle(reviewTitleList[2]);
    else setReviewTitle(reviewTitleList[3]);
  }, [isCertificate, isClub, isContest, isActivity, isStudy, isEtc]);

  return (
    <Wrapper>
      <Form onClick={onTypeActivityModalClose}>
        <ActivityInputHeader />
        <Line>
          <div />
        </Line>
        <ActivityInputContent />
        <Line>
          <div />
        </Line>
        <Content>
          <div>
            <Title>{isCertificate ? '취득 과정' : '활동 내용'}</Title>
            <div>
              <TextArea
                value={content}
                onChange={onChangeContent}
                ref={contentTextareaRef}
                placeholder={`${isCertificate ? '취득 과정' : '활동 내용'}을 입력해주세요.`}
                spellCheck={false}
                required
              />
            </div>
          </div>
          <div>
            <ProjectImage isImg={isImg} onClick={toggleIsImg}>
              <span>프로젝트 관련 사진을 넣어보세요.</span>
              <span>{isImg ? <FiChevronUp /> : <FiChevronDown />}</span>
            </ProjectImage>
            {isImg && (
              <InputImgWrapper>
                <ActivityInputImages />
              </InputImgWrapper>
            )}
          </div>
        </Content>
        <Line>
          <div />
        </Line>
        <Review>
          <Title>{reviewTitle} 배운점/느낀점</Title>
          <div>
            <TextArea
              value={review}
              onChange={onChangeReview}
              ref={reviewTextareaRef}
              placeholder={'배운점/느낀점을 입력해주세요.'}
              spellCheck={false}
              required
            />
          </div>
        </Review>
        <Line>
          <div />
        </Line>
        <ActivityInputUpload />

        <FinishBtns>
          <button type={'submit'}>저장</button>
          <button onClick={onClickClose}>삭제</button>
        </FinishBtns>

        <CloseBtn onClick={onClickClose}>X</CloseBtn>
      </Form>
    </Wrapper>
  );
};

export default ActivityInput;
