import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  background-color: #ffffff;
  width: 50%;
  min-width: 600px;
  height: 95%;

  overflow-y: auto;
  border-radius: 1rem;
`;

export const Line = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem 0;

  & > div {
    width: 90%;
    border-bottom: 1px solid #c7c7c7;
  }
`;

export const Title = styled.span`
  font-size: 1.8rem;
  font-weight: 500;
`;

export const SubTitle = styled(Title)`
  font-size: 1.6rem;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;

  margin: 0 4rem;
  margin-top: 3rem;

  & > img {
    width: 5.5rem;
  }

  & > span {
    margin-left: 1rem;
    font-size: 3rem;
    font-weight: 700;
    color: #696969;
  }
`;

export const Info = styled.div`
  & > div {
    margin: 0 4rem;
    margin-bottom: 1rem;

    display: flex;
    align-items: center;

    & > div {
      width: 13rem;
    }

    & > input {
      border: none;

      color: #4e4e4e;
      font-size: 1.6rem;

      &:focus {
        outline: none;
      }
    }
  }

  .calendar {
    border: none;

    color: #4e4e4e;
    font-size: 1.6rem;

    &:focus {
      outline: none;
    }
  }

  .example-custom-input {
    background-color: #282c34;
    color: white;
    cursor: pointer;
    width: 240px;
    padding: 10px;
    margin-bottom: 5px;

    display: flex;
    justify-content: center;
  }

  .react-datepicker__header,
  .react-datepicker-year-header {
    color: red;
    background-color: blue;
    border-bottom: 1px solid yellow;
  }
`;

export const Content = styled.div`
  margin: 0 4rem;

  & > div:first-of-type {
    display: flex;
    flex-direction: column;
    & > div:last-of-type {
      padding: 0 1.5rem;
    }
  }
`;

export const TextArea = styled.textarea`
  margin: 1rem 0;
  width: 100%;
  min-height: 7rem;
  border: none;
  resize: none;

  font-size: 1.6rem;
  color: #4e4e4e;

  &:focus {
    outline: none;
  }
`;

export const ProjectImage = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 1.6rem;
  font-weight: 500;
  background-color: #f6f6f6;

  border: 2px solid #b6dfc8;
  border-radius: 1.75rem;

  width: 29.8rem;
  height: 3rem;
  padding: 0 1.5rem;

  & span {
    display: flex;
    align-items: center;
  }

  & > span:last-of-type {
    font-size: 2.4rem;
    margin-right: -0.5rem;
  }
`;

export const UseTools = styled.div`
  margin: 1rem 0;
  padding: 0 1.5rem;

  & > div {
    display: flex;
    align-items: center;

    margin-top: 1rem;
    padding-bottom: 1rem;
  }
`;

export const Tool = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 1.4rem;
  font-weight: 300;
  background-color: #d9d9d9;
  border-radius: 2rem;

  padding: 0.2rem 1.5rem;
  margin-right: 1rem;
  margin-bottom: 1rem;

  width: 6.9rem;
  height: 2.4rem;
`;

export const ToolPlus = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 5.7rem;
  height: 2.4rem;
  border: 1px solid #d9d9d9;
  border-radius: 1.75rem;

  color: #d9d9d9;
  cursor: pointer;
  margin-bottom: 1rem;

  &:hover {
    color: #4e4e4e;
    border: 1px solid #4e4e4e;
  }
`;

export const Review = styled.div`
  margin: 0 4rem;

  & > div {
    padding: 0 1.5rem;
  }
`;
