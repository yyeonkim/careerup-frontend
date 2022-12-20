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
      width: 100%;
      display: flex;
      justify-content: flex-end;
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

  img {
    width: 25rem;
    border-radius: 50%;
    margin-bottom: 5.2rem;
  }

  .info {
    display: flex;
    align-items: center;

    div:first-of-type {
      font-weight: 100;
      margin-right: 3.4rem;
      min-width: 4.5rem;

      p {
        font-size: 2.4rem;
      }
    }

    div:nth-of-type(2) {
      min-width: 12rem;

      input,
      p {
        font-size: 2rem;
      }

      input {
        display: block;
        border: none;
        border-bottom: 1px solid gray;
        max-width: 12rem;
        line-height: 3.5rem;
      }
    }

    p {
      line-height: 3.8rem;
    }
  }
`;

export const InfoBox = styled(Wrapper)`
  font-weight: 500;
  font-size: 2rem;
  line-height: 4.5rem;
  border-radius: 2rem;
  padding-left: 3.2rem;

  max-width: 44.8rem;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;

  input {
    font-weight: 500;
    font-size: 2rem;
    border: none;
    border-bottom: 1px solid gray;
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
  }

  .map {
    width: 17rem;
    height: 17rem;
    border-radius: 50%;
    border: 2px solid #29cc6a;
    background-color: lightgray;
    margin-right: 3.2rem;
  }

  .button {
    border: none;

    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
