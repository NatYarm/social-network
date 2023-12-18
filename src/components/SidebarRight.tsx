import styled from 'styled-components';

const toFollow = [
  'Adam Noel',
  'Monica Star',
  'Freddy Smith',
  'John Watson',
  'Olivia Silver',
];

const SidebarRight = () => {
  return (
    <StyledSidebar>
      <nav>
        <h3>Who to Follow</h3>
        <ul>
          {toFollow.map((link, index) => (
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
  grid-area: asideRight;
  grid-row: 2/3;
  background-color: #eff5dc;
`;

export default SidebarRight;
