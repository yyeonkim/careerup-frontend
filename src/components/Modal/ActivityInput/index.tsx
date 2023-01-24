import React, { ChangeEvent, useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
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
  editMode,
  initData,
  initRemoveFile,
  initRemoveImages,
  onChangeIsFile,
  onCloseAllType,
  readMode,
  toggleIsModal,
} from '../../../redux/reducers/RoadMapSlice';
import ActivityInputHeader from '../ActivityInputBodys/ActivityInputHeader';
import ActivityInputContent from '../ActivityInputBodys/ActivityInputInfo';
import ActivityInputImages from '../ActivityInputBodys/ActivityInputImages';
import ActivityInputUpload from '../ActivityInputBodys/ActivityInputUpload';
import { addItemImage, makeItem, removeFile, removeItem } from '../../../redux/actions/RoadMapAPI';
import { ImageListType } from 'react-images-uploading';
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
    nowTypeKr,
    nowItemIdx,
    removeFiles,
    nowFile,
    removeImages,
  } = useAppSelector((state) => state.roadMap);

  const [images, setImages] = useState<ImageListType>([]);
  const [files, setFiles] = useState<UploadFile[]>([]);
  const [addFiles, setAddFiles] = useState<Array<{ fileName: string; file: File }>>([]);

  const [content, , setContent] = useInput('');
  const [realization, , setRealization] = useInput('');
  const [isImg, setIsImg] = useState(false);

  const onChangeContent = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  }, []);

  const onChangeRealization = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
    setRealization(e.target.value);
  }, []);

  const onTypeActivityModalClose = useCallback(() => {
    dispatch(closeIsActivityTypeModal());
  }, []);

  const toggleIsImg = useCallback(() => {
    setIsImg((prev) => !prev);
  }, [isImg]);

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
          isModify: false,
          mapIdx: 37,
          nowType,
          title,
          each,
          period,
          realization,
          subtitle: projectName,
          acquisition: date,
          institution,
          content,
          sequence: items.length + 1,
          images,
        })
      );
      dispatch(onCloseAllType());
      dispatch(clickEtc());
      dispatch(initData());
    },
    [nowType, title, each, period, realization, projectName, date, institution, content, items, images, addFiles]
  );

  const onClickEdit = useCallback(() => {
    dispatch(editMode());
  }, []);

  const onEditSave = useCallback(() => {
    dispatch(
      makeItem({
        isModify: true,
        itemIdx: nowItemIdx,
        nowType,
        title,
        each,
        period,
        realization,
        subtitle: projectName,
        acquisition: date,
        institution,
        content,
        category: nowTypeKr,
        // images,
        // files,
      })
    );
    dispatch(readMode());

    removeFiles?.forEach((itemIdx) => {
      if (nowFile.indexOf(itemIdx) !== -1) dispatch(removeFile(itemIdx));
    });
    dispatch(initRemoveFile());

    removeImages?.forEach((itemIdx) => {
      dispatch(removeFile(itemIdx));
    });
    dispatch(initRemoveImages);

    images?.forEach((image) => {
      if (image?.file) {
        dispatch(addItemImage({ file: image.file, itemIdx: nowItemIdx }));
      }
    });
  }, [
    nowType,
    title,
    each,
    period,
    realization,
    projectName,
    date,
    institution,
    content,
    nowTypeKr,
    nowItemIdx,
    items,
    removeFiles,
    removeImages,
    images,
  ]);

  const onRemoveItem = useCallback((itemIdx: number) => {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      dispatch(removeItem(itemIdx));
      alert('삭제되었습니다.');
    }
  }, []);

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

  useEffect(() => {
    setContent('');
    setRealization('');
  }, [isCertificate, isClub, isContest, isExternalActivity, isStudy, isEtc]);

  useLayoutEffect(() => {
    if (itemInfo) {
      const image: ImageListType = [];
      const file: UploadFile[] = [];

      itemInfo.files.filter((img, index) => {
        if (img.fileType === '활동사진') {
          image.push({ dataURL: img.fileUrl, fileIdx: img.fileIdx });
        } else
          file.push({
            uid: img.fileIdx.toString(),
            name: index.toString(),
            status: 'done',
            url: img.fileUrl,
          });
      });

      setImages(image);
      setFiles(file);
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
              <span>{itemInfo ? '프로젝트 관련 사진' : '프로젝트 관련 사진을 넣어보세요.'}</span>
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
        <ActivityInputUpload files={files} setFiles={setFiles} addFiles={addFiles} setAddFiles={setAddFiles} />

        <FinishBtns>
          {!itemInfo && (
            <div>
              <button type={'submit'}>저장</button>
              <button type={'button'} onClick={onClickClose}>
                취소
              </button>
            </div>
          )}
          {itemInfo && (
            <div>
              {!isEditMode && (
                <button type={'button'} onClick={onClickEdit}>
                  수정
                </button>
              )}
              {isEditMode && (
                <button type={'button'} onClick={onEditSave}>
                  저장
                </button>
              )}
              <button type={'button'} onClick={() => onRemoveItem(nowItemIdx)}>
                삭제
              </button>
            </div>
          )}
        </FinishBtns>

        <CloseBtn onClick={onClickClose}>X</CloseBtn>
      </Form>
    </Wrapper>
  );
};

export default ActivityInput;
