import styled from 'styled-components';
import Menu from './Menu';
import theme from '../styles/Theme';

const links = [
  { label: 'Timeline' },
  { label: 'Newsfeed' },
  { label: 'Messages' },
  { label: 'Settings' },
];

const SidebarLeft = () => {
  return (
    <StyledSidebar>
      <Menu menuItems={links} />
    </StyledSidebar>
  );
};

const StyledSidebar = styled.aside`
  grid-area: asideLeft;
  grid-row: 2/3;
  background-color: #dcf0f5;

  ul {
    flex-direction: column;
  }

  a {
    color: ${theme.colors.fontSecondary};
  }
`;

export default SidebarLeft;
