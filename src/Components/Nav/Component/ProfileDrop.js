import React from 'react';
import styled from 'styled-components';

function ProfileDrop() {
  return (
    <ProfileDropWrapper>
      <ProfileContent>More</ProfileContent>
      <ProfileContent>Sign out</ProfileContent>
    </ProfileDropWrapper>
  );
}

export default ProfileDrop;

const ProfileDropWrapper = styled.ul`
  position: absolute;
  top: 80px;
  right: 220px;
  display: flex;
  flex-direction: column;
  padding: 20px 25px 25px 25px;
  background: rgb(255, 255, 255);
`;

const ProfileContent = styled.li`
  margin: 10px 0;
  font-size: 18px;
  font-weight: 300;
  letter-spacing: 1px;
  &:hover {
    color: ${({ theme }) => theme.mainOrange};
  }
`;
