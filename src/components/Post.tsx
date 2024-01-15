import styled from 'styled-components';
import { BiLike, BiComment } from 'react-icons/bi';

import user11 from '../assets/images/user-11.jpeg';
import user4 from '../assets/images/user-4.jpeg';
import { formatDate } from '../helpers/helpers';
import Avatar from './Avatar';
import theme from '../styles/Theme';
import PostComment from './PostComment';

import { PostType } from '../user';

type PropsType = {
  userPost: PostType;
  avatar: string;
  userName: string;
};

const Post = ({ userPost, avatar, userName }: PropsType) => {
  const { image, postContent, likes, comments } = userPost;

  const postDate = formatDate();

  return (
    <StyledPost>
      <PostImg src={image} alt="christmas carousel" />
      <PostContainer>
        <PostDetails>
          <Avatar src={avatar} $avaType="sm" />
          <UserDetails>
            <Name>{userName}</Name>
            <Date>{postDate}</Date>
          </UserDetails>
          <Reactions>
            <ReactionWrap>
              <BiLike /> <span>{likes}</span>
            </ReactionWrap>
            <ReactionWrap>
              <BiComment /> <span>{comments}</span>
            </ReactionWrap>
          </Reactions>
        </PostDetails>
        <PostContent>
          <LineDivider />
          <PostText>{postContent}</PostText>
          <LineDivider />
          <PostComment src={user11} user="Monica" />
          <PostComment src={user4} user="Travis" />
        </PostContent>
      </PostContainer>
    </StyledPost>
  );
};

const StyledPost = styled.div`
  background: #f8f8f8;
  outline: 1px solid #e6e6e6;
  margin-bottom: 20px;
  border-radius: 2px;
`;

const PostImg = styled.img`
  width: 100%;
  object-fit: contain;
`;

const PostContainer = styled.div`
  padding: 20px;
`;

const PostDetails = styled.div`
  display: flex;
`;

const UserDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  margin-left: 20px;
`;

const Date = styled.span`
  font-size: 1.2rem;
`;

const Name = styled.h5`
  color: ${theme.colors.accentSecondary};
`;

const Reactions = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  svg {
    font-size: 20px;
  }
`;

const ReactionWrap = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  gap: 5px;

  span {
    font-size: 1.4rem;
  }
`;

const PostContent = styled.div`
  margin-left: 80px;
`;
const PostText = styled.p``;

const LineDivider = styled.div`
  height: 1px;
  border-top: 1px solid #e6e6e6;
  width: 100%;
  margin: auto;
  margin: 10px 0;
`;

export default Post;
