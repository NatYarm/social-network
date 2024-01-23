import styled from 'styled-components';
import errorImg from '../assets/images/404.png';
import Container from '../components/Container';

const ErrorPage = () => {
  return (
    <Container>
      <ErrorContent>
        <img src={errorImg} alt="page not found" />
      </ErrorContent>
      <ErrorMessage>
        <ErrorTitle>Whoops!</ErrorTitle>
        <ErrorText>
          Looks like you are lost. But don't worry there is plenty to see!!
        </ErrorText>
      </ErrorMessage>
    </Container>
  );
};

const ErrorContent = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px 0 20px;
`;

const ErrorMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ErrorTitle = styled.h1`
  font-family: 'Agdasima', sans-serif;
  font-size: 5.2rem;
`;

const ErrorText = styled.p`
  padding: 20px;
`;

export default ErrorPage;
