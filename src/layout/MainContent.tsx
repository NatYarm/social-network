import styled from 'styled-components';
import CreatePost from '../components/CreatePost';
import SidebarLeft from '../components/SidebarLeft';
import SidebarRight from '../components/SidebarRight';
import Post from '../components/Post';
import theme from '../styles/Theme';

const MainContent = () => {
  return (
    <StyledMain>
      <SidebarLeft />
      <CreatePost />
      <Post />
      <SidebarRight />
    </StyledMain>
  );
};

const StyledMain = styled.main`
  display: grid;
  grid-template-columns: 2fr 8fr 2fr;
  grid-template-rows: repeat(2, auto);
  grid-template-areas:
    'asideLeft create asideRight'
    'asideLeft post asideRight';
  column-gap: 20px;
  margin-top: 30px;

  @media ${theme.media.laptop} {
    grid-template-columns: 100%;
    grid-template-areas:
      'create'
      'post';
  }
`;

export default MainContent;
