import styled from 'styled-components';
import CreatePost from '../components/CreatePost';

const Messenger = () => {
  return (
    <Main>
      <CreatePost />
    </Main>
  );
};

const Main = styled.main`
  width: 75%;
  div {
    padding-top: 0;
  }
`;

export default Messenger;
