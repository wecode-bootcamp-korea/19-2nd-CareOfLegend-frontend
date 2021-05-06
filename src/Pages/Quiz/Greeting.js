import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { API } from '../../Config';
import styled from 'styled-components';

function Greeting() {
  const [profile, setProfile] = useState({ image: null, name: '' });

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
  return (
    <QuizPage>
      <GreetingWrapper>
        <Mention>
          <Link to="/quiz/tem"> Nice to meet you, {profile.name}</Link>
        </Mention>
        <GreetingIcon src="https://media.giphy.com/media/YlXnVdWvAkl1AHXpGz/giphy.gif"></GreetingIcon>
      </GreetingWrapper>
    </QuizPage>
  );
}

export default Greeting;

const QuizPage = styled.div`
  padding-top: 80px;
  width: 100%;
  height: 100vh;
  background: rgb(255, 244, 236);
`;

const GreetingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 680px;
  height: 560px;
  letter-spacing: 1px;
`;

const Mention = styled.h1`
  margin-top: 80px;
  width: 510px;
  color: ${({ theme }) => theme.contentsBlack};
  font-family: ${({ theme }) => theme.Lora};
  text-align: center;
  font-size: 30px;
  line-height: 60px;
`;

const GreetingIcon = styled.img`
  margin-top: 20px;
  width: 80px;
  height: 80px;
`;
