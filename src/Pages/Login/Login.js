import React, { useState } from 'react';
import { withRouter, useHistory } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import { API } from '../../Config';
import WelcomeModal from './component/WelcomeModal';

const { Kakao, localStorage } = window;

const Login = () => {
  const [modalState, setModalState] = useState(false);

  const history = useHistory();

  const kakaoPopup = () => {
    Kakao.Auth.login({
      success: function (kakao) {
        const option = {
          url: `${API}/users/kakao-login`,
          method: 'POST',
          headers: {
            Authorization: kakao.access_token,
          },
        };
        axios(option).then(col => {
          localStorage.setItem('ACCESS_TOKEN', col.data.access_token);
          if (col.data.is_new) {
            setModalState(true);
          } else {
            history.push('/');
          }
        });
      },
      fail: function (error) {
        alert(error);
      },
    });
  };

  const KakaoClick = () => {
    Kakao.Auth.getStatusInfo(res => {
      if (res.status === 'connected') {
        history.push('/');
      } else {
        kakaoPopup();
      }
    });
  };

  return (
    <LoginPage>
      <LoginContainer>
        <ExistingCustomer>LOGIN AS EXISTING CUSTOMER</ExistingCustomer>
        <Email>
          <EmailName>EMAIL</EmailName>
          <EmailInput type="text" />
        </Email>
        <Password>
          <PasswordName>PASSWORD</PasswordName>
          <PasswordInput type="password" />
        </Password>
        <LoginButton>Login</LoginButton>
        <KakaoButton
          jskey={'fd91c8c7010ddb4e505a6252c7e1160e'}
          onClick={KakaoClick}
        >
          kakao Login
        </KakaoButton>
        <Forgot>Forgot Password?</Forgot>
      </LoginContainer>
      {modalState && (
        <WelcomeModal modalState={modalState} setModalState={setModalState} />
      )}
    </LoginPage>
  );
};

const LoginPage = styled.div`
  ${props => props.theme.flexAllCenter}
  /* padding-top: 100px; */
  width: 100%;
  height: 100vh;
`;

const LoginContainer = styled.div`
  display: inline-block;
  text-align: center;
  width: 500px;
`;

const ExistingCustomer = styled.h1`
  display: inline-block;
  margin-bottom: 50px;
  border-bottom: 1.5px solid ${props => props.theme.mainOrange};
  font-size: 15px;
  font-weight: bold;
  text-align: center;
`;

const Email = styled.div`
  display: inline-block;
  margin-bottom: 25px;
  width: 400px;
  height: auto;
  text-align: center;
`;

const EmailName = styled.p`
  margin-bottom: 5px;
  width: 100%;
  font-size: 15px;
  font-weight: bold;
  text-align: left;
`;

const EmailInput = styled.input`
  padding-left: 10px;
  width: 400px;
  height: 40px;
  border: 2px solid rgba(245, 241, 237, 1);
  border-radius: 5px;
`;

const Password = styled(Email)``;

const PasswordName = styled(EmailName)``;

const PasswordInput = styled(EmailInput)``;

const LoginButton = styled.button`
  margin-bottom: 15px;
  width: 400px;
  height: 40px;
  background-color: ${props => props.theme.mainOrange};
  border: none;
  border-radius: 30px;
  color: white;
  font-size: 15px;
  cursor: pointer;
`;

const KakaoButton = styled(LoginButton)`
  color: rgba(1, 1, 1, 1);
  background-color: rgba(255, 232, 18, 1);
`;

const Forgot = styled.a`
  display: inline-block;
  color: ${props => props.theme.mainOrange};
  font-family: ${props => props.theme.Lora};
  font-size: 15px;
  cursor: pointer;
`;

export default withRouter(Login);
