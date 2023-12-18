import styled from 'styled-components';
import Header from '../components/Header';

import Timeline from '../pages/Timeline';

import Container from '../components/Container';

const AppLayout = () => {
  return (
    <StyledAppLayout>
      <Header />
      <Container>
        <Timeline />
      </Container>
    </StyledAppLayout>
  );
};

const StyledAppLayout = styled.div`
  height: 100vh;
  margin: 0 auto;
`;

export default AppLayout;
