import { Dispatch, FC, SetStateAction, useCallback, useLayoutEffect, useState } from 'react';
import { Upload, UploadFile } from 'antd';
import { UploadChangeParam } from 'antd/es/upload';

import { RemoveBtn, UploadBtn, UploadedBtn, Wrapper } from './styles';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';
import { addRemoveFile, onChangeIsFile } from '../../../../redux/reducers/RoadMapSlice';
import { RcFile } from 'antd/lib/upload/interface';

const plusIcon = (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="10" cy="10" r="9.5" fill="white" stroke="#DFDFDF" />
    <path d="M10 5V15" stroke="#939393" strokeWidth="2" strokeLinecap="round" />
    <path d="M15 10L5 10" stroke="#939393" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

interface Props {
  files: UploadFile[];
  setFiles: Dispatch<SetStateAction<UploadFile[]>>;
  addFiles: Array<{ fileName: string; file: File }>;
  setAddFiles: Dispatch<SetStateAction<{ fileName: string; file: File }[]>>;
}

const ActivityInputUpload: FC<Props> = ({ files, setFiles, addFiles, setAddFiles }) => {
  const dispatch = useAppDispatch();
  const { isFile, itemInfo, isEditMode } = useAppSelector((state) => state.roadMap);

  const [addFileFlag, setAddFileFlag] = useState(false);

  const checkIsFile = useCallback(
    (e: UploadChangeParam<UploadFile<unknown>>) => {
      const n = e.fileList.length;
      if (n === 0) dispatch(onChangeIsFile(false));
      else dispatch(onChangeIsFile(true));
    },
    [isFile]
  );

  const onChangeFiles = useCallback((e: UploadChangeParam) => {
    setFiles(e.fileList);
  }, []);

  const onAddFile = useCallback(
    (fileName: string, file: RcFile) => {
      setAddFiles([...addFiles, { fileName, file }]);
    },
    [addFiles]
  );

  const onRemoveFile = useCallback((fileIdx: number) => {
    dispatch(addRemoveFile(fileIdx));
  }, []);

  useLayoutEffect(() => {
    if (files?.[0]) dispatch(onChangeIsFile(true));
  }, [files]);

  return (
    <Wrapper>
      <Upload
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        fileList={[...files]}
        showUploadList={{
          showRemoveIcon: isEditMode,
          removeIcon: <RemoveBtn>X</RemoveBtn>,
        }}
        maxCount={3}
        className="upload-list-inline"
        multiple={true}
        onChange={(e) => {
          checkIsFile(e);
          onChangeFiles(e);
          if (e.file.percent === 100) {
            setAddFileFlag(!addFileFlag);
            if (addFileFlag) onAddFile(e.file.name, e.file.originFileObj as RcFile);
          }
        }}
        onRemove={(file) => {
          onRemoveFile(parseInt(file.uid));
        }}
        disabled={!isEditMode}
      >
        {isFile ? (
          <UploadedBtn>
            <span />
            <span className={'exist'}>{itemInfo && !isEditMode ? '파일' : '파일추가'}</span>
            <span>{plusIcon}</span>
          </UploadedBtn>
        ) : (
          <UploadBtn>
            <span />
            <span>{itemInfo && !isEditMode ? '파일' : '파일추가'}</span>
            <span>{plusIcon}</span>
          </UploadBtn>
        )}
      </Upload>
    </Wrapper>
  );
};

export default ActivityInputUpload;
