import styled from 'styled-components';
import Header from './Header';
import Main from './Main';
import Sidebar from './Sidebar';

const AppLayout = () => {
  return (
    <StyledAppLayout>
      <Header />
      <Sidebar />
      <Main />
    </StyledAppLayout>
  );
};

const StyledAppLayout = styled.div`
  display: grid;
  height: 100vh;
  width: 1200px;
  margin: 0 auto;
  grid-template-columns: 2fr 10fr;
  grid-template-rows: auto 1fr;

  grid-template-areas:
    'header header'
    'aside main';
`;

export default AppLayout;
