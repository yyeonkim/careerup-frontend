import { useHistory, useLocation } from 'react-router-dom';
import { GrFormAdd } from 'react-icons/gr';

import MyPageBtn from '../../components/Buttons/MyPageBtn';
import { MapBox, Container, InfoBox, ProfileBox, Message } from './style';

export default function MyPage() {
  const location = useLocation();
  const history = useHistory();

  const edit = () => {
    history.push('/mypage#edit');
    // 수정 가능한 input으로 바꾸기
  };

  const save = () => {
    // 편집 내용 저장
    history.push('/mypage');
  };

  const cancel = () => {
    // 편집 내용 취소
    history.push('/mypage');
  };

  return (
    <Container>
      {location.hash === '#edit' && <Message>내용을 클릭하여 수정하세요</Message>}
      <div className="content">
        <div className="content__top">
          <ProfileBox>
            <img src={require('../../assets/profile.jpg')} />
            <div className="info">
              <div>
                <p>이름</p>
                <p>나이</p>
                <p>성별</p>
                <p>직업</p>
                <p>거주</p>
              </div>
              <div>
                <p>조만능</p>
                <p>23</p>
                <p>여</p>
                <p>대학생</p>
                <p>서울특별시</p>
              </div>
            </div>
          </ProfileBox>

          <div className="content__right">
            <div className="content__info">
              <InfoBox>
                <p>🏫 000 대학교</p>
                <p>📚 0000학과</p>
                <p>관심 분야: 프론트엔드개발</p>
              </InfoBox>
              <InfoBox>
                <p>📞 010 - 0000 - 0000</p>
                <p>✉️ aaaaaaaaaa@gmail.com</p>
                <p>📄 www.naver.com</p>
              </InfoBox>
            </div>
            <MapBox>
              <h3>내 커리어 맵</h3>
              <div>
                <div className="map"></div>
                <div className="map"></div>
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
              <MyPageBtn text="저장" onClick={save} />
              <MyPageBtn text="취소" onClick={cancel} />
            </>
          ) : (
            <MyPageBtn text="프로필 수정" onClick={edit} />
          )}
        </div>
      </div>
    </Container>
  );
}
