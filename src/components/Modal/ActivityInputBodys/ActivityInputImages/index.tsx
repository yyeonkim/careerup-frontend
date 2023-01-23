import React, { FC, useCallback, useState } from 'react';
import ImageUploading, { ImageListType, ImageType } from 'react-images-uploading';
import { Img, Images, PlusBtn, RemoveBtn, ImgWrapper } from './styles';
import { useAppSelector } from '../../../../redux/hooks';

interface Props {
  images: ImageListType;
  setImages: (imageList: ImageListType) => void;
}

const ActivityInputImages: FC<Props> = ({ images, setImages }) => {
  const { isEditMode, itemInfo } = useAppSelector((state) => state.roadMap);

  const maxNumber = 4;

  const [temp, setTemp] = useState<any>();

  const onChangeImages = useCallback((imageList: ImageListType) => {
    setImages(imageList);
  }, []);

  const onChangeTemp = useCallback((imageList: ImageListType) => {
    setTemp(imageList);
  }, []);

  {
    /* 조회하고 수정할 때 */
  }
  if (itemInfo && isEditMode)
    return (
      <div>
        <Images>
          {images.map((image: any, index) => (
            <ImgWrapper key={index}>
              <Img src={image} alt={image.dataURL} />
              {/*<div>{<RemoveBtn onClick={() => onImageRemove(index)}>X</RemoveBtn>}</div>*/}
            </ImgWrapper>
          ))}
        </Images>
        <ImageUploading
          multiple
          value={temp}
          onChange={onChangeTemp}
          maxNumber={maxNumber - images.length}
          maxFileSize={20 * 1024 * 1024}
        >
          {({ imageList, onImageUpload, onImageRemove, dragProps }) => (
            <Images>
              {imageList.map((image, index) => (
                <ImgWrapper key={index}>
                  <Img src={image.dataURL} alt={image.dataURL} />
                  <div>
                    <RemoveBtn onClick={() => onImageRemove(index)}>X</RemoveBtn>
                  </div>
                </ImgWrapper>
              ))}
              {maxNumber - images.length > 0 && imageList.length < maxNumber - images.length && (
                <PlusBtn type={'button'} onClick={onImageUpload} {...dragProps}>
                  +1
                </PlusBtn>
              )}
              {images.length < 1 && imageList.length < 1 && (
                <PlusBtn type={'button'} onClick={onImageUpload} {...dragProps}>
                  +2
                </PlusBtn>
              )}
            </Images>
          )}
        </ImageUploading>
      </div>
    );

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
            {/* 처음 등록할 때 */}
            {!itemInfo &&
              isEditMode &&
              imageList.map((image, index) => (
                <ImgWrapper key={index}>
                  <Img src={image.dataURL} alt={image.dataURL} />
                  <div>
                    <RemoveBtn onClick={() => onImageRemove(index)}>X</RemoveBtn>
                  </div>
                </ImgWrapper>
              ))}
            {/* 조회할 때 */}
            {itemInfo &&
              !isEditMode &&
              images.map((image: any | ImageType, index) => (
                <ImgWrapper key={index}>
                  <Img src={image} alt={image.dataURL} />
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
