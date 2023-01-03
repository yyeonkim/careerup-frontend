import { ChangeEvent, useRef, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { GrFormAdd, GrFormClose } from 'react-icons/gr';

import { MapBox, Container, InfoBox, ProfileBox, Message, Button } from './style';
import { IUserInfo, IUserProfile } from '../../interfaces';

// API 문서 확정되면 수정하기
const careerMaps = [0, 1, 2];

export default function MyPage() {
  const location = useLocation();
  const history = useHistory();
  const fileInput = useRef<HTMLInputElement>(null);

  // DB에서 가져온 사용자 정보
  const [userProfile, setUserProfile] = useState<IUserProfile>({
    picture: require('../../assets/profile.jpg'),
    name: '조만능',
    age: '23',
    gender: '여',
    job: '대학생',
    address: '서울특별시',
  });

  const [userInfo, setUserInfo] = useState<IUserInfo>({
    school: '만능대학교',
    major: '컴퓨터공학과',
    interest: '웹 프론트엔드',
    phone: '010-0000-0000',
    email: 'manneung.dev@gmail.com',
    url: 'www.manneugn.com',
  });

  // input value
  const [picture, setPicture] = useState<typeof userProfile.picture>(userProfile.picture);
  const [name, setName] = useState<typeof userProfile.name>(userProfile.name);
  const [age, setAge] = useState<typeof userProfile.age>(userProfile.age);
  const [gender, setGender] = useState<typeof userProfile.gender>(userProfile.gender);
  const [job, setJob] = useState<typeof userProfile.job>(userProfile.job);
  const [address, setAddress] = useState<typeof userProfile.address>(userProfile.address);

  const [school, setSchool] = useState<typeof userInfo.school>(userInfo.school);
  const [major, setMajor] = useState<typeof userInfo.major>(userInfo.major);
  const [interest, setInterest] = useState<typeof userInfo.interest>(userInfo.interest);
  const [phone, setPhone] = useState<typeof userInfo.phone>(userInfo.phone);
  const [email, setEmail] = useState<typeof userInfo.email>(userInfo.email);
  const [url, setUrl] = useState<typeof userInfo.url>(userInfo.url);

  const onChangeFile = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const fileUrl = URL.createObjectURL(event.target.files[0]);
      setPicture(fileUrl);
    }
  };

  const onClickImg = () => {
    if (location.hash === '#edit') {
      fileInput.current?.click();
    }
  };

  const onChangeProfile = (event: ChangeEvent<HTMLInputElement>) => {
    const inputName = event.currentTarget.name as keyof IUserProfile;
    const value = event.currentTarget.value;

    if (inputName === 'name') {
      setName(value);
    }
    if (inputName === 'age') {
      setAge(value);
    }
    if (inputName === 'gender') {
      setGender(value);
    }
    if (inputName === 'job') {
      setJob(value);
    }
    if (inputName === 'address') {
      setAddress(value);
    }
  };

  const onChangeInfo = (event: ChangeEvent<HTMLInputElement>) => {
    const inputName = event.currentTarget.name as keyof IUserInfo;
    const value = event.currentTarget.value;

    if (inputName === 'school') {
      setSchool(value);
    }
    if (inputName === 'major') {
      setMajor(value);
    }
    if (inputName === 'interest') {
      setInterest(value);
    }
    if (inputName === 'phone') {
      setPhone(value);
    }
    if (inputName === 'email') {
      setEmail(value);
    }
    if (inputName === 'url') {
      setUrl(value);
    }
  };

  const onClickSave = () => {
    saveData();
    history.push('/mypage');
  };

  const saveData = () => {
    const updatedProfile = userProfile;
    const updatedInfo = userInfo;

    Object.assign(updatedProfile, { picture, name, age, gender, job, address });
    Object.assign(updatedInfo, { school, major, interest, phone, email, url });
    setUserProfile(updatedProfile);
    setUserInfo(updatedInfo);

    // DB 수정
  };

  const onClickCancel = () => {
    resetInput();
    history.push('/mypage');
  };

  const resetInput = () => {
    setPicture(userProfile.picture);
    setName(userProfile.name);
    setAge(userProfile.age);
    setGender(userProfile.gender);
    setJob(userProfile.job);
    setAddress(userProfile.address);
    setSchool(userInfo.school);
    setMajor(userInfo.major);
    setInterest(userInfo.interest);
    setPhone(userInfo.phone);
    setEmail(userInfo.email);
    setUrl(userInfo.url);
  };

  const edit = () => {
    history.push('/mypage#edit');
  };

  return (
    <Container>
      {location.hash === '#edit' && <Message>내용을 클릭하여 수정하세요</Message>}
      <div className="content">
        <div className="content__top">
          <ProfileBox>
            <input ref={fileInput} type="file" name="picture" accept="image/png, image/jpeg" onChange={onChangeFile} />
            <img onClick={onClickImg} src={picture} />
            <div className="profile__info">
              <div>
                <p>이름</p>
                <p>나이</p>
                <p>성별</p>
                <p>직업</p>
                <p>거주</p>
              </div>
              <div>
                {location.hash === '#edit' ? (
                  <>
                    <input name="name" value={name} onChange={onChangeProfile} />
                    <input name="age" value={age} onChange={onChangeProfile} />
                    <input name="gender" value={gender} onChange={onChangeProfile} />
                    <input name="job" value={job} onChange={onChangeProfile} />
                    <input name="address" value={address} onChange={onChangeProfile} />
                  </>
                ) : (
                  <>
                    <p>{userProfile.name}</p>
                    <p>{userProfile.age}</p>
                    <p>{userProfile.gender}</p>
                    <p>{userProfile.job}</p>
                    <p>{userProfile.address}</p>
                  </>
                )}
              </div>
            </div>
          </ProfileBox>

          <div className="content__right">
            <div className="content__info">
              <InfoBox>
                {location.hash === '#edit' ? (
                  <>
                    <p>
                      🏫 <input name="school" value={school} onChange={onChangeInfo} />
                    </p>
                    <p>
                      📚 <input name="major" value={major} onChange={onChangeInfo} />
                    </p>
                    <p>
                      관심 분야: <input name="interest" value={interest} onChange={onChangeInfo} />
                    </p>
                  </>
                ) : (
                  <>
                    <p>🏫 {userInfo.school}</p>
                    <p>📚 {userInfo.major}</p>
                    <p>관심 분야: {userInfo.interest}</p>
                  </>
                )}
              </InfoBox>
              <InfoBox>
                {location.hash === '#edit' ? (
                  <>
                    <p>
                      📞 <input name="phone" value={phone} onChange={onChangeInfo} />
                    </p>
                    <p>
                      ✉️ <input name="email" value={email} onChange={onChangeInfo} />
                    </p>
                    <p>
                      📄 <input name="url" value={url} onChange={onChangeInfo} />
                    </p>
                  </>
                ) : (
                  <>
                    <p>📞 {userInfo.phone}</p>
                    <p>✉️ {userInfo.email}</p>
                    <p>📄 {userInfo.url}</p>
                  </>
                )}
              </InfoBox>
            </div>

            <MapBox>
              <h3>내 커리어 맵</h3>
              <div>
                {careerMaps.map((item) => (
                  <div key={item} className="map">
                    {location.hash === '#edit' && (
                      <GrFormClose
                        onClick={() => {
                          confirm('맵을 삭제하겠습니까?');
                        }}
                        color="#FF3D3D"
                      />
                    )}
                  </div>
                ))}
                <div className="map button">
                  <GrFormAdd size="3.2rem" />
                </div>
              </div>
            </MapBox>
          </div>
        </div>

        <div className="content__bottom">
          {location.hash === '#edit' ? (
            <>
              <Button onClick={onClickSave}>저장</Button>
              <Button onClick={onClickCancel}>취소</Button>
            </>
          ) : (
            <Button onClick={edit}>프로필 수정</Button>
          )}
        </div>
      </div>
    </Container>
  );
}
