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

  position: relative;
  display: flex;
  flex-direction: column;
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
  min-height: 9rem;
  border: none;
  resize: none;

  font-size: 1.6rem;
  color: #4e4e4e;

  &:focus {
    outline: none;
  }
`;

export const ProjectImage = styled.div<{ isImg: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 1.6rem;
  font-weight: 500;
  color: ${(isImg) => (isImg.isImg ? '#ffffff' : 'inherit')};
  background-color: ${(isImg) => (isImg.isImg ? '#00B74F' : '#f6f6f6')};

  border: ${(isImg) => (isImg.isImg ? 'none' : '2px solid #b6dfc8')};
  border-radius: ${(isImg) => (isImg.isImg ? '1.75rem 1.75rem 0 0' : '1.75rem')};

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

    cursor: pointer;
  }
`;

export const InputImgWrapper = styled.div`
  width: 44rem;
  height: 21rem;

  border: 1px solid #b6dfc8;
  border-radius: 0 1.75rem 1.75rem 1.75rem;
  box-sizing: border-box;

  overflow-y: auto;
`;

export const Realization = styled.div`
  margin: 0 4rem;

  & > div {
    padding: 0 1.5rem;
  }
`;

export const FinishBtns = styled.div`
  height: 100%;
  padding-right: 2rem;
  margin-bottom: 2rem;

  display: flex;
  justify-content: flex-end;
  align-items: flex-end;

  & > button {
    width: 6rem;
    height: 3rem;
    border-radius: 2rem;

    font-size: 1.6rem;
    font-weight: 500;

    margin-left: 1rem;
  }
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 2rem;
  right: 2rem;

  background-color: inherit;
  font-size: 1.8rem;
  cursor: pointer;
`;
