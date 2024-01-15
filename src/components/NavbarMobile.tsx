import styled from 'styled-components';
import Button from './Button';
import Menu from './Menu';
import theme from '../styles/Theme';

const menuItems = [
  { label: 'Timeline' },
  { label: 'Profile' },
  { label: 'Friends' },
  { label: 'Album' },
];

const NavbarMobile = () => {
  return (
    <StyledNavbarMobile>
      <Menu menuItems={menuItems} />
      <Button $btnType="primary">Add Friend</Button>
    </StyledNavbarMobile>
  );
};

const StyledNavbarMobile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 100px;

  a {
    color: ${theme.colors.fontSecondary};
  }

  li + li {
    position: relative;
    ::before {
      content: '';
      display: inline-block;
      width: 1px;
      height: 20px;
      left: -25%;
      position: absolute;
      background-color: #d9d9dc;
    }
  }
`;

export default NavbarMobile;
