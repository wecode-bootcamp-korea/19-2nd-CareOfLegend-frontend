import React, { useState } from 'react';
import styled from 'styled-components';

const ProductListNav = props => {
  const [visible, setVisible] = useState(true);

  const navHandler = e => {
    if (e.target.id === 'category' && visible === false) {
      setVisible(true);
      props.navVisible('category');
    }

    if (e.target.id === 'health' && visible === true) {
      setVisible(false);
      props.navVisible('health');
    }
  };

  return (
    <Nav>
      <NavContent>
        <Shop overlappedCode={overlappedCode}>SHOP BY:</Shop>
        <Category
          id="category"
          overlappedCode={overlappedCode}
          className={visible}
          onClick={navHandler}
        >
          Category
        </Category>
        <Health
          id="health"
          overlappedCode={overlappedCode}
          className={!visible}
          onClick={navHandler}
        >
          Health Goal
        </Health>
      </NavContent>
    </Nav>
  );
};

export default ProductListNav;

const Nav = styled.div`
  position: sticky;
  width: 100%;
  height: 50px;
  padding: 0 200px 0 200px;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.15);
  top: 70px;
  background-color: white;
  z-index: 1;
`;

const NavContent = styled.div`
  ${props => props.theme.flexAllCenter}
  width: 30%;
  height: 100%;
  color: ${props => props.theme.detailBlack};
`;

const Shop = styled.span`
  ${props => props.overlappedCode};
  font-size: 11px;
`;

const Category = styled.span`
  ${props => props.overlappedCode};
  font-size: 15px;

  .true& {
    border-bottom: 2px solid ${props => props.theme.mainOrange};
  }
`;

const Health = styled.span`
  ${props => props.overlappedCode};
  font-size: 15px;

  .true& {
    border-bottom: 2px solid ${props => props.theme.mainOrange};
  }
`;

const overlappedCode = {
  display: 'flex',
  height: '100%',
  padding: '0 10px 0 10px',
  justifyContent: 'center',
  alignItems: 'center',
  fontWeight: 'bold',
};
