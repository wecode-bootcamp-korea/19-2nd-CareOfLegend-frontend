import React from 'react';
import styled from 'styled-components';

function FrontDisplay() {
  return (
    <Display>
      <DisplayTitle>Healthy products made just for you</DisplayTitle>
      <DisplayContent>
        Vitamins, protein, and more, made from the best ingredients on earth and
        personalized
      </DisplayContent>
      <DisplayContent>
        Just for you. Adjust your delivery or cancel at any time.
      </DisplayContent>
      <DisplayContent>Free shipping on orders over $20.</DisplayContent>
    </Display>
  );
}

export default FrontDisplay;

const Display = styled.div`
  ${props => props.theme.flexAllCenter}
  width: 100%;
  height: 300px;
  /* padding: 100px 0; */
  background-color: rgb(177, 212, 221);
  flex-direction: column;
`;

const DisplayTitle = styled.h1`
  margin-bottom: 20px;
  font-size: 30px;
  font-weight: bold;
`;

const DisplayContent = styled.p`
  margin-bottom: 5px;
  color: rgba(0, 0, 0, 0.6);
`;
