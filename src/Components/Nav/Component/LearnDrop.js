import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Nav({ closeCategory }) {
  return (
    <LearnDropWrapper
      onMouseLeave={() => {
        closeCategory(false);
      }}
    >
      <LearnDrop>
        <DropCategory>
          <SubCategory>Honesty</SubCategory>
          <SubCategory>Quality</SubCategory>
          <SubCategory>Sustainability</SubCategory>
        </DropCategory>
        <ImgDrop>
          <ImgTitle>FAQS</ImgTitle>
          <ImgSubTitle>Questions? We've got you covered</ImgSubTitle>
        </ImgDrop>
      </LearnDrop>
    </LearnDropWrapper>
  );
}
export default Nav;

const LearnDropWrapper = styled.div`
  position: absolute;
  top: 80px;
  left: 135px;
  display: flex;
  flex-direction: column;
  width: 235px;
  border-radius: 10px;
  background: rgb(255, 255, 255);
`;

const LearnDrop = styled.div`
  display: flex;
  flex-direction: column;
`;

const DropCategory = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 20px 25px 25px 25px;
`;

const SubCategory = styled.li`
  margin-top: 15px;
  font-size: 18px;
  font-weight: 300;
  letter-spacing: 1px;
  &:hover {
    color: ${({ theme }) => theme.mainOrange};
  }
`;

const ImgDrop = styled(Link)`
  display: flex;
  flex-direction: column;
  padding: 15px 30px;
  border: none;
  background: skyblue;
  //background-image: url('https://pixabay.com/images/id-1915423/');
`;

const ImgTitle = styled.h1`
  margin-bottom: 5px;
  font-size: 10px;
  letter-spacing: 1px;
`;

const ImgSubTitle = styled.h2`
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 1px;
  line-height: 20px;
`;
