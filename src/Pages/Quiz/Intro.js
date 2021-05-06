import React from 'react';
import { Link } from 'react-router-dom';
import img from './images/intro.jpg';
import care from './images/care.png';
import styled from 'styled-components';

function Intro() {
  return (
    <IntroWrapper>
      <IntroImg src={img} alt="Intro Img" />
      <IntroMention>
        <IntroTitle>Your journey to health starts here.</IntroTitle>
        <IntroIcon src={care} alt="Intro Img"></IntroIcon>
        <IntroComment>
          Tell us about yourself. We'll get to know you and provide vitamins and
          supplements tailored to your unique needs.
        </IntroComment>
        <BeginBtn to="/quiz/hi">Begin quiz</BeginBtn>
      </IntroMention>
    </IntroWrapper>
  );
}

export default Intro;

const IntroWrapper = styled.main`
  display: flex;
  height: 100%;
`;

const IntroImg = styled.img`
  width: 50%;
  height: 100%;
`;

const IntroMention = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;

const IntroTitle = styled.h1`
  width: 340px;
  text-align: center;
  font-size: 28px;
  font-family: ${({ theme }) => theme.Lora};
  line-height: 40px;
`;

const IntroIcon = styled.img`
  margin: 10px 0;
  width: 60px;
  height: 60px;
`;

const IntroComment = styled.span`
  width: 340px;
  text-align: center;
  font-size: 16px;
  font-family: ${({ theme }) => theme.Lora};
  line-height: 30px;
`;

const BeginBtn = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  width: 100px;
  height: 35px;
  border: none;
  outline: none;
  border-radius: 50px;
  background: ${({ theme }) => theme.contentsBlack};
  color: rgb(255, 255, 255);
  font-size: 11px;
  letter-spacing: 1px;
  cursor: pointer;

  &:hover {
    background: rgb(255, 255, 255);
    color: ${({ theme }) => theme.contentsBlack};
    border: 2px solid ${({ theme }) => theme.contentsBlack};
  }
`;
