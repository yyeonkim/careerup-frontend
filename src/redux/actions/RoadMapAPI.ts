import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAccessToken } from '../../api/user';
axios.defaults.withCredentials = true;

interface Carrer {
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
}

const jwt = getAccessToken();

export const makeItem = createAsyncThunk('roadMap/makeItem', async (info: Carrer) => {
  try {
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

    // console.log(info);

    const url = `/item/${type}?mapIdx=${37}`;
    await axios.post(url, info, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
  } catch (err) {
    alert('실패');
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

export const chageItems = createAsyncThunk('roadMap/chageItems', async (data: any) => {
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
