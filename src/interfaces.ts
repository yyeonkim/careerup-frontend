import { AxiosResponse } from 'axios';

// 네이버 로그인에서 사용
export interface IUserLoginInfo {
  token: string;
  email: string;
  name: string;
  profileImg: string;
  nickname?: string;
}

export interface IUserData {
  address: string;
  age: string;
  username: string;
  gender: string;
  interestField1: string;
  interestField2: string;
  interestField3: string;
  job: string;
  link: string;
  major1: string;
  major2: string;
  name: string;
  nickname: string;
  phone: string;
  picture: string;
  univ: string;
}

export interface ILoginData {
  name?: string;
  password: string;
  username: string;
}

export type PostUserLoginFn = (url: string, data: ILoginData) => Promise<AxiosResponse>;

export interface IMyMap {
  mapIdx: number;
  title: string;
}
