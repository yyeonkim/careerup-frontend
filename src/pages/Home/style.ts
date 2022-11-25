import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #00b74f;
`;

export const Header = styled.header`
  display: flex;
  justify-content: flex-end;
  padding: 1.6rem;
  margin-bottom: 5rem;
`;

export const LoginButton = styled.div`
  font-size: 1.6rem;
  font-weight: bold;
  text-align: center;
  background-color: white;
  padding: 1rem 2rem;
  border-radius: 5rem;
  width: 11rem;
  padding: 1rem;
`;

export const Main = styled.div`
  max-width: 128rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  .content {
    width: 100%;
    margin-bottom: 8rem;
    display: flex;
    justify-content: space-between;

    .info {
      margin-top: 6rem;
      font-weight: bold;
      font-size: 5.4rem;

      div {
        color: white;
        line-height: 1.5;
        margin-bottom: 2rem;
      }
    }
    .logo {
      width: 45rem;
      height: 45rem;
    }
  }
`;

export const MapButton = styled.div`
  font-size: 2.4rem;
  font-weight: bold;
  background-color: white;
  width: 40rem;
  border-radius: 50rem;
  padding: 1.5rem 0;
  margin-right: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  span {
    margin-right: 1rem;
  }
`;
