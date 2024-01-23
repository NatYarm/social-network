import styled from 'styled-components';

type PropsType = {
  children: React.ReactNode;
};

const Sidebar = ({ children }: PropsType) => {
  return <StyledSidebar>{children}</StyledSidebar>;
};

const StyledSidebar = styled.aside`
  display: flex;
  flex-direction: column;
  width: 25%;
`;

export default Sidebar;
