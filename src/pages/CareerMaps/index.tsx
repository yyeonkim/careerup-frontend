import {
  Menu,
  CareerMapsWrapper,
  Profile,
  InfoWrapper,
  ProfileTop,
  ProfileBottom,
  Activity,
  ActivityContent,
  EditBtn,
} from './style';
import RoadMap from '../../components/RoadMap';

export default function CareerMaps() {
  return (
    <CareerMapsWrapper>
      <Menu>
        <Profile>
          <InfoWrapper>
            <ProfileTop>
              <img
                src="https://img.danawa.com/prod_img/500000/017/350/img/13350017_1.jpg?shrink=330:330&_v=20210224095944"
                alt=""
              />
              <div>
                <span>이름</span>
                <span>나이</span>
                <span>직업</span>
              </div>
              <div>
                <span>신짱구</span>
                <span>23세</span>
                <span>대학생</span>
              </div>
            </ProfileTop>
            <ProfileBottom>
              <div>희망 커리어</div>
              <div>프론트엔드 개발자</div>
            </ProfileBottom>
          </InfoWrapper>
        </Profile>

        <Activity>
          <div>
            <span>활동</span>
          </div>
          <ActivityContent>
            <div>잇타 동아리</div>
            <div>자격증</div>
            <div>자격증</div>
            <div>자격증</div>
            <div>자격증</div>
            <div>자격증</div>
            <div>자격증</div>
          </ActivityContent>
          <EditBtn>
            <button>순서 편집</button>
          </EditBtn>
        </Activity>
      </Menu>
      <RoadMap />
    </CareerMapsWrapper>
  );
}
