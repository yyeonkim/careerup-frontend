import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { GrFormAdd, GrFormClose } from 'react-icons/gr';

import { MapBox, Container, InfoBox, ProfileBox, Message, Button } from './style';
import { IUserData } from '../../interfaces';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setUserData } from '../../redux/reducers/UserDateSlice';
import useGetUserData from '../../hooks/useGetUserData';

const careerMaps = [0, 1, 2];

export default function MyPage() {
  const location = useLocation();
  const history = useHistory();
  const fileInput = useRef<HTMLInputElement>(null);

  useGetUserData(); // DB에서 사용자 정보 불러오기
  const userData = useAppSelector((state) => state.userData.entities);
  const isLoading = useAppSelector((state) => state.userData.loading);
  const dispatch = useAppDispatch();

  const [inputs, setInputs] = useState(userData);
  /*
    input을 redux로 합치기
    수정 정보 저장/취소 잘 되는지 확인
    정보를 통합했으니, memo 사용 고려
  */

  useEffect(() => {
    setInputs(userData);
  }, [isLoading]);

  const onChangeFile = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const filelink = URL.createObjectURL(event.target.files[0]);
      dispatch(setUserData({ ...userData, picture: filelink }));
      // DB 수정
    }
  };

  const onClickImg = () => {
    if (location.hash === '#edit') {
      fileInput.current?.click();
    }
  };

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    const { name: inputName, value } = event.currentTarget;
    setInputs({
      ...inputs,
      [inputName]: value,
    });
  };

  const onClickSave = () => {
    saveData();
    history.push('/mypage');
  };

  const saveData = () => {
    const updatedData = userData;

    Object.assign(updatedData as IUserData, inputs);
    dispatch(setUserData(updatedData));

    // DB 수정
  };

  const onClickCancel = () => {
    resetInput();
    history.push('/mypage');
  };

  const resetInput = () => {
    setInputs(userData);
  };

  const onClickEdit = () => {
    history.push('/mypage#edit');
  };

  return (
    <Container>
      {location.hash === '#edit' && <Message>내용을 클릭하여 수정하세요</Message>}
      <div className="content">
        <div className="content__top">
          <ProfileBox>
            <input ref={fileInput} type="file" name="picture" accept="image/png, image/jpeg" onChange={onChangeFile} />
            <img
              style={{ cursor: location.hash === '#edit' ? 'pointer' : 'unset' }}
              onClick={onClickImg}
              src={userData.picture}
            />
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
                    <input name="name" value={inputs.name} onChange={onChangeInput} />
                    <input name="age" value={inputs.age} onChange={onChangeInput} />
                    <input name="gender" value={inputs.gender} onChange={onChangeInput} />
                    <input name="job" value={inputs.job} onChange={onChangeInput} />
                    <input name="address" value={inputs.address} onChange={onChangeInput} />
                  </>
                ) : (
                  <>
                    <p>{userData?.name}</p>
                    <p>{userData?.age}</p>
                    <p>{userData?.gender}</p>
                    <p>{userData?.job}</p>
                    <p>{userData?.address}</p>
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
                      🏫 <input name="univ" value={inputs.univ} onChange={onChangeInput} />
                    </p>
                    <p>
                      📚 <input name="major" value={inputs.major} onChange={onChangeInput} />
                    </p>
                    <p>
                      관심 분야: <input name="interestField" value={inputs.interestField} onChange={onChangeInput} />
                    </p>
                  </>
                ) : (
                  <>
                    <p>🏫 {userData?.univ}</p>
                    <p>📚 {userData?.major}</p>
                    <p>관심 분야: {userData?.interestField}</p>
                  </>
                )}
              </InfoBox>
              <InfoBox>
                {location.hash === '#edit' ? (
                  <>
                    <p>
                      📞 <input name="phone" value={inputs.phone} onChange={onChangeInput} />
                    </p>
                    <p>
                      ✉️ <input name="email" value={inputs.email} onChange={onChangeInput} />
                    </p>
                    <p>
                      📄 <input name="link" value={inputs.link} onChange={onChangeInput} />
                    </p>
                  </>
                ) : (
                  <>
                    <p>📞 {userData?.phone}</p>
                    <p>✉️ {userData?.email}</p>
                    <p>📄 {userData?.link}</p>
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
            <Button onClick={onClickEdit}>프로필 수정</Button>
          )}
        </div>
      </div>
    </Container>
  );
}
