import styled from 'styled-components';
import TimelineCover from '../components/TimelineCover';
import CreatePost from '../components/CreatePost';
import SidebarLeft from '../components/SidebarMenu';

import theme from '../styles/Theme';
import Posts from '../components/Posts';

const Timeline = () => {
  return (
    <>
      <TimelineCover />
      <Main>
        <CreatePost />
        <SidebarLeft />
        <Posts />
      </Main>
    </>
  );
};

const Main = styled.main`
  display: grid;
  grid-template-columns: 2fr 8fr;
  grid-template-rows: repeat(2, auto);
  grid-template-areas:
    'asideLeft create '
    'asideLeft post ';
  column-gap: 20px;
  margin-top: 30px;

  @media ${theme.media.laptop} {
    grid-template-columns: 100%;
    grid-template-areas:
      'create'
      'post';
  }
`;

export default Timeline;
