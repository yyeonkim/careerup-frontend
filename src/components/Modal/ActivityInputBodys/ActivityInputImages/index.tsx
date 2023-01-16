import React, { FC, useCallback } from 'react';
import ImageUploading, { ImageListType } from 'react-images-uploading';
import { Img, Images, PlusBtn, RemoveBtn, ImgWrapper } from './styles';
import { useAppSelector } from '../../../../redux/hooks';

interface Props {
  images: ImageListType;
  setImages: (imageList: ImageListType) => void;
}

const ActivityInputImages: FC<Props> = ({ images, setImages }) => {
  const { itemInfo, isEditMode } = useAppSelector((state) => state.roadMap);

  const maxNumber = 4;

  const onChangeImages = useCallback((imageList: ImageListType) => {
    setImages(imageList);
  }, []);

  return (
    <div>
      <ImageUploading
        multiple
        value={images}
        onChange={onChangeImages}
        maxNumber={maxNumber}
        maxFileSize={20 * 1024 * 1024}
      >
        {({ imageList, onImageUpload, onImageRemove, dragProps }) => (
          <Images>
            {isEditMode &&
              imageList.map((image, index) => (
                <ImgWrapper key={index}>
                  <Img src={image.dataURL} alt={image.dataURL} />
                  <div>
                    <RemoveBtn onClick={() => onImageRemove(index)}>X</RemoveBtn>
                  </div>
                </ImgWrapper>
              ))}
            {!isEditMode &&
              images.map((image: any, index) => (
                <ImgWrapper key={index}>
                  <Img src={image} alt={image.dataURL} />
                  <div>{isEditMode && <RemoveBtn onClick={() => onImageRemove(index)}>X</RemoveBtn>}</div>
                </ImgWrapper>
              ))}
            {maxNumber > images.length && isEditMode && (
              <PlusBtn type={'button'} onClick={onImageUpload} {...dragProps}>
                +
              </PlusBtn>
            )}
            {images.length < 1 && isEditMode && (
              <PlusBtn type={'button'} onClick={onImageUpload} {...dragProps}>
                +
              </PlusBtn>
            )}
          </Images>
        )}
      </ImageUploading>
    </div>
  );
};

export default ActivityInputImages;
