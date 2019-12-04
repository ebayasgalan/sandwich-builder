import styled from 'styled-components';
import Footer from '../components/Footer';
import Signup from '../components/Signup';
import Signin from '../components/Signin';

const StyledPage = styled.div`
  height: 100vh;
`;

const Columns = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 10px;
`;

const SignupPage = props => (
  <StyledPage>
    <Columns>
      <Signin />
      <Signup />
    </Columns>
  </StyledPage>
);

const StyledHome = styled.div`
  .intro {
    text-align: center;
  }
`;

const HomePage = () => (
  <StyledHome>
    <div className='intro'>
      <h1>Welcome</h1>
      <h3>please signin or signup to place an order</h3>
    </div>
    <SignupPage />
    <Footer />
  </StyledHome>
);

export default HomePage;
