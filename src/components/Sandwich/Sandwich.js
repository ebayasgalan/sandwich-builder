import React from "react";
import styled from "styled-components";

import SandwichIngredient from "./SandwichIngredient/SandwichIngredient";

const StyledSandwich = styled.div`
  width: 100%;
  margin: auto;
  height: 250px;
  overflow: scroll;
  text-align: center;
  font-weight: bold;
  font-size: 1.2rem;

  @media (min-width: 500px) and (min-height: 400px) {
    width: 350px;
    height: 300px;
  }

  @media (min-width: 500px) and (min-height: 401px) {
    width: 450px;
    height: 400px;
  }

  @media (min-width: 1000px) and (min-height: 700px) {
    width: 700px;
    height: 600px;
  }
`;

const sandwich = props => {
  console.log("this is before transformation ", props.ingredients);
  let transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <SandwichIngredient key={igKey + i} type={igKey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients!</p>;
  }

  console.log(
    "this is inside sandwich js transformed one: ",
    transformedIngredients
  );

  return (
    <StyledSandwich>
      <SandwichIngredient type="top-bread" />
      {transformedIngredients}
      <SandwichIngredient type="bottom-bread" />
    </StyledSandwich>
  );
};

export default sandwich;
