import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import styled from 'styled-components';

function ProductCard({ resultData }) {
  const [x, setX] = useState(0);

  const goLeft = () => {
    x === 0 ? setX(0) : setX(x + 60);
  };

  const goRight = () => {
    x === -60 * (resultData.length - 1)
      ? setX(-60 * (resultData.length - 1))
      : setX(x - 60);
  };

  return (
    <CardWrapper>
      <ProductsSlider>
        <ProductsCardWrapper style={{ transform: `translateX(${x}%)` }}>
          {resultData &&
            resultData.map(info => {
              return (
                <ProductsCard key={info.result_id}>
                  <GoodsImg src={info.result_img} />
                  <ContentWrapper>
                    <GoodsInfo>{info.result_goods_info}</GoodsInfo>
                    <Recommend>We Recommend</Recommend>
                    <GoodsName>{info.result_goods_name}</GoodsName>
                  </ContentWrapper>
                  <LearnMore to="/productlist">Learn more </LearnMore>
                </ProductsCard>
              );
            })}
        </ProductsCardWrapper>
      </ProductsSlider>
      <LeftBtn>
        <ToLeft onClick={goLeft} />
      </LeftBtn>
      <RightBtn onClick={goRight}>
        <ToRight />
      </RightBtn>
    </CardWrapper>
  );
}

export default ProductCard;

const CardWrapper = styled.article`
  position: relative;
`;
const ProductsSlider = styled.div`
  display: flex;
  width: 880px;
  overflow: hidden;
`;

const Btn = styled.button`
  position: absolute;
  top: 220px;
  width: 50px;
  height: 50px;
  border: none;
  outline: none;
  border-radius: 50%;
  color: rgb(255, 255, 255);
  background: ${({ theme }) => theme.mainOrange};
`;

const LeftBtn = styled(Btn)`
  left: -20px;
`;
const RightBtn = styled(Btn)`
  right: -20px;
`;

const ToLeft = styled(FaChevronLeft)`
  color: rgb(255, 255, 255);
`;
const ToRight = styled(FaChevronRight)`
  color: rgb(255, 255, 255);
`;

const ProductsCardWrapper = styled.ul`
  display: flex;
  margin: 20px 8px;
`;

const ProductsCard = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 10px;
  width: auto;
  border-radius: 10px;
  background: rgb(255, 255, 255);
`;
const GoodsImg = styled.img`
  width: 270px;
  height: 160px;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
`;

const GoodsInfo = styled.p`
  margin: 20px 0;
  width: 230px;
  height: 80px;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: 1px;
  overflow: hidden;
`;

const Recommend = styled.p`
  padding-bottom: 3px;
  border-bottom: 2px solid ${({ theme }) => theme.mainOrange};
  font-size: 12px;
  letter-spacing: 1px;
`;
const GoodsName = styled.h1`
  margin: 10px 0 50px 0;
  font-size: 22px;
  font-weight: bold;
`;

const LearnMore = styled(Link)`
  margin-bottom: 20px;
  width: 230px;
  color: ${({ theme }) => theme.mainOrange};
  font-size: 18px;
`;
