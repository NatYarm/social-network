import { v1 } from 'uuid';
import cubes from './assets/images/cubes-blanket.webp';
import mainUserAvatar from './assets/images/mainUser.jpeg';
import carousel from './assets/images/christmas.webp';
import cocktails from './assets/images/cocktails.webp';

export type UserType = {
  userId: string;
  userName: string;
  avatar: string;
  background?: string;
  posts?: PostType[];
};

export type PostType = {
  postId: string;
  image?: string;
  postContent: string;
  likes?: number;
  comments?: number;
};

const userPosts: PostType[] = [
  {
    postId: v1(),
    image: carousel,
    postContent:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores voluptate molestiae eaque earum, doloribus laboriosam iste excepturi? Corporis modi voluptate obcaecati consectetur est non, aperiam, nobis recusandae sequi omnis exercitationem eligendi nulla doloribus unde provident ad ducimus delectus veritatis minima.',
    likes: 24,
    comments: 2,
  },
  {
    postId: v1(),
    image: cocktails,

    postContent:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores voluptate molestiae eaque earum, doloribus laboriosam iste excepturi? Corporis modi voluptate obcaecati consectetur est non, aperiam, nobis recusandae sequi omnis exercitationem eligendi nulla doloribus unde provident ad ducimus delectus veritatis minima.',
    likes: 16,
    comments: 1,
  },
];

export const user = {
  userId: v1(),
  userName: 'Sophie Clark',
  avatar: mainUserAvatar,
  background: cubes,
  posts: userPosts,
};
