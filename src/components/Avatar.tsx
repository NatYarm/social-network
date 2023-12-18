import styled, { css } from 'styled-components';

type AvatarPropsType = {
  size?: string;
  src: string;
  $avaType: 'sm' | 'lg';
};

const Avatar = styled.img<AvatarPropsType>`
  height: 200px;
  width: 200px;
  border-radius: 50%;

  //sm
  ${(props) =>
    props.$avaType === 'sm' &&
    css<AvatarPropsType>`
      height: ${(props) => props.size || '60px'};
      width: ${(props) => props.size || '60px'};
    `}

  //lg
		${(props) =>
    props.$avaType === 'lg' &&
    css<AvatarPropsType>`
      height: ${(props) => props.size || '200px'};
      width: ${(props) => props.size || '200px'};
      border: 10px solid #fff;
    `}
`;

export default Avatar;
