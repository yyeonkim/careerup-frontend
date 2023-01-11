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

  h3 {
    margin-bottom: 4.4rem;
  }

  div {
    display: flex;

    .map {
      display: flex;
      justify-content: center;
      width: 17rem;
      height: 17rem;
      border-radius: 50%;
      border: 2px solid #29cc6a;
      background-color: lightgray;
      margin-right: 3.2rem;
      cursor: pointer;
      padding-top: 1rem;
    }

    .button {
      border: none;

      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

export const Modal = styled.div`
  width: 40rem;
  height: 30rem;
  border-radius: 2rem;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;

  // 가운데 정렬
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -60%);
`;

export const Button = styled.div`
  width: fit-content;
  background-color: #bababa;
  text-align: center;
  color: white;
  font-size: 1.8rem;
  font-weight: bold;
  padding: 1rem 2rem;
  border-radius: 2rem;
  cursor: pointer;
`;
