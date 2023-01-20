import styled from '@emotion/styled';

export const Modal = styled.div`
  width: 68rem;
  height: 36.5rem;
  border-radius: 2rem;
  background-color: white;

  display: flex;
  justify-content: center;

  // 가운데 정렬
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -60%);

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    textarea,
    input {
      border: none;
      width: 60rem;
      border: 1px solid #e6e6e6;
      border-radius: 2rem;
      padding: 2rem;
      font-size: 2rem;
      margin-bottom: 2rem;

      ::placeholder {
        color: #afafaf;
      }
    }

    input {
      height: 6rem;
    }

    textarea {
      resize: none;
      height: 13rem;
    }

    .button-field {
      display: flex;
      align-items: center;
      gap: 3rem;
    }
  }
`;

export const ModalButton = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  color: white;
  border-radius: 5rem;
  padding: 1rem 3rem;
  font-size: 2rem;
`;
