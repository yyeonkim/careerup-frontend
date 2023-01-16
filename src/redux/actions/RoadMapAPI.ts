import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ImageListType } from 'react-images-uploading';
import { UploadFile } from 'antd';
axios.defaults.withCredentials = true;

interface Carrer {
  mapIdx?: number;

  nowType?: string;
  mainTitle?: string;

  title: string;
  period: string;
  acquisition?: string;
  institution?: string;
  each?: string;
  field?: string;
  role?: string;

  content: string;
  realization: string;
  sequence: number;
  images?: ImageListType;
  files?: UploadFile[];
}

const jwt = localStorage.getItem('accessToken');

export const makeItem = createAsyncThunk('roadMap/makeItem', async (info: Carrer) => {
  try {
    const idx = info.mapIdx;
    const images = info.images;
    const files = info.files;
    delete info.mapIdx;
    delete info.images;
    delete info.files;

    const type = info.nowType;
    if (type === 'certificate') {
      delete info.institution;
      delete info.each;
    } else if (type === 'contest' || type === 'external-activity') {
      delete info.acquisition;
    } else {
      delete info.acquisition;
      delete info.institution;
    }
    if (type !== 'certificate') {
      if (type === 'etc' || type === 'club') {
        info['role'] = info.each;
      } else {
        info['field'] = info.each;
      }
      delete info.each;
    }

    delete info.nowType;
    delete info.mainTitle;

    // 내용
    const url = `/item/${type}?mapIdx=${idx}`;
    const res: { data: { result: { itemIdx: number } } } = await axios.post(url, info, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });

    const itemIdx = res.data.result.itemIdx;
    // 이미지
    const imageFormData = new FormData();
    if (images?.[0]) {
      images.forEach((image) => {
        imageFormData.append('images', image.file as File);
      });

      await axios
        .post(`/item/upload/${itemIdx}/picture`, imageFormData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        })
        .catch((err) => {
          alert('이미지 등록에 실패하였습니다.');
        });
    }

    // 파일
    const fileFormData = new FormData();
    if (files?.[0]) {
      files.forEach((file) => {
        fileFormData.append('files', file.originFileObj as File);
      });

      await axios
        .post(`/item/upload/${itemIdx}/files`, fileFormData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        })
        .catch((err) => alert('파일 등록에 실패하였습니다.'));
    }
  } catch (err) {
    alert('활동 등록에 실패하였습니다.');
  }
});

export const getItems = createAsyncThunk('roadMap/getItems', async (mapIdx: number) => {
  try {
    const res = await axios.get(`/map/${mapIdx}`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });

    return res.data.result.itemList;
  } catch (err) {
    alert('실패');
  }
});

export const chageItems = createAsyncThunk('roadMap/changeItems', async (data: any) => {
  try {
    await axios.patch(`/item/${data.mapIdx}`, data.list, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
  } catch (err) {
    alert('실패');
  }
});

export const getItemInfo = createAsyncThunk('roadMap/getItemInfo', async (idx: number) => {
  try {
    const res = await axios.get(`/item/${idx}/detail`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });

    return res.data.result;
  } catch (err) {
    alert('활동 정보 가져오기 실패하였습니다.');
  }
});
