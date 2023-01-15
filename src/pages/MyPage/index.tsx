import { ChangeEvent, FormEvent, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { IoIosAddCircleOutline } from 'react-icons/io';
import axios from 'axios';

import { MapBox, Container, InfoBox, ProfileBox, Message, Button, Modal, ModalButton } from './style';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { patchUserData, setUserData } from '../../redux/reducers/UserSlice';
import useGetUserData from '../../hooks/useGetUserData';
import useGetInputs from '../../hooks/useGetInputs';
import useSetIsEdit from '../../hooks/useSetIsEdit';
import useGetMyMaps from '../../hooks/useGetMyMaps';
import ProfileContent from '../../components/ProfileContent';
import InfoContent from '../../components/InfoContent';
import Background from '../../components/Modal/Background';
import { theme } from '../../style/theme';

interface IMapInputs {
  title: string;
  career: string;
}

const accessToken = localStorage.getItem('accessToken');

export default function MyPage() {
  const history = useHistory();
  const fileInput = useRef<HTMLInputElement>(null);

  const [isOpen, setIsOpen] = useState(false);
  const { isEdit } = useSetIsEdit();
  const { inputs, setInputs } = useGetInputs();
  const { myMaps, setMyMaps } = useGetMyMaps();
  const [mapInputs, setMapInputs] = useState<IMapInputs>({ title: '', career: '' });

  useGetUserData(); // DB에서 사용자 정보 불러오기
  const isLoading = useAppSelector((state) => state.user.loading);
  const userData = useAppSelector((state) => state.user.entities);
  const dispatch = useAppDispatch();

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

  const goEditMode = () => {
    history.push('/mypage#edit');
  };

  const goToAddMap = () => {
    const ok = confirm('수정을 취소할까요? 값이 저장되지 않습니다.');
    if (ok) {
      onClickCancel();
      openModal();
    }
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const onClickCancelModal = () => {
    const ok = confirm('취소하시겠습니까?');
    if (ok) {
      setIsOpen(false);
      resetMapInputs();
    }
  };

  const resetMapInputs = () => {
    setMapInputs({ title: '', career: '' });
  };

  const onSubmitMap = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const response = await axios.post(
      '/map',
      { title: mapInputs.title, career: mapInputs.career },
      { headers: { Authorization: `Bearer ${accessToken}` } }
    );
    console.log(response);

    if (response.status === 200) {
      const mapIdx = response.data.result.mapIdx;
      setMyMaps([...myMaps, { mapIdx, title: mapInputs.title, career: mapInputs.career }]);
      resetMapInputs();
      history.push(`/career-maps/${mapIdx}`);
    }
  };

  const onChangeMapInputs = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.currentTarget;
    setMapInputs({ ...mapInputs, [name]: value });
  };

  const onClickMap = (mapIdx: number) => {
    console.log(mapIdx);
    history.push(`/career-maps/${mapIdx}`);
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
                value={userData.name}
                inputName="name"
                inputValue={inputs.name}
                onChange={onChangeInput}
              />
              <ProfileContent
                label="나이"
                value={userData.age}
                inputName="age"
                inputValue={inputs.age}
                onChange={onChangeInput}
              />
              <ProfileContent
                label="성별"
                value={userData.gender}
                inputName="gender"
                inputValue={inputs.gender}
                onChange={onChangeInput}
              />
              <ProfileContent
                label="직업"
                value={userData.job}
                inputName="job"
                inputValue={inputs.job}
                onChange={onChangeInput}
              />
              <ProfileContent
                label="주소"
                value={userData.address}
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
                  value={userData.univ}
                  inputName="univ"
                  placeholder="학력을 입력하세요."
                  inputValue={inputs.univ}
                  onChange={onChangeInput}
                />
                <InfoContent
                  label="📚"
                  value={userData.major1}
                  inputName="major1"
                  placeholder="전공을 입력하세요."
                  inputValue={inputs.major1}
                  onChange={onChangeInput}
                />
                <InfoContent
                  label="💚"
                  value={userData.interestField1}
                  inputName="interestField1"
                  placeholder="관심분야을 입력하세요."
                  inputValue={inputs.interestField1}
                  onChange={onChangeInput}
                />
              </InfoBox>
              <InfoBox>
                <InfoContent
                  label="📞"
                  value={userData.phone}
                  inputName="phone"
                  placeholder="전화번호를 입력하세요."
                  inputValue={inputs.phone}
                  onChange={onChangeInput}
                />
                <InfoContent
                  label="✉️"
                  value={userData.username}
                  inputName="username"
                  placeholder="이메일을 입력하세요."
                  inputValue={inputs.username}
                  onChange={onChangeInput}
                />
                <InfoContent
                  label="🔗"
                  value={userData.link}
                  inputName="link"
                  placeholder="관련 링크를 달아보세요."
                  inputValue={inputs.link}
                  onChange={onChangeInput}
                />
              </InfoBox>
            </div>

            <MapBox>
              <div className="map__header">
                <h3>내 커리어 맵</h3>
                <div className="add-button" onClick={isEdit ? goToAddMap : openModal}>
                  <IoIosAddCircleOutline color={theme.colors.primary} size="4rem" />
                </div>
              </div>

              <div className="map__main">
                {myMaps.length === 0 ? (
                  <span className="message">커리어 맵을 만들어보세요</span>
                ) : (
                  myMaps.map(({ career, title, mapIdx }) => (
                    <div className="map-card" onClick={() => onClickMap(mapIdx)}>
                      <span>{title}</span>
                      <span>{career}</span>
                    </div>
                  ))
                )}

                {isOpen && (
                  <>
                    <Background />
                    <Modal>
                      <form onSubmit={onSubmitMap}>
                        <input
                          type="text"
                          name="title"
                          value={mapInputs.title}
                          onChange={onChangeMapInputs}
                          placeholder="커리어맵 제목을 입력하세요."
                        />
                        <textarea
                          name="career"
                          value={mapInputs.career}
                          onChange={onChangeMapInputs}
                          placeholder="희망 커리어를 입력하세요.&#10;ex) 프론트엔드 개발자"
                        />
                        <div className="button-field">
                          <ModalButton>확인</ModalButton>
                          <ModalButton onClick={onClickCancelModal}>취소</ModalButton>
                        </div>
                      </form>
                    </Modal>
                  </>
                )}
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
            <Button onClick={goEditMode}>프로필 수정</Button>
          )}
        </div>
      </div>
    </Container>
  );
}
