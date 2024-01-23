import styled from 'styled-components';
import Header from '../components/Header';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import SidebarNav from '../components/SidebarNav';
import TimelineCover from '../components/TimelineCover';
import ContentWrapper from '../components/ContentWrapper';
import ProfileCard from '../components/ProfileCard';

const AppLayout = () => {
  const location = useLocation();
  const showCover = location.pathname === '/timeline';
  const showProfileCard = location.pathname === '/messenger';

  return (
    <StyledAppLayout>
      <Header />
      <PageContents>
        {showCover && <TimelineCover />}
        <ContentWrapper>
          <Sidebar>
            {showProfileCard && <ProfileCard />}
            <SidebarNav />
          </Sidebar>
          <Outlet />
        </ContentWrapper>
      </PageContents>
    </StyledAppLayout>
  );
};

const StyledAppLayout = styled.div`
  //display: grid;
  height: 100vh;
  width: 100vw;

  /* grid-template-columns: 2fr 10fr;
  grid-template-rows: auto;
  grid-template-areas:
    'header header'
    'cover cover'
    'sidebar main'; */
`;

const PageContents = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1170px;
  padding: 0 15px;
  margin: 0 auto;
`;

export default AppLayout;
