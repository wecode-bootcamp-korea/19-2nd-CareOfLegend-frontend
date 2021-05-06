import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

function CheckGoal({ quizData, send }) {
  const [color, setColor] = useState(false);

  // useEffect(()=>{
  //   axios({
  //     method: 'post',
  //     url: '/',
  //     data: {
  //       product_id:
  //     }
  //   });
  // })

  const changeColor = () => {
    return setColor(true);
  };

  return (
    <QnAWrapper>
      <QuestionWrapper>
        <Symptom>{quizData.symptom}</Symptom>
        <Question>{quizData.question}</Question>
        <SubQuestion>{quizData.sub_question}</SubQuestion>
      </QuestionWrapper>
      <AnswerWrapper>
        <CheckGoalWrapper>
          {quizData.answer_info &&
            quizData.answer_info.map((info, idx) => {
              return (
                <CheckGoalInner key={info.quiz_num}>
                  <CheckBtnOff onClick={changeColor} color={color}>
                    <GoalIcon src={info.goal_img} alt={info.goal_alt} />
                  </CheckBtnOff>
                  <GoalName>{info.goal_name}</GoalName>
                </CheckGoalInner>
              );
            })}
        </CheckGoalWrapper>
        <GoNextBtn onClick={send}>Next</GoNextBtn>
      </AnswerWrapper>
    </QnAWrapper>
  );
}

export default CheckGoal;

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

const CheckGoalWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 5px;
`;

const CheckGoalInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  width: 125px;
  background: none;
  border: none;
  outline: none;
`;

const CheckBtnOff = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  width: 120px;
  height: 120px;
  border: 2px solid rgb(245, 241, 237);
  border-radius: 50%;
`;

const CheckBtnOn = styled(CheckBtnOff)`
  background: ${props => props.color && props.theme.mainOrange};
`;

const GoalIcon = styled.img`
  padding: 25px;
  width: 100px;
  height: 100px;
  border: 2px solid rgb(245, 241, 237);
  border-radius: 50%;
  background: rgb(255, 255, 255);
`;

const GoalName = styled.p`
  margin: 12px 0;
  font-size: 14px;
`;

const GoNextBtn = styled.button`
  margin-top: 30px;
  margin-left: 370px;
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
