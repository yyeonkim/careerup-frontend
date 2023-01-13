import React, { useCallback, useState } from 'react';
import ImageUploading, { ImageListType } from 'react-images-uploading';
import { Img, Images, PlusBtn, RemoveBtn, ImgWrapper } from './styles';
import axios from 'axios';

const ActivityInputImages = () => {
  const [images, setImages] = useState<any>([]);
  const maxNumber = 4;

  const onChange = (imageList: ImageListType) => {
    setImages(imageList as never[]);
  };
  // const onChange = (e: any) => {
  //   setImages(e.target.files);
  // };

  // const [files, setFiles] = useState<any>();
  // const encodeFileToBase64 = (fileBlob: Blob) => {
  //   const reader: any = new FileReader();
  //
  //   reader.readAsDataURL(fileBlob);
  //
  //   return new Promise<void>((resolve) => {
  //     reader.onload = () => {
  //       if (reader.result) setImageSrc(reader.result);
  //
  //       resolve();
  //     };
  //   });
  // };
  //
  // const onLoadFile = (e: any) => {
  //   const file = e.target.files;
  //   setFiles(file);
  //
  //   encodeFileToBase64(e.target.files[0]);
  // };
  const a = useCallback(() => {
    const images = new FormData();

    [].forEach.call(images, (image) => {
      images.append('images', image);
    });

    axios
      .post('/item/upload/43/picture', images, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      })
      .then((res) => {
        console.log(res);
        alert('성공');
      })
      .catch((err) => {
        alert('실패');
      });
  }, []);

  return (
    <div>
      <ImageUploading multiple value={images} onChange={onChange} maxNumber={maxNumber} maxFileSize={100000}>
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
      <button onClick={a}>클릭</button>
    </div>
  );
};

export default ActivityInputImages;
