import styled from 'styled-components';

const links = ['Profile', 'Messages', 'News', 'Music', 'Settings'];

const Sidebar = () => {
  return (
    <StyledSidebar>
      <nav>
        <ul>
          {links.map((link, index) => (
            <li key={index}>
              <a href="/">{link}</a>
            </li>
          ))}
        </ul>
      </nav>
    </StyledSidebar>
  );
};

const StyledSidebar = styled.aside`
  grid-area: aside;
  background-color: #eff5dc;
`;

export default Sidebar;
