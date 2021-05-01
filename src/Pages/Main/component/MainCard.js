import React from 'react';
import styled from 'styled-components';

function MainCard({ mainData }) {
  return (
    <MainCardWrapper>
      {mainData &&
        mainData.map(info => {
          return (
            <CardBox>
              <CardImg src={info.main_card_gif} alt={info.alt} />
              <CardInfo>
                <CardData>{info.text1}</CardData>
                <CardSubData>{info.text2}</CardSubData>
              </CardInfo>
            </CardBox>
          );
        })}
    </MainCardWrapper>
  );
}

export default MainCard;

const MainCardWrapper = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-top: 60px;
  text-align: center;
`;

const CardBox = styled.li`
  width: 280px;
`;

const CardImg = styled.img`
  width: 70px;
  height: 70px;
  margin-bottom: 30px;
`;

const CardInfo = styled.dl``;

const CardData = styled.dt`
  margin-bottom: 10px;
  font-size: 20px;
  font-family: ${({ theme }) => theme.Lora};
`;

const CardSubData = styled.dd`
  margin-bottom: 120px;
  color: rgb(127, 132, 139);
  font-size: 16px;
  line-height: 25px;
  letter-spacing: 1px;
`;
