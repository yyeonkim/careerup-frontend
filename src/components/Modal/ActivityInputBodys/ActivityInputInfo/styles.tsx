import styled from '@emotion/styled';

export const Info = styled.div<{ isEditMode: boolean }>`
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
      background-color: white;
      font-size: 1.6rem;

      &:focus {
        outline: none;
      }
    }
  }

  .date {
    width: 22rem;
  }

  .exist {
    width: ${(props) => (props.isEditMode ? '22rem' : '20rem')};
  }

  .ant-picker .ant-picker-input > input[disabled] {
    color: #4e4e4e;
  }
`;
