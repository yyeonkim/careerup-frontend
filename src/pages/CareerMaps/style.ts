import styled from '@emotion/styled';

export const CareerMapsWrapper = styled.div`
  display: flex;
`;

export const Menu = styled.div`
  padding: 2rem;

  min-width: 41.7rem;
  min-height: 100vh;
  background-color: #f3fcf7;
`;

export const Profile = styled.div`
  width: 36.8rem;
  height: 24.8rem;
  background-color: #29cc6a;
  border-radius: 4rem;
  margin-bottom: 3rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InfoWrapper = styled.div`
  width: 90%;
  height: 80%;
`;

export const ProfileTop = styled.div`
  display: flex;
  justify-content: space-around;

  & > img {
    width: 12.8rem;
    height: 12.8rem;
    border-radius: 50%;
  }

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: #ffffff;

    height: 12.8rem;
    border-radius: 2rem;
  }

  & > div:first-of-type {
    width: 6.4rem;
    font-size: 2rem;
  }

  & > div:last-of-type {
    width: 8rem;
    font-size: 1.8rem;
  }
`;

export const ProfileBottom = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  margin-top: 2rem;

  & > div {
    height: 4rem;
    border-radius: 1rem;
    background-color: #ffffff;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  & > div:first-of-type {
    width: 12.8rem;
    font-size: 2rem;
  }

  & > div:last-of-type {
    width: 16rem;
    font-size: 1.8rem;
  }
`;

export const Activity = styled.div<{ orderEdit: boolean }>`
  width: 36.8rem;
  height: 50.8rem;
  border-radius: 4rem;
  //background-color: #ffffff;
  background-color: ${(props) => (props.orderEdit ? '#A8A8A8' : '#ffffff')};
  box-shadow: 0px 4px 10px rgba(105, 105, 105, 0.1);

  padding: 3rem;

  & > div:first-of-type {
    font-weight: 700;
    font-size: 2.4rem;

    margin-bottom: 1rem;
    padding-bottom: 1rem;

    border-bottom: ${(props) => (props.orderEdit ? '1px solid #C9C9C9' : '1px solid #f6f6f6')};
  }
`;

export const ActivityContent = styled.div<{ orderEdit: boolean }>`
  width: 32.4rem;
  height: 34rem;

  overflow-y: auto;

  & > div {
    width: 30.4rem;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 1.5rem;
    font-size: 1.8rem;
    font-weight: 500;
    margin-bottom: 1.6rem;

    color: #696969;
    background-color: ${(props) => (props.orderEdit ? '#FFFFFF' : '#f2f2f2')};
    border-radius: 1rem;

    & > span {
      font-size: 2.3rem;
      cursor: pointer;
    }
  }
`;

export const EditBtn = styled.div`
  display: flex;
  justify-content: flex-end;

  & > button {
    width: 8.8rem;
    height: 3rem;
    border-radius: 1rem;
    border: none;
    cursor: pointer;
    color: #696969;
    margin-top: 3rem;
  }

  .save,
  .cancel {
    width: 6.2rem;
    margin-left: 1.5rem;
    font-size: 1.4rem;
  }

  .save {
    background-color: #ffffff;
  }
`;
