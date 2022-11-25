import styled from '@emotion/styled';

export const Container = styled.div`
  max-width: 1440px;
  padding: 0 1.6rem;
  background-color: ${(props) => props.theme.colors.background};
`;

const Wrapper = styled.div`
  background-color: white;
  box-shadow: 0px 4px 15px rgba(172, 172, 172, 0.15);
  max-width: 44.8rem;
`;

export const ProfileBox = styled(Wrapper)`
  border-radius: 3rem;
`;

export const InfoBox = styled(Wrapper)``;

export const MapBox = styled(Wrapper)``;
