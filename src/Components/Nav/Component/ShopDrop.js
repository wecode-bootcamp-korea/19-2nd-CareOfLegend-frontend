import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function ShopDrop({ data, closeCategory }) {
  return (
    <ShopDropWrapper
      onMouseLeave={() => {
        closeCategory(false);
      }}
    >
      <ShopDropSub>
        {data.length &&
          data.map(item => {
            return (
              <DropCategory key={item.category_id}>
                <Category>{item.category_name} </Category>
                {item.subcategory_name &&
                  item.subcategory_name.map(list => {
                    return (
                      <SubCategory key={list.id}>
                        <Contents to="/productlist">
                          {list.subcategory_name}
                        </Contents>
                      </SubCategory>
                    );
                  })}
                <SeeAll>See all</SeeAll>
              </DropCategory>
            );
          })}
      </ShopDropSub>
      <ImgDrop>
        <ImgLink>
          <ImgTitle>Get your recommendation</ImgTitle>
          <ImgSubTitle> TAKE THE QUIZ</ImgSubTitle>
        </ImgLink>

        <ImgLink>
          <ImgTitle>
            Meet the Skin + Hair <br /> Collection
          </ImgTitle>
          <ImgSubTitle>SEE PRODUCTS</ImgSubTitle>
        </ImgLink>
      </ImgDrop>
    </ShopDropWrapper>
  );
}
export default ShopDrop;

const ShopDropWrapper = styled.div`
  position: absolute;
  top: 80px;
  left: 0;
  display: flex;
  flex-direction: row;
  width: 850px;
  margin-left: 40px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 10px;
`;

const ShopDropSub = styled.div`
  display: flex;
  flex-direction: row;
  width: auto;
  padding: 40px 0 40px 40px;
`;

const DropCategory = styled.ul`
  display: flex;
  flex-direction: column;
  &:hover {
    color: ${({ theme }) => theme.mainOrange};
  }
`;

const Category = styled.li`
  width: 180px;
  margin-bottom: 20px;
  font-size: 14px;
  letter-spacing: 1px;
`;

const SubCategory = styled.li`
  margin-bottom: 15px;
  font-size: 18px;
  font-weight: 300;
  letter-spacing: 1px;
`;

const Contents = styled(Link)`
  &:hover {
    color: ${({ theme }) => theme.mainOrange};
  }
`;

const SeeAll = styled(SubCategory)`
  color: ${({ theme }) => theme.mainOrange};
`;

const ImgDrop = styled.div`
  display: flex;
  flex-direction: column;
`;

const ImgLink = styled(Link)`
  width: 270px;
  height: 160px;
  padding: 16px;
  border: 1px solid rgb(255, 255, 255);
  background: pink;
  //background-image: url('https://pixabay.com/images/id-2207622/');
  cursor: pointer;
`;

const ImgTitle = styled.h1`
  margin-bottom: 5px;
  color: rgba(255, 255, 255, 1);
  font-size: 18px;
  letter-spacing: 1px;
  line-height: 20px;
`;

const ImgSubTitle = styled.h2`
  color: rgba(255, 255, 255, 1);
  font-size: 12px;
  letter-spacing: 1px;
`;
