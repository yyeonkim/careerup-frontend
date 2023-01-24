import { FC, useCallback } from 'react';
import ImageUploading, { ImageListType, ImageType } from 'react-images-uploading';
import { Img, Images, PlusBtn, RemoveBtn, ImgWrapper } from './styles';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';
import { removeImagesPush } from '../../../../redux/reducers/RoadMapSlice';

interface Props {
  images: ImageListType;
  setImages: (imageList: ImageListType) => void;
}

const ActivityInputImages: FC<Props> = ({ images, setImages }) => {
  const dispatch = useAppDispatch();
  const { isEditMode, itemInfo } = useAppSelector((state) => state.roadMap);

  const maxNumber = 4;

  const onChangeImages = useCallback((imageList: ImageListType) => {
    setImages(imageList);
  }, []);

  const onRemoveImage = useCallback((data: ImageType) => {
    if (!data?.file) dispatch(removeImagesPush(data.fileIdx));
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
              images.map((image: ImageType, index) => (
                <ImgWrapper key={index}>
                  <Img src={image.dataURL} alt={image.dataURL} />
                  {isEditMode && (
                    <div>
                      <RemoveBtn
                        onClick={() => {
                          onImageRemove(index);
                          onRemoveImage(image);
                        }}
                      >
                        X
                      </RemoveBtn>
                    </div>
                  )}
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
