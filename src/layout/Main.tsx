import styled from 'styled-components';
import social from '../assets/images/social-media.webp';

const Main = () => {
  return (
    <StyledMain>
      <Img src={social} alt="social media" />
    </StyledMain>
  );
};

const StyledMain = styled.main`
  grid-area: main;
`;

const Img = styled.img`
  width: 100%;
  height: 380px;
  object-fit: cover;
`;

export default Main;
