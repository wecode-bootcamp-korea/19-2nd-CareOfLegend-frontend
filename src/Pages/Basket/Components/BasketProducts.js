import React from 'react';
import styled from 'styled-components';

const BasketList = props => {
  const { data, deleteHandler } = props;

  return (
    <ProductList>
      <Products>
        <ProductImage src={data.product_image} alt={data.product_name} />
        <ProductContents>
          <ProductTitle>{data.product_name}</ProductTitle>
          <ProductPrice>{Number(data.product_price)}$</ProductPrice>
        </ProductContents>
        <ProductDelete onClick={deleteHandler} id={data.product_id}>
          ❌
        </ProductDelete>
      </Products>
    </ProductList>
  );
};

export default BasketList;

const ProductList = styled.div`
  margin-top: 50px;
`;

const Products = styled.div`
  position: relative;
  display: flex;
  width: 700px;
  height: 130px;
  border-bottom: solid 1px ${props => props.theme.subGray};
`;

const ProductImage = styled.img`
  width: 110px;
  height: 110px;
  background-color: pink;
`;

const ProductContents = styled.div`
  ${props => props.theme.flexCenter}
  flex-direction: column;
`;

const ProductTitle = styled.h1`
  margin-left: 15px;
  font-weight: bold;
`;

const ProductPrice = styled.h2`
  margin: 0 0 20px 15px;
  font-weight: bold;
`;

const ProductDelete = styled.div`
  position: absolute;
  color: ${props => props.theme.subGray};
  right: 0;
`;
