import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
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

export interface Map {
  data: {
    result: Array<{ maxIdx: number; title: string }>;
  };
}

const jwt = '';

export const makeMap = createAsyncThunk('roadMap/makeMap', async (info: Carrer) => {
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

    const map = await axios.post(
      '/map',
      { career: info.nowType, title: info.mainTitle },
      {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      }
    );

    const mapidx = map.data.result.mapIdx;
    delete info.nowType;
    delete info.mainTitle;

    const url = `/item/${type}?mapIdx=${mapidx}`;
    const addMap = await axios.post(url, info, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
  } catch (err) {
    alert('실패');
  }
});

export const getMaps = createAsyncThunk('roadMap/getMaps', async () => {
  try {
    const data: Map = await axios.get('/map/my-map', {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });

    return data.data.result;
  } catch (err) {
    alert('실패');
  }
});
