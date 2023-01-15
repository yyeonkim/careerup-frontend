import styled from '@emotion/styled';

export const Container = styled.div`
  position: relative;
  background-color: ${(props) => props.theme.colors.background};
  height: calc(100vh - 8rem); // header 높이 제외

  display: flex;
  justify-content: center;

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    max-width: 144rem;
    width: 100%;
    height: 100%;

    .content__top {
      display: flex;
      max-height: 61.8rem;
      width: 100%;
      height: 100%;

      .content__right {
        width: 100%;

        .content__info {
          display: flex;
          align-items: center;
          justify-content: space-between;

          height: 100%;
          width: 100%;
          max-height: 20rem;
        }
      }
    }

    .content__bottom {
      margin-top: 2rem;
      padding-right: 1.6rem;
      width: 100%;
      display: flex;
      justify-content: flex-end;
      gap: 1.6rem;
    }
  }
`;

export const Message = styled.span`
  position: absolute;
  z-index: 100;
  top: 5rem;
  font-size: 1.8rem;
  color: ${(props) => props.theme.colors.primary};
`;

const Wrapper = styled.div`
  background-color: white;
  box-shadow: 0px 4px 15px rgba(172, 172, 172, 0.15);
  max-width: 44.8rem;
  margin: 0 1.6rem;
`;

export const ProfileBox = styled(Wrapper)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
  border-radius: 3rem;

  input {
    display: none;
  }

  img {
    width: 25rem;
    height: 25rem;
    border-radius: 50%;
  }

  .profile__info {
    margin-top: 5.2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;

export const InfoBox = styled(Wrapper)`
  font-weight: 500;
  font-size: 2rem;
  border-radius: 2rem;
  padding-left: 3.2rem;

  max-width: 44.8rem;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3.2rem;

  p {
    display: flex;
    align-items: center;
  }

  input {
    display: block;
    height: 2rem;
    font-weight: 500;
    font-size: 2rem;
    border: none;
    border-bottom: 1px solid gray;
    ::placeholder {
      color: #bebebe;
    }
  }
`;

export const MapBox = styled(Wrapper)`
  margin-top: 3.2rem;
  font-size: 2.4rem;
  font-weight: bold;
  padding: 4.8rem;
  border-radius: 4rem;

  max-width: 92.8rem;
  max-height: 38.6rem;
  height: 100%;

  .map__header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 4.4rem;

    .add-button {
      cursor: pointer;
    }
  }

  .map__main {
    display: flex;

    .message {
      margin-top: 5rem;
      width: 100%;
      text-align: center;
      color: #bebebe;
    }
  }
`;

export const Modal = styled.div`
  width: 68rem;
  height: 36.5rem;
  border-radius: 2rem;
  background-color: white;

  display: flex;
  justify-content: center;

  // 가운데 정렬
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -60%);

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    textarea,
    input {
      border: none;
      width: 60rem;
      border: 1px solid #e6e6e6;
      border-radius: 2rem;
      padding: 2rem;
      font-size: 2rem;
      margin-bottom: 2rem;

      ::placeholder {
        color: #afafaf;
      }
    }

    input {
      height: 6rem;
    }

    textarea {
      resize: none;
      height: 13rem;
    }

    .button-field {
      display: flex;
      align-items: center;
      gap: 3rem;
    }
  }
`;

export const ModalButton = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  color: white;
  border-radius: 5rem;
  padding: 1rem 3rem;
  font-size: 2rem;
`;

export const Button = styled.div`
  width: fit-content;
  background-color: ${(props) => props.theme.colors.primary};
  text-align: center;
  color: white;
  font-size: 1.8rem;
  font-weight: bold;
  padding: 1rem 2rem;
  border-radius: 2rem;
  cursor: pointer;
`;
