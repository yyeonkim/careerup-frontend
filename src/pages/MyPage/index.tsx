import { ChangeEvent, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { GrFormAdd, GrFormClose } from 'react-icons/gr';

import { MapBox, Container, InfoBox, ProfileBox, Message, Button } from './style';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { patchUserData, setUserData } from '../../redux/reducers/UserSlice';
import useGetUserData from '../../hooks/useGetUserData';
import useGetInputs from '../../hooks/useGetInputs';
import useSetIsEdit from '../../hooks/useSetIsEdit';
import ProfileContent from '../../components/ProfileContent';
import InfoContent from '../../components/InfoContent';

const careerMaps = [0, 1, 2];

export default function MyPage() {
  const history = useHistory();
  const fileInput = useRef<HTMLInputElement>(null);

  useGetUserData(); // DB에서 사용자 정보 불러오기
  const isLoading = useAppSelector((state) => state.user.loading);
  const userData = useAppSelector((state) => state.user.entities);
  const dispatch = useAppDispatch();

  const { isEdit } = useSetIsEdit();
  const { inputs, setInputs } = useGetInputs();

  const onClickImg = () => {
    if (isEdit) {
      fileInput.current?.click();
    }
  };

  const onChangeFile = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const filelink = URL.createObjectURL(event.target.files[0]);
      setInputs({ ...inputs, picture: filelink });
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
    dispatch(setUserData(inputs));
    dispatch(patchUserData(inputs));
  };

  const onClickCancel = () => {
    resetInputs();
    history.push('/mypage');
  };

  const resetInputs = () => {
    setInputs(userData);
  };

  const onClickEdit = () => {
    history.push('/mypage#edit');
  };

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <Container>
      {isEdit && <Message>내용을 클릭하여 수정하세요</Message>}
      <div className="content">
        <div className="content__top">
          <ProfileBox>
            <input ref={fileInput} type="file" name="picture" accept="image/png, image/jpeg" onChange={onChangeFile} />
            <img style={{ cursor: isEdit ? 'pointer' : 'unset' }} onClick={onClickImg} src={inputs.picture} />
            <div className="profile__info">
              <ProfileContent
                label="이름"
                value={userData?.name}
                inputName="name"
                inputValue={inputs.name}
                onChange={onChangeInput}
              />
              <ProfileContent
                label="나이"
                value={userData?.age}
                inputName="age"
                inputValue={inputs.age}
                onChange={onChangeInput}
              />
              <ProfileContent
                label="성별"
                value={userData?.gender}
                inputName="gender"
                inputValue={inputs.gender}
                onChange={onChangeInput}
              />
              <ProfileContent
                label="직업"
                value={userData?.job}
                inputName="job"
                inputValue={inputs.job}
                onChange={onChangeInput}
              />
              <ProfileContent
                label="주소"
                value={userData?.address}
                inputName="address"
                inputValue={inputs.address}
                onChange={onChangeInput}
              />
            </div>
          </ProfileBox>

          <div className="content__right">
            <div className="content__info">
              <InfoBox>
                <InfoContent
                  label="🏫"
                  value={userData?.univ}
                  inputName="univ"
                  placeholder="학력을 입력하세요."
                  inputValue={inputs.univ}
                  onChange={onChangeInput}
                />
                <InfoContent
                  label="📚"
                  value={userData?.major1}
                  inputName="major1"
                  placeholder="전공을 입력하세요."
                  inputValue={inputs.major1}
                  onChange={onChangeInput}
                />
                <InfoContent
                  label="💚"
                  value={userData?.interestField1}
                  inputName="interestField1"
                  placeholder="관심분야을 입력하세요."
                  inputValue={inputs.interestField1}
                  onChange={onChangeInput}
                />
              </InfoBox>
              <InfoBox>
                <InfoContent
                  label="📞"
                  value={userData?.phone}
                  inputName="phone"
                  placeholder="전화번호를 입력하세요."
                  inputValue={inputs.phone}
                  onChange={onChangeInput}
                />
                <InfoContent
                  label="✉️"
                  value={userData?.username}
                  inputName="username"
                  placeholder="이메일을 입력하세요."
                  inputValue={inputs.username}
                  onChange={onChangeInput}
                />
                <InfoContent
                  label="🔗"
                  value={userData?.link}
                  inputName="link"
                  placeholder="관련 링크를 달아보세요."
                  inputValue={inputs.link}
                  onChange={onChangeInput}
                />
              </InfoBox>
            </div>

            <MapBox>
              <h3>내 커리어 맵</h3>
              <div>
                {careerMaps.map((item) => (
                  <div key={item} className="map">
                    {isEdit && (
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
          {isEdit ? (
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
