import React from 'react';
import styled from 'styled-components';

function CheckBtn({ quizData, send }) {
  return (
    <QnAWrapper>
      <QuestionWrapper>
        <Symptom>{quizData.symptom}</Symptom>
        <Question>{quizData.question}</Question>
        <SubQuestion>{quizData.sub_question}</SubQuestion>
      </QuestionWrapper>
      <AnswerWrapper>
        <BtnCheckWrapper>
          {quizData.answer_info &&
            quizData.answer_info.map(info => {
              return (
                <BtnCheck type="button" key={info.id}>
                  <RadioBtn type="checkbox"></RadioBtn>
                  <span>{info.content}</span>
                </BtnCheck>
              );
            })}
        </BtnCheckWrapper>
        <GoNextBtn onClick={send}>Next</GoNextBtn>
      </AnswerWrapper>
    </QnAWrapper>
  );
}

export default CheckBtn;

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

const BtnCheckWrapper = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 800px;
`;

const BtnCheck = styled.button`
  display: flex;
  align-items: center;
  margin: 10px;
  padding: 20px;
  box-sizing: content-box;
  width: 300px;
  height: 30px;
  border: 2px solid rgb(255, 255, 255);
  border-radius: 50px;
  background: rgb(255, 255, 255);
  font-size: 20px;
  cursor: pointer;

  &:hover {
    border: 2px solid rgb(67, 78, 100);
  }
`;

const RadioBtn = styled.input`
  margin-right: 10px;
  width: 26px;
  height: 26px;
  background: none;
  border: 2px solid rgb(245, 241, 237);
  border-radius: 50%;

  &:hover {
    border: 2px solid rgb(67, 78, 100);
    background: rgb(52, 88, 235);
  }
`;

const GoNextBtn = styled.button`
  margin-top: 30px;
  margin-left: 320px;
  width: 160px;
  height: 60px;
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
