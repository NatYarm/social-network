import styled from 'styled-components';
import avatar from '../assets/images/my-avatar.jpeg';
import Avatar from './Avatar';

const ProfileInfo = () => {
  return (
    <StyledProfileInfo>
      <Avatar src={avatar} $avaType="lg" />
      <Info>
        <Name>Natalia Yarmolinskaya</Name>
        <Title>Web Developer</Title>
      </Info>
    </StyledProfileInfo>
  );
};

const StyledProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 220px;
  width: 100%;
  position: absolute;
`;

// const Avatar = styled.img`
//   height: 180px;
//   width: 180px;
//   border-radius: 50%;
//   border: 5px solid #fff;
// `;

const Info = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Name = styled.h3`
  padding: 20px 0 20px;
  font-weight: 400;
  font-size: 2rem;
  text-align: center;
`;

const Title = styled.p``;

export default ProfileInfo;
