import styled from '@emotion/styled';
import { Button } from 'antd';

export const Wrapper = styled.div`
  margin: 0 2rem;
  margin-bottom: 3rem;
  padding-left: 2rem;

  position: relative;

  .ant-upload-list-text {
    background-color: #e8ecef;
    border-radius: 0 2rem 2rem 2rem;

    & > div:first-of-type {
      margin-top: 1.5rem;
    }
    & > div:last-of-type {
      margin-bottom: 1.5rem;
    }
  }

  .upload-list-inline .ant-upload-list-item {
    font-size: 1.5rem;
    margin: 0.3rem 3rem;
    padding: 1.5rem 0;
    border-radius: 0.3rem;

    background-color: white;

    :hover {
      background-color: white;
    }
  }
`;

export const UploadBtn = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 22rem;
  height: 5.9rem;

  border: none;
  border-radius: 2rem;

  background-color: #e8ecef;
  & > span {
    display: flex;
    align-items: center;

    width: 33%;
  }

  & > span:first-of-type {
    width: 28%;
  }

  & > span:nth-last-of-type(2) {
    justify-content: center;

    font-size: 1.6rem;
    font-weight: 500;
  }

  & > span:last-of-type {
    justify-content: center;
  }
`;

export const UploadedBtn = styled(UploadBtn)`
  border-radius: 2rem 2rem 0 0;
`;

export const RemoveBtn = styled.div`
  color: #4d4d4d;
  font-size: 1.4rem;
`;
