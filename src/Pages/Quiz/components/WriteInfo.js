import React from 'react';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import styled from 'styled-components';

function WriteInfo({ quizData, send }) {
  return (
    <QnAWrapper>
      <QuestionWrapper>
        <Symptom>{quizData.symptom}</Symptom>
        <Question>{quizData.question}</Question>
        <SubQuestion>{quizData.sub_question}</SubQuestion>
      </QuestionWrapper>
      <AnswerWrapper>
        <InputReply />
        <GoNext onClick={send} />
      </AnswerWrapper>
    </QnAWrapper>
  );
}

export default WriteInfo;

const QnAWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 680px;
  height: 560px;
  letter-spacing: 1px;
`;

const QuestionWrapper = styled.article`
  margin-bottom: 30px;
  text-align: center;
`;

const Symptom = styled.p`
  margin-bottom: 10px;
  font-size: 12px;
  font-weight: 500px;
  text-align: center;
`;

const Question = styled.p`
  width: 680px;
  text-align: center;
  font-size: 32px;
  font-family: ${({ theme }) => theme.Lora};
`;

const SubQuestion = styled.p`
  margin-top: 16px;
  width: 680px;
`;

const AnswerWrapper = styled.article``;

const InputReply = styled.input`
  padding: 25px 20px;
  margin: 20px auto;
  width: 560px;
  height: 40px;
  box-sizing: content-box;
  border: 3px solid rgb(67, 78, 100);
  border-radius: 8px;
  background-color: rgb(255, 255, 255);
  font-size: 26px;
  font-family: ${({ theme }) => theme.Lora};
`;

const GoNext = styled(FaArrowAltCircleRight)`
  position: relative;
  top: 5px;
  right: 50px;
  color: rgb(67, 78, 100);
  font-size: 28px;
  letter-spacing: 3px;
  font-weight: 100;

  button {
    width: 22px;
    height: 22px;
    cursor: pointer;
  }
`;
