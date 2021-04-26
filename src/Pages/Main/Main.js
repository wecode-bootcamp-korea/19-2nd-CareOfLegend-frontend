import React from 'react';
import styled from "styled-components";

const Main = props => {
  return(
    <Test>Hello World</Test>
  );
}

export default Main;
  
const Test = styled.div`
  color: blue;
  background: pink;
  font-family: ${({ theme }) => theme.Lora}
`;