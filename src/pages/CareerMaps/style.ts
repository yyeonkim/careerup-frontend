import styled from '@emotion/styled';

export const CareerMapsWrapper = styled.div`
  display: flex;
`;

export const Menu = styled.div`
  padding: 2rem;
  padding-top: 4rem;

  min-width: 34rem;
  min-height: 100vh;
  background-color: gray;
`;

// Profile
export const ProfileContainer = styled.div`
  padding-bottom: 4rem;

  display: flex;
  justify-content: space-between;
`;

export const ButtonContainer = styled.div``;

export const ProfileImg = styled.img`
  width: 14rem;
  border-radius: 50%;
`;

export const SaveButton = styled.button`
  margin-left: 1rem;
  width: 5rem;
  height: 2.5rem;

  border: none;
  border-radius: 2rem;
  font-weight: bold;
  cursor: pointer;
`;

export const CancelButton = styled(SaveButton)``;

// My career maps
export const CareerMapList = styled.div`
  padding: 2rem;
  padding-bottom: 0;

  border-radius: 2rem;
  background-color: lightgray;
`;

export const Title = styled.div`
  margin-bottom: 2rem;

  font-size: 1.6rem;
  font-weight: bold;
`;

export const MapsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const Map = styled.div`
  margin-bottom: 2rem;

  width: 12rem;
  height: 15rem;
  border-radius: 2rem;
  background-color: gray;
`;

export const AddButton = styled(Map)`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;
