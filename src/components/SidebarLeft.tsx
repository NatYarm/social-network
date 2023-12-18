import styled from 'styled-components';
import Menu from './Menu';

const links = [
  { label: 'Timeline' },
  { label: 'Newsfeed' },
  { label: 'Messages' },
  { label: 'Music' },
  { label: 'Settings' },
];

const SidebarLeft = () => {
  return (
    <StyledSidebar>
      <Menu menuItems={links} />
      {/* <ul>
        {links.map((link, index) => (
          <li key={index}>
            <a href="/">{link}</a>
          </li>
        ))}
      </ul> */}
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
`;

export default SidebarLeft;
