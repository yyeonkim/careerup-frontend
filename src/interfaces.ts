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
  email: string;
  gender: string;
  interestField: string;
  job: string;
  link: string;
  major: string;
  name: string;
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
