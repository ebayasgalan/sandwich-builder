import styled from 'styled-components';

const StyledAbout = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  font-size: 25px;
  p {
    padding: 2rem;
  }
  h3 {
    text-align: center;
  }
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const About = () => (
  <StyledAbout>
    <p>
      Golden Gate Pizzeria is family operated business. We opened in 1987 and
      our pizzas are made with fresh and organic ingredients. Order your
      favorite pizza, pasta, salad, and more, all with the click of a button. We
      accept orders online for pickup and delivery.
    </p>
  </StyledAbout>
);

export default About;
