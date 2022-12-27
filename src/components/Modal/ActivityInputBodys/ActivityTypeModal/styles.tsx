import styled from '@emotion/styled';

export const ActivityType = styled.div`
  position: absolute;
  top: 4.5rem;
  left: 6rem;

  & > div {
    position: relative;
  }

  & > div > img {
    width: 40.9rem;
  }
`;

export const Types = styled.div`
  display: flex;
  position: absolute;
  top: 0.7rem;
  left: 2rem;

  font-size: 1.2rem;
  font-weight: 500;
  color: #ffffff;

  & > div {
    cursor: pointer;
    margin-right: 2.5rem;

    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const TypeImg = styled.div`
  width: 4.2rem;
  height: 4.2rem;
  border-radius: 50%;
  background-color: #ffffff;
  margin-bottom: 0.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  & > img {
    width: 50%;
  }
`;
