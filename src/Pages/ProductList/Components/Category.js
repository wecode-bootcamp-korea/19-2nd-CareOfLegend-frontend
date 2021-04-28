import React from 'react';
import styled from 'styled-components';

const Category = props => {
  const { category, categoryHandler, healthHandler } = props;
  return (
    <Aside>
      <LeftCategory>
        <DefaultNav>
          <DefaultNavContents id="all" onClick={categoryHandler}>
            Shop All
          </DefaultNavContents>
          <DefaultNavContents id="recently" onClick={categoryHandler}>
            Recently Added
          </DefaultNavContents>
        </DefaultNav>
        {category.length < 4
          ? category.map((elements, id) => (
              <CategoryListTitle key={id}>
                {elements.name}
                {elements.subcategories.map((i, key) => (
                  <CategoryList
                    key={key}
                    onClick={categoryHandler}
                    id={i.subcategory_id}
                  >
                    {i.name}
                  </CategoryList>
                ))}
              </CategoryListTitle>
            ))
          : category.map((elements, id) => (
              <CategoryList
                className="true"
                id={elements.health_goal_id}
                onClick={healthHandler}
                key={id}
              >
                <CategoryImoge
                  id={elements.health_goal_id}
                  src={elements.icon_url}
                />
                <div id={elements.health_goal_id}>{elements.name}</div>
              </CategoryList>
            ))}
      </LeftCategory>
    </Aside>
  );
};

export default Category;

const Aside = styled.div`
  position: sticky;
  height: 100%;
  top: 0;
`;

const LeftCategory = styled.ul`
  width: 30%;
  height: 100%;
  padding: 50px 0 0 260px;
  flex-direction: column;
`;

const DefaultNav = styled.li`
  padding: 10px 10px 10px 15px;
`;

const DefaultNavContents = styled.div`
  padding-bottom: 10px;
  font-size: 14px;
`;

const CategoryListTitle = styled.ul`
  padding: 10px 10px 10px 15px;
  font-size: 12px;
  color: ${props => props.theme.subGray};
`;

const CategoryList = styled.li`
  display: flex;
  padding: 10px 0px 5px 0;
  font-size: 16px;
  color: black;

  .true& {
    padding-left: 10px;
  }
`;

const CategoryImoge = styled.img`
  width: 20px;
  height: 20px;
`;
