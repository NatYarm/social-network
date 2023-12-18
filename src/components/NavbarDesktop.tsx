import styled from 'styled-components';
import Menu from './Menu';
import Button from './Button';

const menuItems = [
  { label: 'Timeline' },
  { label: 'Profile' },
  { label: 'Friends' },
  { label: 'Album' },
];

const Navbar = () => {
  return (
    <StyledNavbar>
      <MenuWrapper>
        <Menu menuItems={menuItems} />
        <Button $btnType="primary">Add Friend</Button>
      </MenuWrapper>
    </StyledNavbar>
  );
};

const StyledNavbar = styled.nav`
  background: rgba(0, 0, 0, 0.8);
  height: 60px;
  width: 100%;
  position: absolute;
  bottom: 30px;
`;

const MenuWrapper = styled.div`
  display: flex;
  height: 100%;
  width: 65%;
  justify-content: space-between;
  align-items: center;
  left: 270px;
  position: absolute;
`;

export default Navbar;
