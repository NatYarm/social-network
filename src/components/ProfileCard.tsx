import styled from "styled-components";
import { user } from "../user";
import ProfileInfo from "./ProfileInfo";
import Avatar from "./Avatar";

const ProfileCard = () => {
  return (
    <StyledProfileCard>
      <Background>
        <Avatar src={user.avatar} $avaType="sm" $border="6px solid white" />
        <UserName>{user.userName}</UserName>
      </Background>
    </StyledProfileCard>
  );
};

const StyledProfileCard = styled.div``;

const Background = styled.div`
  display: flex;
  background: linear-gradient(
      to bottom,
      rgba(39, 170, 225, 0.8),
      rgba(28, 117, 188, 0.8)
    ),
    url(${user.background});
  width: 100%;
  min-height: 90px;
  background-size: cover;
  background-position: center;
  border-radius: 5px;
  margin-bottom: 40px;

  ${Avatar} {
    position: relative;
    float: left;
    top: -20px;
    left: 10px;
  }
`;

const UserName = styled.h5`
  display: flex;
  width: 100%;
  color: #fff;
  font-size: 1.6rem;
  align-items: center;
  justify-content: center;
`;
export default ProfileCard;
