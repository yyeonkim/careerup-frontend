// 네이버 로그인에서 사용
export interface IUserLoginInfo {
  token: string;
  email: string;
  name: string;
  profileImg: string;
  nickname?: string;
}

export interface IUserProfile {
  picture: string;
  name: string;
  age: string;
  gender: string;
  job: string;
  address: string;
}

export interface IUserInfo {
  school: string;
  major: string;
  interest: string;
  phone: string;
  email: string;
  url: string;
}

export interface ILoginData {
  name?: string;
  password: string;
  username: string;
}
