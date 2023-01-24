import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ImageListType } from 'react-images-uploading';

import { getAccessToken } from '../../api/user';
import { IItemSequence } from '../../interfaces';

axios.defaults.withCredentials = true;

interface Carrer {
  isModify?: boolean;
  mapIdx?: number;
  itemIdx?: number;
  nowType?: string;
  category?: string;

  title: string;
  subtitle: string;
  period: string;
  acquisition?: string;
  institution?: string;
  each?: string;
  field?: string;
  role?: string;

  content: string;
  realization: string;
  sequence?: number;
  images?: ImageListType;
  files?: Array<{ fileName: string; file: File }>;
}

const jwt = getAccessToken();

export const makeItem = createAsyncThunk('roadMap/makeItem', async (info: Carrer) => {
  try {
    const isModify = info.isModify;
    const idx = info.mapIdx;
    const images = info.images;
    delete info.isModify;
    delete info.mapIdx;
    delete info.images;

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

    //활동 수정
    if (isModify) {
      await axios.patch(`/item/${info.itemIdx}/modify`, info, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });

      return;
    }

    // 활동 등록
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
            Authorization: `Bearer ${jwt}`,
          },
        })
        .catch(() => {
          alert('이미지 등록에 실패하였습니다.');
        });
    }
  } catch (err) {
    alert('활동 등록에 실패하였습니다.');
  }
});

export const addItemImage = createAsyncThunk('roadMap/addItemImage', async (data: { file: File; itemIdx: number }) => {
  try {
    const formData = new FormData();
    formData.append('images', data.file);

    await axios.post(`/item/upload/${data.itemIdx}/picture`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${jwt}`,
      },
    });
  } catch (err) {
    alert('이미지 수정에 실패하였습니다.');
  }
});

export const addItemFile = createAsyncThunk(
  'roadMap/addItemFile',
  async (data: {
    files: {
      fileName: string;
      file: File;
    };
    itemIdx: number;
  }) => {
    try {
      const fileFormData = new FormData();
      fileFormData.append('files', data.files.file);
      fileFormData.append('title', data.files.fileName);

      await axios.post(`/item/upload/${data.itemIdx}/files`, fileFormData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${jwt}`,
        },
      });
    } catch (err) {
      alert('파일 등록에 실패하였습니다.');
    }
  }
);

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

export const changeItems = createAsyncThunk('roadMap/changeItems', async (data: IItemSequence) => {
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

export const getItemInfo = createAsyncThunk('roadMap/getItemInfo', async (itemIdx: number) => {
  try {
    const res = await axios.get(`/item/${itemIdx}/detail`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });

    const fileNum: Array<number> = [];
    const files = res.data.result.files;
    files.forEach((file: { fileIdx: number }) => fileNum.push(file.fileIdx));

    return [res.data.result, itemIdx, fileNum];
  } catch (err) {
    alert('활동 정보 가져오기 실패하였습니다.');
  }
});

export const removeItem = createAsyncThunk('roadMap/removeItem', async (itemIdx: number) => {
  try {
    await axios.delete(`/item/${itemIdx}`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
  } catch (err) {
    alert('삭제에 실패하였습니다.');
  }
});

export const removeFile = createAsyncThunk('/roadMap/removeFile', async (fileIdx: number) => {
  try {
    await axios.delete(`/file/${fileIdx}`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
  } catch (err) {
    alert('파일 삭제에 실패하였습니다.');
  }
});
