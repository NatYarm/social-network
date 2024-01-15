import Post from './Post';
import { user, UserType } from '../user';

import styled from 'styled-components';

const Posts = () => {
  const { userName, avatar, posts }: UserType = user;

  return (
    <PostContainer>
      {posts.map(post => (
        <Post
          key={post.postId}
          userPost={post}
          avatar={avatar}
          userName={userName}
        />
      ))}
    </PostContainer>
  );
};

const PostContainer = styled.div`
  grid-area: post;
`;

export default Posts;
