import styled from 'styled-components';
import logo from '../assets/images/logo-transparent.png';
import Container from './Container';

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Logo src={logo} alt="logo In Touch" />
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background: rgba(0, 0, 0, 0.8);
  padding: 10px 48px;
  grid-area: header;
`;

const Logo = styled.img`
  height: 8rem;
`;

export default Header;
