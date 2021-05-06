import React from 'react';
import styled from 'styled-components';

const Total = props => {
  const { total } = props;

  return (
    <TotalList>
      <Subtotal ParentStyle={ParentStyle}>
        <SubtotalTitle ChildStyle={ChildStyle}>Subtotal</SubtotalTitle>
        <SubtotalPrice ChildStyle={ChildStyle}>{total} $</SubtotalPrice>
      </Subtotal>
      <Shipping ParentStyle={ParentStyle}>
        <ShippingTitle ChildStyle={ChildStyle}>Shipping</ShippingTitle>
        <ShippingPrice ChildStyle={ChildStyle}>
          {total < 20 ? '8 $' : 'free'}
        </ShippingPrice>
      </Shipping>
      <Sale ParentStyle={ParentStyle}>
        <SaleTitle ChildStyle={ChildStyle}>Sales Tax</SaleTitle>
        <SalePrice ChildStyle={ChildStyle}>----</SalePrice>
      </Sale>
      <Totals ParentStyle={ParentStyle}>
        <TotalTitle ChildStyle={ChildStyle}>Today's total</TotalTitle>
        <TotalPrice ChildStyle={ChildStyle}>
          {total < 20 ? total + 8 : total} $
        </TotalPrice>
      </Totals>
      <Order>Order</Order>
    </TotalList>
  );
};

export default Total;

const TotalList = styled.aside`
  display: flex;
  width: 350px;
  height: 400px;
  background-color: rgb(250, 248, 246);
  flex-direction: column;
`;

const Subtotal = styled.div`
  ${props => props.ParentStyle}
`;

const SubtotalTitle = styled.h1`
  ${props => props.ChildStyle}
`;

const SubtotalPrice = styled.h1`
  ${props => props.ChildStyle}
`;

const Shipping = styled.div`
  ${props => props.ParentStyle}
`;

const ShippingTitle = styled.h1`
  ${props => props.ChildStyle}
`;

const ShippingPrice = styled.h1`
  ${props => props.ChildStyle}
`;

const Sale = styled.div`
  ${props => props.ParentStyle}
`;

const SaleTitle = styled.h1`
  ${props => props.ChildStyle}
`;

const SalePrice = styled.h1`
  ${props => props.ParentStyle}
`;

const Totals = styled.div`
  ${props => props.ParentStyle}
`;

const TotalTitle = styled.h1`
  ${props => props.ChildStyle}
`;

const TotalPrice = styled.h1`
  ${props => props.ChildStyle}
`;

const Order = styled.button`
  width: 200px;
  height: 50px;
  margin: 0 auto;
  border: none;
  color: white;
  font-size: 20px;
  background-color: ${props => props.theme.mainOrange};
`;

const ChildStyle = {
  fontSize: '20px',
};

const ParentStyle = {
  display: 'flex',
  padding: '30px',
  justifyContent: 'space-between',
};
