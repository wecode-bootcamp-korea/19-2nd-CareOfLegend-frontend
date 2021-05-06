import React, { useState } from 'react';
import styled from 'styled-components';

const Card = props => {
  const {
    title,
    subtitle,
    price,
    description,
    id,
    cimage,
    himage,
    basketHandler,
  } = props;

  const [add, setAdd] = useState('add');

  const addHandler = e => {
    if (add === 'add') {
      setAdd('Added');
      basketHandler(e.target.id);
    }
  };

  return (
    <MainCard>
      <CardList>
        {himage !== undefined ? (
          <CardImage src={himage} alt={title} />
        ) : (
          <CardImage src={cimage} alt={title} />
        )}
        <CardTitle>{title}</CardTitle>
        <CardSubTitle>
          {subtitle}
          {description.map((i, key) => (
            <CardContents key={key}>{i}</CardContents>
          ))}
        </CardSubTitle>
      </CardList>
      <CardButton id={id} onClick={addHandler}>
        <Price>{price} $</Price>
        <Add className={add}>{add}</Add>
      </CardButton>
    </MainCard>
  );
};

export default Card;

const CardList = styled.div`
  position: relative;
  width: 220px;
  height: 300px;
  margin: 10px 10px 0 10px;
  background-color: white;
  border-radius: 10px 10px 0 0;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 123px;
  background-color: skyblue;
  border-radius: 10px 10px 0 0;
`;

const CardTitle = styled.h1`
  padding: 20px 20px 10px 20px;
  font-size: 20px;
  font-weight: bold;
`;

const CardSubTitle = styled.ol`
  padding: 5px 20px 50px 20px;
  font-size: 14px;
  color: ${props => props.theme.subGray};
`;

const CardContents = styled.li`
  padding-top: 5px;
  font-size: 7px;
`;

const CardButton = styled.button`
  display: flex;
  width: 218px;
  height: 50px;
  margin: 0 auto;
  background-color: white;
  border: none;
  border-radius: 0 0 10px 10px;
  align-items: center;
  justify-content: space-between;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const Price = styled.h2`
  padding-left: 10px;
`;

const Add = styled.h3`
  padding-right: 10px;
  color: ${props => props.theme.mainOrange};

  .Added& {
    color: ${props => props.theme.subGray};
  }
`;

const MainCard = styled.div`
  display: flex;
  flex-direction: column;
`;
