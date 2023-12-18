import styled from 'styled-components';
import Avatar from './Avatar';
import theme from '../styles/Theme';

type PostCommentPropsType = {
  src: string;
  user: string;
};

const PostComment = ({ src, user }: PostCommentPropsType) => {
  return (
    <StyledPostComment>
      <Avatar $avaType="sm" size="50px" src={src} />
      <CommentText>
        <ProfileLink href="/">{user}</ProfileLink>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
        incidunt amet nam nobis assumenda quas ab! Explicabo vero enim animi?
      </CommentText>
    </StyledPostComment>
  );
};

const StyledPostComment = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 20px 0;
`;

const ProfileLink = styled.a`
  color: ${theme.colors.accentPrimary};
  margin-right: 5px;
  font-weight: 500;
`;

const CommentText = styled.p``;

export default PostComment;
