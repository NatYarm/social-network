import styled from 'styled-components';
import logo from '../assets/images/logo-transparent.png';

const Header = () => {
  return (
    <StyledHeader>
      <Logo src={logo} alt="logo In Touch" />
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background: rgba(0, 0, 0, 0.8);
  grid-area: header;
`;

const Logo = styled.img`
  height: 8rem;
`;

export default Header;
