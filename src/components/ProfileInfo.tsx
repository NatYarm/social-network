import styled from 'styled-components';
import Avatar from './Avatar';
import theme from '../styles/Theme';

type PropsType = {
  userName: string;
  avatar: string;
};

const ProfileInfo: React.FC<PropsType> = ({ userName, avatar }) => {
  return (
    <StyledProfileInfo>
      <Avatar src={avatar} $avaType="lg" />
      <Info>
        <Name>{userName}</Name>
      </Info>
    </StyledProfileInfo>
  );
};

const StyledProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 240px;
  width: 100%;
  position: absolute;
  top: 210px;
  z-index: 99;

  @media ${theme.media.laptop} {
    left: 50%;
    transform: translate(-50%);
  }
`;

const Info = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Name = styled.h3`
  padding: 20px 0 20px;
  font-weight: 500;
  font-size: 2rem;
  text-align: center;
  color: ${theme.colors.accentSecondary};
`;

export default ProfileInfo;
