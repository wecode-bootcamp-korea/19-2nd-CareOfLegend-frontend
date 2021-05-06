import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Total from './Total';
import BasketProducts from './BasketProducts';
import { BASKET_API } from '../../../Config';

const Main = () => {
  const [productsData, setProductsData] = useState([]);

  const [total, setTotal] = useState([]);

  useEffect(() => {
    axios.get(`${BASKET_API}orders/carts/1`).then(res => {
      setProductsData(res.data.result);
    });
  }, []);

  useEffect(() => {
    setTotal(
      productsData.reduce(
        (sum, current) => sum + Number(current.product_price),
        0
      )
    );
  }, [productsData]);

  const deleteHandler = e => {
    axios.delete(`${BASKET_API}orders/carts-detail/${e.target.id}/1`);

    setProductsData(
      productsData.filter(i => i.product_id !== Number(e.target.id))
    );
  };

  return (
    <Basket>
      <Header>Vitamins</Header>
      <Contents>
        <BasketList>
          {productsData.map((elements, id) => (
            <BasketProducts
              id={id}
              deleteHandler={deleteHandler}
              data={elements}
              key={id}
            />
          ))}
        </BasketList>
        <Total total={total} />
      </Contents>
    </Basket>
  );
};

export default Main;

const Basket = styled.div`
  padding: 200px 200px 0 200px;
`;

const Header = styled.header`
  width: 700px;
  height: 50px;
  border-bottom: 1px solid black;
  font-size: 30px;
  font-weight: bold;
`;

const Contents = styled.article`
  display: flex;
  justify-content: space-between;
`;

const BasketList = styled.div`
  display: flex;
  flex-direction: column;
`;
