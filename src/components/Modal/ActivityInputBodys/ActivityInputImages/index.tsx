import React, { useState } from 'react';
import ImageUploading, { ImageListType } from 'react-images-uploading';
import { Img, Images, PlusBtn, RemoveBtn, ImgWrapper } from './styles';

const ActivityInputImages = () => {
  const [images, setImages] = useState([]);
  const maxNumber = 4;

  const onChange = (imageList: ImageListType, addUpdateIndex: number[] | undefined) => {
    setImages(imageList as never[]);
  };

  return (
    <div>
      <ImageUploading multiple value={images} onChange={onChange} maxNumber={maxNumber} maxFileSize={20000}>
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
            {maxNumber > images.length && (
              <PlusBtn type={'button'} onClick={onImageUpload} {...dragProps}>
                +
              </PlusBtn>
            )}
            {images.length < 1 && (
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
