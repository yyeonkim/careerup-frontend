import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 100%;
  min-width: 600px;
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
  position: relative;

  margin: 0 4rem;
  margin-top: 3rem;

  & > img {
    width: 5.5rem;
    cursor: pointer;
  }

  & > span {
    margin-left: 1rem;
    font-size: 3rem;
    font-weight: 700;
    color: #696969;
  }
`;

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

  .dateWave {
    margin-right: 0.3rem;
  }
`;

export const DateSelect = styled.select`
  border: none;
  -webkit-appearance: none; /* 크롬 화살표 없애기 */
  -moz-appearance: none; /* 파이어폭스 화살표 없애기 */
  appearance: none; /* 화살표 없애기 */

  margin-right: 0.3rem;

  font-size: 1.6rem;
  color: #4e4e4e;
  &:focus {
    outline: none;
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
  position: relative;

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

export const ToolInputModal = styled.div`
  position: absolute;
  top: 3rem;
  left: -1rem;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 12.8rem;
  height: 2.8rem;
  border: 1px solid #d9d9d9;

  color: #000000;
  font-size: 1.4rem;
  font-weight: 300;
  background-color: #d9d9d9;

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: white;

    border-radius: 2rem;
    margin: 0 1rem;

    width: 11.5rem;
    height: 2.2rem;
  }

  & > div > input {
    width: 80%;
    border: none;

    &:focus {
      outline: none;
    }
  }
`;

export const Review = styled.div`
  margin: 0 4rem;

  & > div {
    padding: 0 1.5rem;
  }
`;
