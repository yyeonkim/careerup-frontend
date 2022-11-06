import { useState } from 'react';
import { CareerMapList, Map, MapsContainer, Menu, ProfileContainer, ProfileImg, Title } from './style';

export default function CareerMaps() {
  const [careerMaps, setCareerMaps] = useState<number[]>([0, 1, 2]);

  return (
    <Menu>
      <ProfileContainer>
        <ProfileImg src="https://notioly.com/wp-content/uploads/2022/11/181.Nodes_.png" />
      </ProfileContainer>
      <CareerMapList>
        <Title>내 커리어 맵</Title>
        <MapsContainer>
          {careerMaps.map((item) => (
            <Map></Map>
          ))}
        </MapsContainer>
      </CareerMapList>
    </Menu>
  );
}
