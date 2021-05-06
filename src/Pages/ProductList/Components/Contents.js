import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Category from './Category';
import FrontDisplay from './FrontDisplay';
import ProductListNav from './ProductListNav';
import Main from './Main';
import { API } from '../../../Config';

const Contents = () => {
  const [categoryData, setCategoryData] = useState([]);

  const [categoryValue, setCategoryValue] = useState();

  const [healthValue, setHealthValue] = useState();

  const getData = url => {
    axios({ method: 'get', url: `${url}` }).then(res => {
      setCategoryData(res.data.result);
    });
  };

  useEffect(() => {
    getData(`${API}/products/subcategories`);
  }, []);

  const navVisible = value => {
    if (value === 'category') {
      getData(`${API}/products/subcategories`);
    }

    if (value === 'health') {
      getData(`${API}/products/health-goals`);
    }
  };

  const categoryHandler = category => {
    setCategoryValue(category.target.id);
  };

  const healthHandler = health => {
    setHealthValue(health.target.id);
  };

  return (
    <article>
      <FrontDisplay />
      <ProductListNav navVisible={navVisible} />
      <MainContent>
        <Category
          categoryHandler={categoryHandler}
          healthHandler={healthHandler}
          category={categoryData}
        />
        <Main
          categoryHandler={categoryHandler}
          healthValue={healthValue}
          categoryValue={categoryValue}
        />
      </MainContent>
    </article>
  );
};

export default Contents;

const MainContent = styled.div`
  display: flex;
  background-color: white;
`;
