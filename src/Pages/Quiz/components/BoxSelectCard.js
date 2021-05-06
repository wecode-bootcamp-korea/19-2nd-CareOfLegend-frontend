import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import styled from 'styled-components';

function BoxSelectCard({ quizData, send }) {
  // useEffect(()=>{
  //   axios({
  //     method: 'post',
  //     url: '/',
  //     data: {
  //       product_id:
  //     }
  //   });
  // })

  return (
    <QnAWrapper>
      <QuestionWrapper>
        <Symptom>{quizData.symptom}</Symptom>
        <Question>{quizData.question}</Question>
        <SubQuestion>{quizData.sub_question}</SubQuestion>
      </QuestionWrapper>
      <AnswerWrapper>
        <CardWrapper>
          {quizData.answer_info &&
            quizData.answer_info.map(info => {
              return (
                <BoxSelect key={info.q_card_id} onClick={send} type="button">
                  <div>
                    <BoxImg src={info.q_card_img} alt={info.q_card_alt} />
                    <dl>
                      <BoxTitle>{info.card_title}</BoxTitle>
                      <BoxDescription>{info.card_description}</BoxDescription>
                    </dl>
                  </div>
                </BoxSelect>
              );
            })}
        </CardWrapper>
      </AnswerWrapper>
    </QnAWrapper>
  );
}

export default BoxSelectCard;

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

const CardWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

const BoxSelect = styled.button`
  margin: 18px;
  padding: 75px 35px;
  box-sizing: inherit;
  background: rgb(255, 255, 255);
  border: 2px solid rgb(255, 255, 255);
  border-radius: 10px;
  outline: none;
  cursor: pointer;
  &:hover {
    border: 2px solid rgb(67, 78, 100);
  }
`;

const BoxImg = styled.img`
  padding: 30px;
  box-sizing: inherit;
  width: 140px;
  height: 140px;
`;
const BoxTitle = styled.dt`
  margin: 25px auto 10px auto;
  text-align: center;
  font-size: 20px;
`;

const BoxDescription = styled.dd`
  margin: 10px 0;
  width: 240px;
  font-size: 16px;
  font-family: ${({ theme }) => theme.Lora};
  letter-spacing: 1px;
  line-height: 25px;
`;
