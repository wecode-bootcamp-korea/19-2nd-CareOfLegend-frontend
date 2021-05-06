import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { API } from '../../../Config';

const { localStorage, URL } = window;

const WelcomModal = props => {
  const { modalState, setModalState } = props;
  const [profile, setProfile] = useState({ nickName: '', sendImage: null });
  const [kakao, setKakao] = useState({ name: '', image: null });

  useEffect(() => {
    const option = {
      url: `${API}/users/profile`,
      method: 'GET',
      headers: {
        Authorization: localStorage.getItem('ACCESS_TOKEN'),
      },
    };
    axios(option).then(col => {
      setKakao({
        image: col.data.results.profile_image_url,
        name: col.data.results.nickname,
      });
    });
  }, []);

  const offModal = () => {
    let form = new FormData();
    form.append('json', profile.nickName);
    form.append('file', profile.sendImage);

    const option = {
      url: `${API}/users/profile`,
      method: 'POST',
      data: form,
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: localStorage.getItem('ACCESS_TOKEN'),
      },
    };
    axios(option)
      .then(() => {
        window.location.replace('/');
      })
      .catch(error => {
        console.log('failed', error);
      });
    setModalState(false);
  };

  const offModalHandler = e => {
    if (e.keyCode === 13 || e.type === 'click') {
      offModal();
    }
  };

  const changeIMG = e => {
    const IMAGE = URL.createObjectURL(e.target.files[0]);
    setKakao({ name: kakao.name, image: IMAGE });
    setProfile({ nickName: profile.nickName, sendImage: e.target.files[0] });
  };

  return (
    modalState && (
      <Welcome>
        <ModalContainer id="modalContainer" onClick={offModalHandler} />
        <Modal>
          <ModalInner>
            <WelcomeMessage>환영합니다. {kakao.name} 님!</WelcomeMessage>
            <ProfileContainer>
              <Profile>
                <Img src={kakao.image} alt="" />
              </Profile>
              <ImgChange id="input-file" type="file" onChange={changeIMG} />
              <ImgChangeFor for="input-file">
                <i class="fas fa-camera"></i>
              </ImgChangeFor>
            </ProfileContainer>
            <NewNickName>
              <NickName>What's your Nick-name?</NickName>
              <NickNameInput
                placeholder={kakao.name}
                onKeyUp={offModalHandler}
                onChange={e =>
                  setProfile({
                    nickName: e.target.value,
                    sendImage: profile.sendImage,
                  })
                }
              />
            </NewNickName>
            <ButtonContainer>
              <SaveButton onClick={offModalHandler}>SAVE</SaveButton>
            </ButtonContainer>
          </ModalInner>
        </Modal>
      </Welcome>
    )
  );
};

const Welcome = styled.div`
  ${props => props.theme.flexAllCenter}
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  opacity: 0.5;
  background-color: rgba(1, 1, 1, 1);
`;

const Modal = styled.div`
  ${props => props.theme.flexAllCenter}
  position: absolute;
  padding: 20px 20px;
  width: 400px;
  height: 500px;
  background-color: white;
  border-radius: 10px;
`;

const ModalInner = styled.div`
  display: inline-block;
  transition: 5s linear;
`;

const WelcomeMessage = styled.p`
  text-align: center;
  font-size: 25px;
  font-weight: bold;
`;

const ProfileContainer = styled.div`
  ${props => props.theme.flexAllCenter}
  position: relative;
  margin: 30px 0;
`;

const Profile = styled.div`
  width: 70px;
  height: 70px;
  margin-bottom: 5px;
  border: 1px solid ${props => props.theme.mainOrange};
  border-radius: 50%;
  overflow: hidden;
`;

const Img = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  border: none;
  object-fit: cover;
`;

const ImgChange = styled.input`
  display: none;
`;

const ImgChangeFor = styled.label`
  position: absolute;
  left: 58%;
  bottom: 12%;
  width: 10px;
  height: 10px;
  color: rgba(211, 211, 211, 1);

  i {
    font-size: 25px;
  }
`;

const NewNickName = styled.div`
  display: inline-block;
  width: 100%;
  height: auto;
  text-align: center;
`;

const NickName = styled.p`
  margin-bottom: 5px;
  width: 100%;
  font-size: 15px;
  font-weight: bold;
  text-align: left;
`;

const NickNameInput = styled.input`
  margin-bottom: 30px;
  padding: 0 10px;
  width: 100%;
  height: 40px;
  border: 1px solid ${props => props.theme.mainOrange};
  border-radius: 5px;
`;

const ButtonContainer = styled.div`
  margin-top: 10px;
  text-align: center;
`;

const SaveButton = styled.button`
  width: 80px;
  height: 30px;
  border: none;
  border-radius: 10px;
  background-color: ${props => props.theme.mainOrange};
  font-size: 15px;
  cursor: pointer;
`;

export default WelcomModal;
