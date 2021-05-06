import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { QUIZ_API } from '../../Config';
import QnATemplate from './QnATemplate';
import Intro from './Intro';
import Greeting from './Greeting';
import Result from './Result';
import styled from 'styled-components';

function Quiz() {
  const [quizData, setQuizData] = useState([]);
  const [resultData, setResultData] = useState();

  const Template = {
    1: <Intro />,
    2: <Greeting />,
    3: <QnATemplate quizData={quizData} />,
    4: <Result resultData={resultData} />,
  };

  useEffect(() => {
    axios.get('./Data/Dong/QuizData.json').then(res => setQuizData(res.data));
    axios
      .get('./Data/Dong/ResultData.json')
      .then(res => setResultData(res.data));
  }, []);

  return <QuizPage>{Template[1]} </QuizPage>;
}

export default Quiz;

const QuizPage = styled.div`
  padding-top: 80px;
  width: 100%;
  height: 100vh;
  background: rgb(255, 244, 236);
`;
