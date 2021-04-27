import React from 'react';
import styled from 'styled-components';
import ProfileDrop from './ProfileDrop';

function ProfileBox({ OpenCategory }) {
  return (
    <div>
      <ShowProfile onMouseEnter={OpenCategory}>
        <UserName>DanielDanial</UserName>
        <ProfileImg></ProfileImg>
      </ShowProfile>
      {OpenCategory && <ProfileDrop />}
    </div>
  );
}

export default ProfileBox;

const ShowProfile = styled.div`
  position: absolute;
  top: 15px;
  right: 280px;
  display: flex;
  align-items: center;
  max-width: 200px;
`;
const UserName = styled.span`
  padding: 0 10px;
  font-weight: bold;
  letter-spacing: 2px;
  &:hover {
    color: ${({ theme }) => theme.mainOrange};
  }
`;
const ProfileImg = styled.img`
  width: 50px;
  height: 50px;
  border: 1px solid rgb(0, 0, 0);
  border-radius: 50px;
  background: rgb(255, 255, 255);
`;
