import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { FaUser, FaBoxOpen } from 'react-icons/fa';
import ShopDrop from '../Nav/Component/ShopDrop';
import LearnDrop from '../Nav/Component/LearnDrop';
import styled from 'styled-components';
import { API } from '../../Config';

function Nav() {
  const [data, setData] = useState([]);
  const [changeColor, setChangeColor] = useState(null);
  const [openCategory, setOpenCategory] = useState(-1);
  const [profile, setProfile] = useState({ name: '', image: null });
  const history = useHistory();

  const onScroll = () => {
    let y = window.scrollY;
    if (y > 120) {
      setChangeColor('white');
    } else {
      setChangeColor(null);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    axios
      .get(`${API}/products/categories`)
      .then(res => setData(res.data.result));
  }, []);

  useEffect(() => {
    const option = {
      url: `${API}/users/profile`,
      method: 'GET',
      headers: {
        Authorization: localStorage.getItem('ACCESS_TOKEN'),
      },
    };
    axios(option).then(col => {
      setProfile({
        image: col.data.results.profile_image_url,
        name: col.data.results.nickname,
      });
    });
  }, []);

  const goToLogin = () => {
    history.push('/login');
  };

  const goToMain = () => {
    history.push('/');
  };

  return (
    <NavWrapper onScroll={() => setChangeColor('white')}>
      <NavInner background={changeColor} color={changeColor}>
        <Categories>
          <ShopContainer>
            <Shop
              type="button"
              onMouseEnter={() => setOpenCategory(1)}
              onClick={() => setOpenCategory(1)}
            >
              SHOP
            </Shop>
            {openCategory === 1 && (
              <ShopDrop
                data={data}
                closeCategory={setOpenCategory}
                onMouseEnter={() => setChangeColor('white')}
              />
            )}
          </ShopContainer>
          <LearnContainer>
            <Learn
              type="button"
              onMouseEnter={() => setOpenCategory(2)}
              onClick={() => setOpenCategory(2)}
            >
              LEARN
            </Learn>
            {openCategory === 2 && (
              <LearnDrop
                data={data}
                closeCategory={setOpenCategory}
                onMouseEnter={() => setChangeColor('white')}
              />
            )}
          </LearnContainer>
          <Target type="button">
            <span>CARE/OF X TARGET</span>
            <New>NEW</New>
          </Target>
        </Categories>
        <MainTitle onClick={goToMain}> care/of/legend </MainTitle>
        {profile.name && profile.image ? (
          <NavIcon>
            <ProfileName onClick={goToLogin}>{profile.name}</ProfileName>
            <ProfileImage>
              <Img src={profile.image} alt="" />
            </ProfileImage>
            <GoCart to="/basket">
              <Box />
            </GoCart>
            <GoQuiz to="/quiz">Take the quiz</GoQuiz>
          </NavIcon>
        ) : (
          <NavIcon>
            <SignIn onClick={goToLogin}>SIGN IN</SignIn>
            <MyPage>
              <UserIcon />
            </MyPage>
            <GoCart to="/basket">
              <Box />
            </GoCart>
            <GoQuiz to="/quiz">Take the quiz</GoQuiz>
          </NavIcon>
        )}
      </NavInner>
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

const ShopContainer = styled.div``;

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

const LearnContainer = styled.div``;

const Learn = styled(Shop)``;
const Target = styled(Shop)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavIcon = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: auto;
`;

const ProfileName = styled(Link)`
  margin-left: 30px;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 2px;
  &:hover {
    color: ${({ theme }) => theme.mainOrange};
  }
`;

const ProfileImage = styled.div`
  width: 50px;
  height: 50px;
  margin: 0 0 5px 30px;
  border: 1px solid ${props => props.theme.mainOrange};
  border-radius: 50%;
  overflow: hidden;
`;

const Img = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  border: none;
  object-fit: cover;
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

const MainTitle = styled(Link)`
  font-size: 30px;
  font-weight: 700;
  letter-spacing: 2px;
  &:hover {
    color: ${({ theme }) => theme.mainOrange};
  }
`;

const SignIn = styled(Link)`
  margin-left: 30px;
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
  margin: 0 12px 0 30px;

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

const GoCart = styled(MyPage)`
  margin-left: 30px;
`;

const GoQuiz = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 165px;
  height: 50px;
  margin-left: 30px;
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
