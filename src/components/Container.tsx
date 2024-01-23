import styled from 'styled-components';
import theme from '../styles/Theme';

const Container = styled.div`
  max-width: 1170px;
  width: 100%;
  padding: 0 15px;
  margin: 0 auto;

  @media ${theme.media.laptop} {
    max-width: 900px;
  }
`;

export default Container;
