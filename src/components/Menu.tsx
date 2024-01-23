import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
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
          <li key={idx}>
            <StyledNavLink to={'/' + label.toLowerCase()}>
              {Icon && (
                <Icon style={{ color: iconColors[idx % iconColors.length] }} />
              )}
              <span>{label}</span>
            </StyledNavLink>
          </li>
        );
      })}
    </MenuList>
  );
};

const MenuList = styled.ul`
  display: flex;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    color: ${theme.colors.fontSecondary};
    gap: 10px;
    transition: all 0.3s;
  }

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: ${theme.colors.fontSecondary};
    font-weight: 600;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    stroke-width: 1;
    transition: all 0.3s;
  }
`;

const iconColors = ['#8dc63f', '#662d91', '#f06449', '#1c75bc', '#9e1f63'];
export default Menu;
