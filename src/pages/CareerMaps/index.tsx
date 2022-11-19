import { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';

import {
  AddButton,
  ButtonContainer,
  CancelButton,
  CareerMapList,
  Map,
  MapsContainer,
  Menu,
  ProfileContainer,
  ProfileImg,
  SaveButton,
  Title,
  CareerMapsWrapper,
} from './style';
import RoadMap from '../../components/RoadMap';

export default function CareerMaps() {
  const [careerMaps, setCareerMaps] = useState<number[]>([0, 1, 2]);

  const addCareerMap = () => {
    setCareerMaps((current) => [...current, current.length]);
  };

  return (
    <CareerMapsWrapper>
      <Menu>
        <ProfileContainer>
          <ProfileImg src="https://notioly.com/wp-content/uploads/2022/11/181.Nodes_.png" />
          <ButtonContainer>
            <SaveButton>저장</SaveButton>
            <CancelButton>취소</CancelButton>
          </ButtonContainer>
        </ProfileContainer>

        <CareerMapList>
          <Title>내 커리어 맵</Title>
          <MapsContainer>
            {careerMaps.map(() => (
              <Map></Map>
            ))}
            <AddButton onClick={addCareerMap}>
              <AiOutlinePlus size={24} />
            </AddButton>
          </MapsContainer>
        </CareerMapList>
      </Menu>
      <RoadMap />
    </CareerMapsWrapper>
  );
}
