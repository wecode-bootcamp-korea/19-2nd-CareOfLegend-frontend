import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FaArrowAltCircleUp } from 'react-icons/fa';
import MainCard from './component/MainCard';
import mainImg from './Image/main.jpg';
import styled from 'styled-components';

function Main() {
  const [mainData, setMainData] = useState();

  useEffect(() => {
    axios.get('/Data/Dong/Dong.json').then(res => setMainData(res.data));
  }, []);

  const goTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <IntroMain>
      <MainImg src={mainImg} alt="mainImg" />
      <MainText>
        <Opening>
          You Know your body, we know the science. Let's work together.
        </Opening>
        <SubOpening>
          Find the right vitamins, protein, and now collagen too, personalized
          just for you
        </SubOpening>
        <GoQuiz to="/quiz">Take the quiz</GoQuiz>
        <GoProductList to="/productlist">Browse all products</GoProductList>
      </MainText>
      <MainPath>
        <MainComment>
          Healthy doesn't have to be hard.
          <br /> We make it easy.
        </MainComment>
      </MainPath>
      <MainCard mainData={mainData} />
      <TopBtn onClick={goTop}> </TopBtn>
    </IntroMain>
  );
}
export default Main;

const IntroMain = styled.main`
  height: 100%;
`;

const MainImg = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
`;

const MainText = styled.section`
  position: absolute;
  top: 140px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: auto;
`;

const Opening = styled.h1`
  width: 510px;
  color: ${({ theme }) => theme.contentsBlack};
  font-family: ${({ theme }) => theme.Lora};
  text-align: center;
  font-size: 48px;
  line-height: 60px;
`;

const SubOpening = styled.h2`
  width: 450px;
  margin-top: 30px;
  color: ${({ theme }) => theme.contentsBlack};
  text-align: center;
  font-size: 20px;
  line-height: 30px;
`;

const GoQuiz = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 190px;
  height: 60px;
  margin-top: 25px;
  border: 2px solid ${({ theme }) => theme.mainOrange};
  border-radius: 30px;
  background: ${({ theme }) => theme.mainOrange};
  color: rgba(255, 255, 255, 1);
  font-size: 15px;
  letter-spacing: 1px;
  &:hover {
    color: ${({ theme }) => theme.mainOrange};
    background: rgba(255, 255, 255, 1);
  }
`;

const GoProductList = styled(Link)`
  border-bottom: 2px solid rgba(0, 0, 0, 1);
  margin-top: 25px;
  padding-bottom: 5px;
  font-size: 14px;
  letter-spacing: 1px;
`;

const MainPath = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: auto;
`;

const MainComment = styled.p`
  margin-top: 80px;
  text-align: center;
  font-size: 32px;
  line-height: 50px;
`;

const TopBtn = styled(FaArrowAltCircleUp)`
  position: fixed;
  right: 30px;
  bottom: 30px;
  width: 50px;
  height: 50px;
`;
