import React, { useCallback, useEffect, useState } from 'react';
import { Upload, UploadFile } from 'antd';
import { RemoveBtn, UploadBtn, UploadedBtn, Wrapper } from './styles';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';
import { onChangeIsFile } from '../../../../redux/reducers/RoadMapSlice';

const plusIcon = (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="10" cy="10" r="9.5" fill="white" stroke="#DFDFDF" />
    <path d="M10 5V15" stroke="#939393" strokeWidth="2" strokeLinecap="round" />
    <path d="M15 10L5 10" stroke="#939393" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const ActivityInputUpload = () => {
  const dispatch = useAppDispatch();
  const { isFile } = useAppSelector((state) => state.roadMap);

  const fileList: UploadFile[] = [
    // {
    //   uid: '0',
    //   name: 'xxx.png',
    //   status: 'uploading',
    //   percent: 33,
    // },
    // {
    //   uid: '-3',
    //   name: 'yyy.png',
    //   status: 'done',
    //   url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    //   thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    // },
    // {
    //   uid: '-1',
    //   name: 'yyy.png',
    //   status: 'done',
    //   url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    //   thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    // },
    // {
    //   uid: '-4',
    //   name: 'yyy.png',
    //   status: 'done',
    //   url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    //   thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    // },
    // {
    //   uid: '-2',
    //   name: 'zzz.png',
    //   status: 'error',
    // },
  ];

  const checkIsFile = useCallback(
    (e: any) => {
      const n = e.fileList.length;
      if (n === 0) dispatch(onChangeIsFile(false));
      else dispatch(onChangeIsFile(true));
    },
    [isFile]
  );

  return (
    <Wrapper>
      <Upload
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        defaultFileList={[...fileList]}
        showUploadList={{
          showRemoveIcon: true,
          removeIcon: <RemoveBtn>X</RemoveBtn>,
        }}
        maxCount={3}
        className="upload-list-inline"
        multiple={true}
        onChange={(e) => {
          checkIsFile(e);
        }}
      >
        {isFile ? (
          <UploadedBtn>
            <span />
            <span>파일추가</span>
            <span>{plusIcon}</span>
          </UploadedBtn>
        ) : (
          <UploadBtn>
            <span />
            <span>파일추가</span>
            <span>{plusIcon}</span>
          </UploadBtn>
        )}
      </Upload>
    </Wrapper>
  );
};

export default ActivityInputUpload;
