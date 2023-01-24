import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  border: 1px solid;
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

  & > input {
    margin-left: 1rem;
    font-size: 3rem;
    font-weight: 700;
    color: #696969;
    background-color: white;

    border: none;
    :focus {
      outline: none;
    }
  }
`;

export const TypeBtn = styled.div<{ itemInfo: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 5.7rem;
  height: 5.7rem;

  border: 5px solid #6ccea0;
  border-radius: 50%;
  cursor: ${(props) => (props.itemInfo ? 'default' : 'pointer')};

  & > img {
    width: 50%;
  }
`;
