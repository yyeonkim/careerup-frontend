import { ChangeEvent, FormEvent, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { IoIosAddCircleOutline } from 'react-icons/io';

import { MapBox, Container, InfoBox, ProfileBox, Message, Button, Modal, ModalButton } from './style';
import { theme } from '../../style/theme';
import useUserInputs from '../../hooks/useUserInputs';
import useSetIsEdit from '../../hooks/useSetIsEdit';
import ProfileContent from '../../components/ProfileContent';
import InfoContent from '../../components/InfoContent';
import Background from '../../components/Modal/Background';
import MapCard from '../../components/MapCard';
import { IMapInputs, INewMap } from '../../interfaces';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setUserData } from '../../redux/reducers/UserSlice';
import { setMyMap } from '../../redux/reducers/MyMapSlice';
import { close } from '../../redux/reducers/DropdownSlice';
import { createMap } from '../../api/myMap';
import { modifyUserData } from '../../api/user';
import useGetData from '../../hooks/useGetData';
import { getUserData, patchPicture } from '../../redux/actions/UserAPI';
import { getMyMap } from '../../redux/actions/MyMapAPI';

function MyPage() {
  const history = useHistory();
  const fileInput = useRef<HTMLInputElement>(null);

  const [isOpen, setIsOpen] = useState(false);
  const { isEdit } = useSetIsEdit();
  const { inputs, setInputs, resetInputs, onChange } = useUserInputs();
  const [picture, setPicture] = useState<File | null>(null);
  const [mapInputs, setMapInputs] = useState<IMapInputs>({ title: '', career: '' });

  useGetData(getUserData); // 사용자 정보 불러오기
  useGetData(getMyMap); // 커리어 맵 불러오기
  const isLoading = useAppSelector((state) => state.user.loading);
  const userData = useAppSelector((state) => state.user.entities);
  const myMaps = useAppSelector((state) => state.myMap.entities);
  const dispatch = useAppDispatch();

  const onClickImg = () => {
    if (isEdit) {
      fileInput.current?.click();
    }
  };

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    // 프로필 사진 미리보기
    if (files) {
      const file = files[0];
      const filelink = URL.createObjectURL(file);
      setInputs({ ...inputs, picture: filelink });
      setPicture(file);
    }
  };

  const onClickSave = () => {
    saveData();
    history.push('/mypage');
  };

  const saveData = () => {
    dispatch(setUserData(inputs));
    modifyUserData(inputs);
    // 프로필 사진을 바꿔을 때만 실행 (null이 아닐 때)
    if (picture) {
      dispatch(patchPicture(picture as File));
    }
  };

  const cancelEdit = () => {
    resetInputs();
    history.push('/mypage');
  };

  const goEditMode = () => {
    history.push('/mypage#edit');
  };

  const goToAddMap = () => {
    const ok = confirm('수정을 취소할까요? 값이 저장되지 않습니다.');
    if (ok) {
      cancelEdit();
      openModal();
    }
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const cancelEditModal = () => {
    const ok = confirm('작성을 취소할까요?');
    if (ok) {
      setIsOpen(false);
      resetMapInputs();
    }
  };

  const onSubmitMap = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newMap = { title: mapInputs.title, career: mapInputs.career };
    const response = await createMap(newMap);

    if (response.status === 200) {
      const mapIdx = response.data.result.mapIdx;
      addIdxToMap(mapIdx, newMap);
      resetMapInputs();
      history.push(`/career-maps/${mapIdx}`);
    }
  };

  const addIdxToMap = (mapIdx: number, newMap: INewMap) => {
    dispatch(setMyMap([...myMaps, { mapIdx, ...newMap }]));
  };

  const resetMapInputs = () => {
    setMapInputs({ title: '', career: '' });
  };

  const onChangeMap = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.currentTarget;
    setMapInputs({ ...mapInputs, [name]: value });
  };

  const closeDropdown = () => {
    dispatch(close());
  };

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <Container onClick={closeDropdown}>
      {isEdit && <Message>내용을 클릭하여 수정하세요</Message>}
      <div className="content">
        <div className="content__top">
          <ProfileBox>
            <input ref={fileInput} type="file" name="picture" accept="image/png, image/jpeg" onChange={onChangeFile} />
            <img
              style={{ cursor: isEdit ? 'pointer' : 'unset' }}
              onClick={onClickImg}
              src={isEdit ? inputs.picture : userData.picture}
            />
            <div className="profile__info">
              <ProfileContent
                label="이름"
                value={userData.name}
                inputName="name"
                inputValue={inputs.name}
                onChange={onChange}
              />
              <ProfileContent
                label="나이"
                value={userData.age}
                inputName="age"
                inputValue={inputs.age}
                onChange={onChange}
              />
              <ProfileContent
                label="성별"
                value={userData.gender}
                inputName="gender"
                inputValue={inputs.gender}
                onChange={onChange}
              />
              <ProfileContent
                label="직업"
                value={userData.job}
                inputName="job"
                inputValue={inputs.job}
                onChange={onChange}
              />
              <ProfileContent
                label="주소"
                value={userData.address}
                inputName="address"
                inputValue={inputs.address}
                onChange={onChange}
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
                  onChange={onChange}
                />
                <InfoContent
                  label="📚"
                  value={userData.major1}
                  inputName="major1"
                  placeholder="전공을 입력하세요."
                  inputValue={inputs.major1}
                  onChange={onChange}
                />
                <InfoContent
                  label="💚"
                  value={userData.interestField1}
                  inputName="interestField1"
                  placeholder="관심분야을 입력하세요."
                  inputValue={inputs.interestField1}
                  onChange={onChange}
                />
              </InfoBox>
              <InfoBox>
                <InfoContent
                  label="📞"
                  value={userData.phone}
                  inputName="phone"
                  placeholder="전화번호를 입력하세요."
                  inputValue={inputs.phone}
                  onChange={onChange}
                />
                <InfoContent
                  label="✉️"
                  value={userData.username}
                  inputName="username"
                  placeholder="이메일을 입력하세요."
                  inputValue={inputs.username}
                  onChange={onChange}
                />
                <InfoContent
                  label="🔗"
                  value={userData.link}
                  inputName="link"
                  placeholder="링크를 달아보세요."
                  inputValue={inputs.link}
                  onChange={onChange}
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
                  myMaps.map((item) => <MapCard key={item.mapIdx} {...item} />)
                )}

                {isOpen && (
                  <>
                    <Background />
                    <Modal>
                      <form onSubmit={onSubmitMap}>
                        <input
                          required={true}
                          maxLength={30}
                          type="text"
                          name="title"
                          value={mapInputs.title}
                          onChange={onChangeMap}
                          placeholder="커리어맵 제목을 입력하세요."
                        />
                        <textarea
                          required={true}
                          maxLength={30}
                          name="career"
                          value={mapInputs.career}
                          onChange={onChangeMap}
                          placeholder="희망 커리어를 입력하세요.&#10;ex) 프론트엔드 개발자"
                        />
                        <div className="button-field">
                          <ModalButton>확인</ModalButton>
                          <ModalButton onClick={cancelEditModal}>취소</ModalButton>
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
              <Button onClick={cancelEdit}>취소</Button>
            </>
          ) : (
            <Button onClick={goEditMode}>프로필 수정</Button>
          )}
        </div>
      </div>
    </Container>
  );
}

export default MyPage;
