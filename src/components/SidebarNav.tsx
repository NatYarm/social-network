import styled from 'styled-components';
import Menu from './Menu';
import theme from '../styles/Theme';
import { IoIosPaper, IoIosPeople, IoMdChatboxes } from 'react-icons/io';
import { MdOutlineViewTimeline } from 'react-icons/md';
import { IoSettingsOutline } from 'react-icons/io5';

const links = [
  { Icon: MdOutlineViewTimeline, label: 'Timeline' },
  { Icon: IoIosPaper, label: 'Newsfeed' },
  { Icon: IoIosPeople, label: 'Friends' },
  { Icon: IoMdChatboxes, label: 'Messenger' },
  { Icon: IoSettingsOutline, label: 'Settings' },
];

const SidebarNav = () => {
  return (
    <NavList>
      <Menu menuItems={links} />
    </NavList>
  );
};

const NavList = styled.nav`
  margin-top: 100px;

  ul {
    flex-direction: column;
  }

  li {
    padding: 20px;
    position: relative;

    &::after {
      content: '';
      width: 100%;
      height: 1px;
      border-top: 1px solid ${theme.colors.lightGrey};
      position: absolute;
      bottom: 0;
      left: 40px;
      width: 80%;
    }
  }
`;

export default SidebarNav;
