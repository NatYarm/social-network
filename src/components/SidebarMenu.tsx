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
  { Icon: IoMdChatboxes, label: 'Messages' },
  { Icon: IoSettingsOutline, label: 'Settings' },
];

const SidebarMenu = () => {
  return (
    <StyledSidebar>
      <Menu menuItems={links} />
    </StyledSidebar>
  );
};

const StyledSidebar = styled.aside`
  grid-area: asideLeft;
  grid-row: 2/3;

  ul {
    flex-direction: column;
  }

  li {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 20px;
    position: relative;

    &::after {
      content: '';
      width: 100%;
      height: 1px;
      border-top: 1px solid #f1f2f2;
      position: absolute;
      bottom: 0;
      left: 40px;
      width: 80%;
    }
  }

  a {
    color: ${theme.colors.fontSecondary};
  }
`;

export default SidebarMenu;
