import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { API } from '../../Config';
import { FaArrowAltCircleUp, FaTint } from 'react-icons/fa';
import ProductCard from './components/ProductCard';
import result from './images/result3.jpg';
import styled from 'styled-components';
import axios from 'axios';

function Result() {
  const [resultData, setResultData] = useState();

  const [data, setData] = useState();

  const [profile, setProfile] = useState({ image: null, name: '' });

  useEffect(() => {
    const option = {
      url: `${API}/users/profile`,
      method: 'GET',
      headers: {
        Authorization: localStorage.getItem('ACCESS_TOKEN'),
      },
    };
    axios(option).then(col => {
      setProfile({
        image: col.data.results.profile_image_url,
        name: col.data.results.nickname,
      });
    });
  }, []);

  useEffect(() => {
    axios
      .get(`${API}/products/categories`)
      .then(res => setData(res.data.result[0].category_name));
  }, []);

  const goTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const getData = async () => {
    const res = await axios
      .get('http://localhost:3000/Data/Dong/ResultData.json')
      .then(res => setResultData(res.data));
  };

  useEffect(() => {
    getData();
  }, []);
  //setResultData(res.data)
  return (
    <QuizPage>
      <ResultMain>
        <ResultImg src={result} alt="resultImg" />
        <ResultText>
          <Recommend>Recommend</Recommend>
          <Opening>
            Made for <span>{profile.name}</span>
          </Opening>
          <SubOpening>
            Your recommendation is based on your answers and our database of
            clinical research. This health plan, made just for you, is
            recommended for you to feel your best today while supporting
            long-term health.
          </SubOpening>
          <CheckGoalInner>
            <GoalIcon src={profile.image} alt="symptom" />
            <GoalName></GoalName>
          </CheckGoalInner>
          <LinkWrapper>
            <GoLink to="/cart">Go Cart</GoLink>
            <GoLink to="/">Go Main</GoLink>
          </LinkWrapper>
        </ResultText>

        <ResultProducts>
          <RecommendNav>
            <Opening>
              Made for <span>{profile.name}</span>
            </Opening>
          </RecommendNav>
          <RecommendProducts>
            <Products>
              <ProductCategoryName>{data}</ProductCategoryName>
              <Period>30 day supply of nutrients tailored for you.</Period>
              <ProductList>
                {resultData &&
                  resultData.map(info => {
                    return (
                      <SpecificGoods key={info.result_id}>
                        <GoodsName>{info.result_goods_name}</GoodsName>
                        for your
                        <GoodsFor>{info.result_goods_for}</GoodsFor>
                      </SpecificGoods>
                    );
                  })}
              </ProductList>
              <Dosage>
                <WaterIcon />
                <TakeWater> Take daily with water</TakeWater>
              </Dosage>
            </Products>
            <ProductCard resultData={resultData} />
          </RecommendProducts>
        </ResultProducts>
        <TopBtn onClick={goTop}> </TopBtn>
      </ResultMain>
    </QuizPage>
  );
}

export default Result;

const QuizPage = styled.div`
  padding-top: 80px;
  width: 100%;
  height: 100vh;
  background: rgb(255, 244, 236);
`;

const ResultMain = styled.main`
  position: relative;
  height: 100%;
`;

const LinkWrapper = styled.form`
  display: flex;
`;
const GoLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 10px;
  width: 100px;
  height: 60px;
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

const TopBtn = styled(FaArrowAltCircleUp)`
  position: fixed;
  right: 30px;
  bottom: 30px;
  width: 50px;
  height: 50px;
`;

const ResultImg = styled.img`
  position: relative;
  width: 100%;
  height: 600px;
`;

const ResultText = styled.section`
  position: absolute;
  top: 140px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: auto;
`;

const Recommend = styled.p`
  padding-bottom: 5px;
  border-bottom: 2px solid ${({ theme }) => theme.mainOrange};
  font-size: 14px;
  letter-spacing: 1px;
`;

const Opening = styled.h1`
  margin-top: 10px;
  width: 510px;
  color: ${({ theme }) => theme.contentsBlack};
  text-align: center;
  font-weight: 700;
  font-size: 35px;
`;

const SubOpening = styled.h2`
  width: 630px;
  margin: 25px 0;
  color: rgb(74, 74, 74);
  font-family: ${({ theme }) => theme.Lora};
  text-align: center;
  font-size: 20px;
  line-height: 30px;
`;

const CheckGoalInner = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  width: 125px;
  background: none;
  border: none;
  outline: none;
`;

const GoalIcon = styled.img`
  width: 50px;
  height: 50px;
  border: 2px solid rgb(245, 241, 237);
  background: rgb(255, 255, 255);
`;

const GoalName = styled.p`
  margin: 12px 0;
  font-size: 14px;
`;

const ResultProducts = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: auto;
`;

const RecommendNav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80px;
  background: rgb(255, 255, 255);
  color: ${({ theme }) => theme.contentsBlack};
`;

const RecommendProducts = styled.section`
  display: flex;
`;

const Products = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px;
  width: 320px;
  text-align: center;
`;
const ProductCategoryName = styled.h1`
  margin-bottom: 20px;
  font-size: 26px;
`;
const Period = styled.h2`
  margin-bottom: 30px;
  width: 260px;
  color: rgb(74, 74, 74);
  font-size: 16px;
  font-family: ${({ theme }) => theme.Lora};
`;
const ProductList = styled.ul`
  margin-bottom: 25px;
`;
const SpecificGoods = styled.li`
  color: rgb(74, 74, 74);
  font-size: 18px;
  line-height: 1.5;
`;

const GoodsName = styled.span`
  margin-right: 5px;
  color: rgb(0, 0, 0);
  font-weight: 900;
`;
const GoodsFor = styled.span`
  margin-left: 5px;
  color: rgb(0, 0, 0);
`;
const Dosage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 35px;
  box-sizing: inherit;
  width: 300px;
  height: 40px;
  border-top: 1px solid lightgray;
  border-bottom: 1px solid lightgray;
`;
const WaterIcon = styled(FaTint)`
  font-size: 15px;
`;
const TakeWater = styled.span`
  margin: 10px;
`;
