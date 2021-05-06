import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Card from './Card';
import { API } from '../../../Config';

const Main = props => {
  const [card, setCard] = useState();

  const { categoryValue, healthValue } = props;

  const getData = url => {
    axios({ method: 'get', url: `${API}/products${url}` }).then(res => {
      setCard(res.data.result);
    });
  };

  useEffect(() => {
    //처음 전체 데이터
    getData(`/products`);
  }, []);

  useEffect(() => {
    // health goal 데이터
    getData(`/products?health_goal=${healthValue}`);
  }, [healthValue]);

  useEffect(() => {
    // category 데이터
    if (categoryValue === 'all') {
      getData(`/products`);
    } else if (categoryValue === 'recently') {
      getData(`/products?is_new=True`);
    } else getData(`/products?sub_category=${categoryValue}`);
  }, [categoryValue]);

  const basketHandler = id => {
    //장바구니 담기
    axios({
      method: 'POST',
      url: `${API}/orders/carts`,
      data: {
        user_id: 1,
        product_id: Number(id),
      },
    });
  };

  return (
    <Layout>
      {card &&
        card.map((elements, id) => (
          <Card
            key={id}
            id={elements.product_id}
            cimage={elements.product_tumbnail_image}
            himage={elements.product_image}
            title={elements.product_name}
            subtitle={elements.product_sub_name}
            price={elements.product_price}
            description={elements.product_description}
            basketHandler={basketHandler}
          />
        ))}
    </Layout>
  );
};

export default Main;

const Layout = styled.div`
  display: grid;
  grid: repeat(3, 200px);
  grid: auto-flow / 1fr 1fr 1fr 1fr;
  padding: 60px 260px 100px 50px;
`;
