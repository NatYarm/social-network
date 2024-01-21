import styled from 'styled-components';
import Header from '../components/Header';
import Timeline from '../pages/Timeline';
import Container from '../components/Container';
import Messenger from '../pages/Messenger';

const AppLayout = () => {
  return (
    <StyledAppLayout>
      <Header />
      <Container>
        {/* <Timeline /> */}
        <Messenger />
      </Container>
    </StyledAppLayout>
  );
};

const StyledAppLayout = styled.div`
  height: 100vh;
  margin: 0 auto;
`;

export default AppLayout;
