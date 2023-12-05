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
  background-color: #00d9ff;
  grid-area: header;
`;

const Logo = styled.img`
  height: 10rem;
`;

export default Header;
