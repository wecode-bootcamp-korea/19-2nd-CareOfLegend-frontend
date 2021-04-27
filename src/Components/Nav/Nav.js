import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FaUser, FaBoxOpen } from 'react-icons/fa';
import ShopDrop from '../Nav/Component/ShopDrop';
import LearnDrop from '../Nav/Component/LearnDrop';
import styled from 'styled-components';
import ProfileBox from './Component/ProfileBox';

function Nav() {
  const [data, setData] = useState([]);
  const [changeColor, setChangeColor] = useState(false);
  const [openCategory, setOpenCategory] = useState(-1);
  const [login, setLogin] = useState(false);

  const onScroll = () => {
    let y = window.scrollY;
    if (y > 120) {
      setChangeColor(true);
    } else {
      setChangeColor(false);
    }
  };

  useEffect(() => {
    console.log(changeColor);
  }, [changeColor]);

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    axios.get('/Data/Dong/NavDropData.json').then(res => setData(res.data));
  }, []);

  // useEffect(() => {
  //   axios
  //     .get('http://10.58.0.71:8000/products/categories')
  //     .then(res => setData(res.data.result));
  // }, []);

  return (
    <NavWrapper onScroll={() => setChangeColor('white')}>
      <NavInner background={changeColor} color={changeColor}>
        <Categories>
          <Shop
            type="button"
            onMouseEnter={() => setOpenCategory(1)}
            onClick={() => setOpenCategory(1)}
          >
            SHOP
          </Shop>
          <Learn
            type="button"
            onMouseEnter={() => setOpenCategory(2)}
            onClick={() => setOpenCategory(2)}
          >
            LEARN
          </Learn>
          <Target type="button">
            <span>CARE/OF X TARGET</span>
            <New>NEW</New>
          </Target>
        </Categories>
        <MainTitle> care/of/legend </MainTitle>
        <NavIcon>
          <SignIn>SIGN IN</SignIn>
          <MyPage>
            <UserIcon />
          </MyPage>
          <GoCart to="/cart">
            <Box />
          </GoCart>

          <GoQuiz to="/quiz">Take the quiz</GoQuiz>
        </NavIcon>
      </NavInner>
      {openCategory === 1 && (
        <ShopDrop data={data} closeCategory={setOpenCategory} />
      )}
      {openCategory === 2 && (
        <LearnDrop data={data} closeCategory={setOpenCategory} />
      )}
    </NavWrapper>
  );
}

export default Nav;

const NavWrapper = styled.nav`
  position: fixed;
  width: 100%;
  margin: 0 auto;
  z-index: 1;
`;

const NavInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: auto;
  padding: 0 50px;
  background: ${props => props.background && 'white'};
  color: ${props => props.color && props.theme.mainOrange};

  &:hover {
    background: rgb(255, 255, 255);

    h1 {
      color: ${({ theme }) => theme.mainOrange};
    }
  }
`;

const Categories = styled.div`
  width: auto;
  display: flex;
  justify-content: space-around;
`;

const Shop = styled.button`
  height: 80px;
  margin-right: 30px;
  border: none;
  background: none;
  font-size: 12px;
  font-weight: 550;
  letter-spacing: 2px;

  &:hover {
    color: ${({ theme }) => theme.mainOrange};
  }
`;
const Learn = styled(Shop)``;
const Target = styled(Shop)``;

const NavIcon = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: auto;
`;

const New = styled.span`
  padding: 5px 10px;
  margin-left: 10px;
  border-radius: 10px;
  color: rgba(255, 255, 255, 1);
  background: rgba(0, 0, 0, 1);
  font-size: 8px;
  font-family: ${({ theme }) => theme.Lora};
`;

const MainTitle = styled.h1`
  font-size: 30px;
  font-weight: 500;
  letter-spacing: 2px;
`;

const SignIn = styled(Link)`
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 2px;
  &:hover {
    color: ${({ theme }) => theme.mainOrange};
  }
`;

const MyPage = styled(Link)`
  display: flex;
  align-items: center;
  height: 80px;
  margin: 0 12px;

  i {
    font-size: 32px;
  }
`;

const UserIcon = styled(FaUser)`
  font-size: 30px;
`;

const Box = styled(FaBoxOpen)`
  font-size: 30px;
`;

const GoCart = styled(MyPage)``;

const GoQuiz = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 165px;
  height: 50px;
  margin-left: 12px;
  border: 2px solid ${({ theme }) => theme.mainOrange};
  border-radius: 30px;
  background: ${({ theme }) => theme.mainOrange};
  color: rgba(255, 255, 255, 1);
  font-size: 15px;
  letter-spacing: 1px;
  &:hover {
    color: ${({ theme }) => theme.mainOrange};
    background: rgba(255, 255, 255, 1);
  }
`;
