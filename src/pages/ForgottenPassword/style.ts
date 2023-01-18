import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

export const Header = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  padding: 1.6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    font-size: 1.4rem;
    color: ${(props) => props.theme.colors.primary};
  }
`;

export const Title = styled.h1`
  font-size: 2.4rem;
  font-weight: 700;
  color: #2d2d2d;
`;

export const StyledForm = styled.form`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
  margin-bottom: 1rem;

  input {
    border: 2px solid #dbdbdb;
    padding: 1rem 1.5rem;
    width: 30rem;
    border-radius: 1rem;
    font-size: 1.6rem;
    font-weight: 500;

    :focus {
      outline: none;
      border-color: ${(props) => props.theme.colors.primary};
    }
  }
`;

export const Button = styled.button`
  padding: 1rem 0;
  border-radius: 1rem;
  background-color: ${(props) => props.theme.colors.primary};
  color: white;
  font-size: 1.6rem;
  font-weight: 700;
  width: 8rem;
`;

export const Message = styled.span`
  color: #ff3d3d;
  font-size: 1.4rem;
`;

export const Modal = styled.div`
  z-index: 10;
  position: absolute;
  background-color: white;
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  padding: 4rem;

  span:first-of-type {
    font-size: 2rem;
  }

  span:nth-of-type(2) {
    font-size: 2.4rem;
    font-weight: 700;
    margin-bottom: 2rem;
  }
`;
