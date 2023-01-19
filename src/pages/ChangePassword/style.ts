import styled from '@emotion/styled';

import { Button } from '../ForgottenPassword/style';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 8rem);
  justify-content: center;
  align-items: center;
  gap: 2rem;

  .button-fields {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 2rem;
  }
`;

export const ConfirmButton = styled(Button)``;

export const CancelButton = styled(Button)`
  background-color: #696969;
`;
