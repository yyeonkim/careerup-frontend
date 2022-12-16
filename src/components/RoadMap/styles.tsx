import styled from '@emotion/styled';
import RoadMapModal from '../RoadMapModal';

export const RoadMapContainer = styled.div`
  font-size: 2rem;
  width: 100%;

  background-color: #f3fcf7;

  display: grid;
  grid-template-columns: 95fr 6rem;
`;

export const MapWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Map = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 95%;

  margin: 3rem 3rem 0 0;
  background-color: #ffffff;
  border-radius: 5rem;

  padding: 4rem 0;

  .green {
    position: absolute;
  }
`;

export const Road = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  img {
    width: 85rem;
    height: 46.3rem;
    margin: 0 3rem;
  }

  .first,
  .second,
  .third,
  .second2 {
    text-align: center;
    position: relative;
  }

  .third,
  .second2 {
    img {
      width: 76rem;
      height: 29rem;
    }
  }

  .second {
    margin-top: -8.5%;
    margin-left: 6%;

    img {
      width: 79rem;
      height: 29rem;
    }
  }

  .second2 {
    margin-top: -8.8%;
    margin-left: 9%;
  }

  .third {
    margin-top: -8.7%;
    margin-right: 10%;
  }
`;

export const SideBar = styled.div`
  display: flex;
  justify-content: center;

  background-color: #ffffff;
`;

export const AddRoadBtn = styled.button`
  margin-top: 1rem;
  width: 4rem;
  height: 12.3rem;

  border-radius: 4.9rem;
  cursor: pointer;

  color: #29cc6a;
  background-color: #ffffff;
  border: 1px solid #29cc6a;
  font-weight: 700;
  font-size: 1.4rem;
`;

export const AddCircle = styled.div`
  border: 8px solid #85cca3;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #c4c4c4;
  background-color: #ffffff;

  position: absolute;

  margin-top: -1rem;

  width: 9rem;
  height: 9rem;
  font-size: 3.5rem;

  & > img {
    width: 4.5rem;
    height: 4.5rem;
  }

  .plusBtn {
    cursor: pointer;
  }
`;
