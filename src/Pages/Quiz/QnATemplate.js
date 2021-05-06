import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import WriteInfo from './components/WriteInfo';
import BoxSelectCard from './components/BoxSelectCard';
import FiftyFifty from './components/FiftyFifty';
import CheckBtn from './components/CheckBtn';
import CheckGoal from './components/CheckGoal';
import styled from 'styled-components';

function QnATemplate() {
  const [quizInfo, setQuizInfo] = useState({});
  const history = useHistory();

  const goResult = () => {
    const temNum = quizInfo.quiz_num;
    if (temNum === 12) {
      alert('마지막 문제입니다.');
      history.push('/quiz/result');
    } else {
      axios.get('/Data/Dong/QuizData.json').then(res => {
        setQuizInfo(res.data[quizInfo.quiz_num++]);
      });
    }
  };

  useEffect(() => {
    axios.get('/Data/Dong/QuizData.json').then(res => {
      setQuizInfo(res.data[0]);
    });
  }, []);

  const Answer = {
    1: <CheckBtn send={goResult} quizData={quizInfo} />,
    2: <WriteInfo send={goResult} quizData={quizInfo} />,
    3: <CheckGoal send={goResult} quizData={quizInfo} />,
    4: <BoxSelectCard send={goResult} quizData={quizInfo} />,
    5: <BoxSelectCard send={goResult} quizData={quizInfo} />,
    6: <BoxSelectCard send={goResult} quizData={quizInfo} />,
    7: <FiftyFifty send={goResult} quizData={quizInfo} />,
    8: <CheckBtn send={goResult} quizData={quizInfo} />,
    9: <BoxSelectCard send={goResult} quizData={quizInfo} />,
    10: <FiftyFifty send={goResult} quizData={quizInfo} />,
    11: <BoxSelectCard send={goResult} quizData={quizInfo} />,
    12: <BoxSelectCard send={goResult} quizData={quizInfo} />,
  };

  return (
    <QuizPage>
      <QuizTemplate>{Answer[quizInfo.quiz_num]}</QuizTemplate>
    </QuizPage>
  );
}

export default QnATemplate;
const QuizPage = styled.div`
  padding-top: 80px;
  width: 100%;
  height: 100vh;
  background: rgb(255, 244, 236);
`;
const QuizTemplate = styled.main`
  position: relative;
  top: 80px;
`;
