import styled from 'styled-components';
import ProfileCard from '../components/ProfileCard';
import SidebarLeft from '../components/SidebarMenu';
import CreatePost from '../components/CreatePost';

const Messenger = () => {
  return (
    <Wrapper>
      <Sidebar>
        <ProfileCard />
        <SidebarLeft />
      </Sidebar>
      <Main>
        <CreatePost />
      </Main>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 30px;
  padding: 30px 0 50px;
  height: 100vh;
`;
const Sidebar = styled.aside`
  display: flex;
  flex-direction: column;
  width: 25%;
`;
const Main = styled.main`
  width: 75%;
  div {
    margin: 0 auto;
  }
`;

export default Messenger;
