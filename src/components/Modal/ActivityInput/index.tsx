import React, { ChangeEvent, useCallback, useEffect, useRef, useState } from 'react';
import {
  Wrapper,
  Line,
  Content,
  Title,
  TextArea,
  Form,
  ProjectImage,
  Realization,
  InputImgWrapper,
  FinishBtns,
  CloseBtn,
} from './styles';
import useInput from '../../../hooks/useInput';
import autosize from 'autosize';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import 'react-datepicker/dist/react-datepicker.css';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import {
  clickEtc,
  closeIsActivityTypeModal,
  initData,
  onChangeIsFile,
  onCloseAllType,
  toggleIsModal,
} from '../../../redux/reducers/RoadMapSlice';
import ActivityInputHeader from '../ActivityInputBodys/ActivityInputHeader';
import ActivityInputContent from '../ActivityInputBodys/ActivityInputInfo';
import ActivityInputImages from '../ActivityInputBodys/ActivityInputImages';
import ActivityInputUpload from '../ActivityInputBodys/ActivityInputUpload';
import { makeItem } from '../../../redux/actions/RoadMapAPI';
import { ImageListType, ImageType } from 'react-images-uploading';
import { UploadFile } from 'antd';

const ActivityInput = () => {
  const dispatch = useAppDispatch();
  const {
    isCertificate,
    isClub,
    isContest,
    isExternalActivity,
    isStudy,
    isEtc,
    title,
    nowType,
    projectName,
    institution,
    each,
    period,
    date,
    items,
    isEditMode,
    itemInfo,
  } = useAppSelector((state) => state.roadMap);

  const [images, setImages] = useState<ImageListType>([]);
  const [files, setFiles] = useState<UploadFile[]>([]);

  const [content, , setContent] = useInput('');
  const [realization, , setRealization] = useInput('');
  const [isImg, setIsImg] = useState(false);

  const onChangeContent = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  }, []);

  const onChangeRealization = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
    setRealization(e.target.value);
  }, []);

  const onClickClose = useCallback(() => {
    dispatch(toggleIsModal());
    dispatch(onChangeIsFile(false));
    dispatch(onCloseAllType());
    dispatch(clickEtc());
    dispatch(initData());
  }, []);

  const onSubmit = useCallback(
    (e: React.MouseEvent<HTMLFormElement>) => {
      e.preventDefault();

      dispatch(
        makeItem({
          mapIdx: 37,
          nowType,
          mainTitle: title,
          each,
          period,
          realization,
          title: projectName,
          acquisition: date,
          institution,
          content,
          sequence: items.length + 1,
          images,
          files,
        })
      );
      dispatch(onCloseAllType());
      dispatch(clickEtc());
      dispatch(initData());
    },
    [nowType, title, each, period, realization, projectName, date, institution, content, items, images, files]
  );

  const onTypeActivityModalClose = useCallback(() => {
    dispatch(closeIsActivityTypeModal());
  }, []);

  const toggleIsImg = useCallback(() => {
    setIsImg((prev) => !prev);
  }, [isImg]);

  useEffect(() => {
    setContent('');
    setRealization('');
  }, [isCertificate, isClub, isContest, isExternalActivity, isStudy, isEtc]);

  useEffect(() => {
    if (itemInfo) {
      const image: any = [];
      const file: UploadFile[] = [];

      itemInfo.files.filter((img, index) => {
        if (img.fileType === '활동사진') image.push(img.fileUrl);
        else
          file.push({
            uid: index.toString(),
            name: index.toString(),
            status: 'done',
            url: img.fileUrl,
            thumbUrl: img.fileUrl,
          });
      });

      setImages(image);
      setFiles(file);
    }
  }, [itemInfo]);

  const contentTextareaRef = useRef<HTMLTextAreaElement>(null);
  const realizationTextareaRef = useRef<HTMLTextAreaElement>(null);
  useEffect(() => {
    if (contentTextareaRef) {
      autosize(contentTextareaRef.current as HTMLTextAreaElement);
    }
    if (realizationTextareaRef) {
      autosize(realizationTextareaRef.current as HTMLTextAreaElement);
    }
  }, []);

  const realizationTitleList = ['과정에서', '동아리를 하면서', '스터디를 하면서', '활동을 하면서'];
  const [realizationTitle, setRealizationTitle] = useState('');
  useEffect(() => {
    if (isCertificate) setRealizationTitle(realizationTitleList[0]);
    else if (isClub) setRealizationTitle(realizationTitleList[1]);
    else if (isStudy) setRealizationTitle(realizationTitleList[2]);
    else setRealizationTitle(realizationTitleList[3]);
  }, [isCertificate, isClub, isContest, isExternalActivity, isStudy, isEtc]);

  useEffect(() => {
    if (itemInfo) {
      setRealization(itemInfo.realization);
      setContent(itemInfo.content);
    }
  }, [itemInfo]);

  return (
    <Wrapper>
      <Form onClick={onTypeActivityModalClose} onSubmit={onSubmit}>
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
                disabled={!isEditMode}
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
                <ActivityInputImages images={images} setImages={setImages} />
              </InputImgWrapper>
            )}
          </div>
        </Content>
        <Line>
          <div />
        </Line>
        <Realization>
          <Title>{realizationTitle} 배운점/느낀점</Title>
          <div>
            <TextArea
              value={realization}
              onChange={onChangeRealization}
              ref={realizationTextareaRef}
              placeholder={'배운점/느낀점을 입력해주세요.'}
              spellCheck={false}
              disabled={!isEditMode}
              required
            />
          </div>
        </Realization>
        <Line>
          <div />
        </Line>
        <ActivityInputUpload files={files} setFiles={setFiles} />

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
