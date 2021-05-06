import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Greeting() {
  return (
    <QuizPage>
      <GreetingWrapper>
        <Mention>
          <Link to="/quiz/tem"> Nice to meet you, "입력한닉네임"</Link>
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
