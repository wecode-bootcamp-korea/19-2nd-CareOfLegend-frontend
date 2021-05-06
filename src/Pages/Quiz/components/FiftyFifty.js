import React from 'react';
import styled from 'styled-components';

function FiftyFifty({ quizData, send }) {
  return (
    <QnAWrapper>
      <QuestionWrapper>
        <Symptom>{quizData.symptom}</Symptom>
        <Question>{quizData.question}</Question>
        <SubQuestion>{quizData.sub_question}</SubQuestion>
      </QuestionWrapper>
      <AnswerWrapper>
        <SelectBtnWrapper>
          <SelectBtn type="button" onClick={send}>
            Yes
          </SelectBtn>
          <SelectBtn type="button" onClick={send}>
            No
          </SelectBtn>
        </SelectBtnWrapper>
      </AnswerWrapper>
    </QnAWrapper>
  );
}

export default FiftyFifty;

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

const SelectBtnWrapper = styled.form``;

const SelectBtn = styled.button`
  margin: 10px;
  width: 160px;
  height: 160px;
  background: rgb(255, 255, 255);
  border: 2px solid rgb(255, 255, 255);
  border-radius: 50%;
  outline: none;
  font-size: 20px;
  text-align: center;
  cursor: pointer;

  &:hover {
    border: 2px solid rgb(67, 78, 100);
  }
`;
