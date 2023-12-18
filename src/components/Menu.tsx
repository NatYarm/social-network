import styled from 'styled-components';
import theme from '../styles/Theme';
import { IconType } from 'react-icons';

type MenuItemsPropsType = {
  menuItems: Array<MenuItem>;
};

type MenuItem = {
  label: string;
  icon?: IconType;
};

const Menu = ({ menuItems }: MenuItemsPropsType) => {
  return (
    <MenuList>
      {menuItems.map((item, idx) => (
        <ListItem key={idx}>
          <NavLink>{item.label}</NavLink>
        </ListItem>
      ))}
    </MenuList>
  );
};

const MenuList = styled.ul`
  display: flex;
  gap: 20px;
`;
const ListItem = styled.li``;
const NavLink = styled.a`
  color: ${theme.colors.fontPrimary};
  font-size: 1.4rem;
`;

export default Menu;
