import styled from 'styled-components';
import { BsPencilSquare, BsImages } from 'react-icons/bs';
import { HiMiniVideoCamera } from 'react-icons/hi2';
import { FaRegMap } from 'react-icons/fa';

import Avatar from './Avatar';
import Button from './Button';
import theme from '../styles/Theme';
import { user } from '../user';

const icons = [
  { Icon: BsPencilSquare },
  { Icon: BsImages },
  { Icon: HiMiniVideoCamera },
  { Icon: FaRegMap },
];

const CreatePost = () => {
  return (
    <StyledCreatePost>
      <InputArea>
        <Avatar src={user.avatar} $avaType="sm" />
        <Field placeholder="Write what you wish" />
        <IconsList>
          {icons.map((i, idx) => {
            const { Icon } = i;
            return (
              <li key={idx}>
                <Icon />
              </li>
            );
          })}
        </IconsList>
      </InputArea>
      <ButtonWrapper>
        <Button $btnType="primary">Publish</Button>
      </ButtonWrapper>
    </StyledCreatePost>
  );
};

const StyledCreatePost = styled.div`
  position: relative;
  grid-area: create;
  padding: 20px;
  margin: 30px auto;
  width: 100%;

  &::before {
    content: '';
    display: inline-block;
    height: 1px;
    width: 100%;
    background-color: rgb(189, 192, 196, 0.4);
    position: absolute;
    bottom: -10px;
    left: 0;
  }
`;

const InputArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Field = styled.textarea`
  border: 1px solid #bdc0c4;
  border-radius: 3px;
  height: 60px;
  width: 260px;
  margin-left: 10px;
  padding: 2px;

  &:focus-visible {
    outline: 1px solid ${theme.colors.fontSecondary};
  }

  &::placeholder {
    padding: 5px 0 0 5px;
    font-size: 12px;
  }
`;

const IconsList = styled.ul`
  display: flex;
  gap: 10px;
  color: ${theme.colors.fontSecondary};
  margin-left: 40px;
  font-size: 1.8rem;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export default CreatePost;
