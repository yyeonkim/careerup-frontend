import { current } from '@reduxjs/toolkit';
import { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';

import { AddButton, CareerMapList, Map, MapsContainer, Menu, ProfileContainer, ProfileImg, Title } from './style';

export default function CareerMaps() {
  const [careerMaps, setCareerMaps] = useState<number[]>([0, 1, 2]);

  const addCareerMap = () => {
    setCareerMaps((current) => [...current, current.length]);
  };

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
          <AddButton onClick={addCareerMap}>
            <AiOutlinePlus size={24} />
          </AddButton>
        </MapsContainer>
      </CareerMapList>
    </Menu>
  );
}
