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
      {image && <PostImg src={image} alt="post-image" />}
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
          <PostText>{postContent}</PostText>
          <PostComment src={user11} user="Monica" />
          <PostComment src={user4} user="Travis" />
        </PostContent>
      </PostContainer>
    </StyledPost>
  );
};

const StyledPost = styled.div`
  border-radius: 4px;
  margin-bottom: 20px;
  background: #f8f8f8;
  outline: 1px solid ${theme.colors.lightGrey};
`;

const PostImg = styled.img`
  display: block;
  width: 100%;
  object-fit: contain;
`;

const PostContainer = styled.div`
  padding: 20px;
`;

const PostDetails = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
`;

const UserDetails = styled.div`
  display: flex;

  flex-direction: column;
  justify-content: center;
  gap: 10px;
`;

const Date = styled.span`
  font-size: 1.2rem;
`;

const Name = styled.h5`
  font-size: 1.6rem;
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

const PostText = styled.p`
  padding: 20px 0;
  border-style: solid;
  border-width: 1px 0;
  border-color: #e6e6e6;
`;

export default Post;
