import styled from 'styled-components';
import theme from '../styles/Theme';
import { IconType } from 'react-icons';

type MenuItemsPropsType = {
  menuItems: Array<MenuItem>;
};

type MenuItem = {
  label: string;
  Icon?: IconType;
};

const Menu = ({ menuItems }: MenuItemsPropsType) => {
  return (
    <MenuList>
      {menuItems.map((item, idx) => {
        const { Icon, label } = item;
        return (
          <ListItem key={idx}>
            {Icon ? (
              <Icon style={{ color: iconColors[idx % iconColors.length] }} />
            ) : null}
            <NavLink>{label}</NavLink>
          </ListItem>
        );
      })}
    </MenuList>
  );
};

const MenuList = styled.ul`
  display: flex;
`;
const ListItem = styled.li``;
const NavLink = styled.a`
  color: ${theme.colors.fontPrimary};
  font-size: 1.4rem;
  cursor: pointer;
`;

const iconColors = ['#8dc63f', '#662d91', '#f06449', '#1c75bc', '#9e1f63'];
export default Menu;
