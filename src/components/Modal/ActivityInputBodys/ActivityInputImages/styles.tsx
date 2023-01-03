import styled from '@emotion/styled';
import { Upload } from 'antd';
import ImgCrop from 'antd-img-crop';

export const Images = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  place-items: center;

  padding-top: 1.5rem;
`;

export const ImgWrapper = styled.div`
  position: relative;
`;

export const PlusBtn = styled.button`
  width: 17rem;
  height: 17rem;
  border-radius: 2rem;

  font-size: 5rem;
  color: white;
  margin-bottom: 1.5rem;
`;

export const Img = styled.img`
  width: 17rem;
  height: 17rem;
  border-radius: 2rem;

  border: 1px solid #ececec;
  margin-bottom: 1.5rem;
`;

export const RemoveBtn = styled.div`
  position: absolute;
  top: 0.8rem;
  right: 1rem;

  cursor: pointer;
`;
