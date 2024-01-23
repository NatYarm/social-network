import styled from 'styled-components';
import CreatePost from '../components/CreatePost';
import Posts from '../components/Posts';

const Timeline = () => {
  return (
    <Main>
      <CreatePost />
      <Posts />
    </Main>
  );
};

const Main = styled.main`
  width: 75%;
  grid-area: main;

  // const Main = styled.main
`;
//   display: grid;
//   grid-template-columns: 2fr 8fr;
//   grid-template-rows: repeat(2, auto);
//   grid-template-areas:
//     'asideLeft create '
//     'asideLeft post ';
//   column-gap: 20px;
//   margin-top: 30px;

//   @media ${theme.media.laptop} {
//     grid-template-columns: 100%;
//     grid-template-areas:
//       'create'
//       'post';
//   }
//`;

export default Timeline;
