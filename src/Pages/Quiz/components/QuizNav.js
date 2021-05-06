import React from 'react';
import styled from 'styled-components';
import { FaChevronLeft } from 'react-icons/fa';

function QuizNav() {
  return (
    <QuizNavWrapper>
      <GoBack>
        <button type="button">
          <BackIcon />
          <span> Back</span>
        </button>
      </GoBack>
      <GrayLogo>care/of/legend</GrayLogo>
    </QuizNavWrapper>
  );
}

export default QuizNav;

const QuizNavWrapper = styled.nav`
  position: fixed;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 80px;
  color: ${({ theme }) => theme.contentsBlack};
  z-index: 1;
`;

const GoBack = styled.form`
  margin-left: 17px;
  button {
    background: none;
    border: none;
    cursor: pointer;
  }
  span {
    font-size: 16px;
  }
`;

const GrayLogo = styled.h1`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  font-size: 28px;
  font-weight: 700;
  letter-spacing: 2px;
`;

const BackIcon = styled(FaChevronLeft)`
  font-size: 14px;
`;
