import styled from '@emotion/styled';

export const Card = styled.div`
  width: 48%;
  height: 10rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #dbdbdb;
  border-radius: 2rem;
  padding: 2rem;

  .card__info {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 90%;
    cursor: pointer;
    color: #696969;
    font-size: 2rem;
  }

  .card__icons {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`;

export const Icon = styled.div`
  cursor: pointer;
`;
