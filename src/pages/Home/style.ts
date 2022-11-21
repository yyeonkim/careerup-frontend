import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #00b74f;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  margin-bottom: 8rem;
`;

export const HomeLogo = styled.div`
  width: 9rem;
  height: 9rem;
  background-color: lightgray;
  font-size: 1.6rem;
`;

export const LoginButton = styled.div`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  background-color: white;
  padding: 1rem 2rem;
  width: 8rem;
  border-radius: 5rem;
`;

export const Main = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  .content {
    width: 100%;
    margin-bottom: 8rem;
    display: flex;
    justify-content: space-between;

    .info {
      font-weight: bold;
      div:first-child {
        font-size: 4rem;
        color: white;
        line-height: 1.5;
        margin-bottom: 2rem;
      }
      div:nth-child(2) {
        font-size: 8rem;
      }
    }
    .logo {
      background-color: lightgray;
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
  text-align: center;
  padding: 1.5rem 0;
`;
