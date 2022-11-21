import styled from '@emotion/styled';

export const RoadMapContainer = styled.div`
  font-size: 2rem;
  width: 100%;

  background-color: #eeeeee;

  display: grid;
  grid-template-columns: 95fr minmax(60px, 5fr);
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

  margin: 5rem 5rem;
  background-color: #ffffff;
  border-radius: 5rem;

  padding: 6rem 0;

  & > img {
    width: 80%;
  }
`;

export const FirstRoad = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .first,
  .second,
  .third,
  .second2 {
    text-align: center;

    & img {
      width: 80%;
      height: 95%;
    }
  }

  .second {
    margin-top: -8.21%;
    margin-left: 6.1%;

    img {
      width: 78%;
    }
  }

  .second2 {
    margin-top: -7.6%;
    margin-left: 6.1%;

    img {
      width: 78%;
    }
  }

  .third {
    margin-top: -7.5%;
    margin-right: 6%;

    img {
      width: 78%;
    }
  }
`;

export const SideBar = styled.div`
  display: flex;
  justify-content: center;

  background-color: #b8b8b8;
`;

export const AddRoadBtn = styled.button`
  margin-top: 5rem;
  width: 4rem;
  height: 12.3rem;

  border: none;
  border-radius: 5rem;

  color: #b8b8b8;
  background-color: #ffffff;
  font-weight: bold;
`;

export const AddRound = styled.div`
  border: 8px solid #85cca3;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 4rem;
  color: #c4c4c4;
  background-color: #ffffff;

  width: 10%;
  height: 10%;

  position: absolute;
  z-index: 999;
  top: 43px;
`;
