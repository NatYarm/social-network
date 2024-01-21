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
      </InputArea>
      <ToolsArea>
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
        <Button $btnType="primary">Publish</Button>
      </ToolsArea>
    </StyledCreatePost>
  );
};

const StyledCreatePost = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  grid-area: create;
  padding: 20px;
  margin-bottom: 20px;
  min-height: 90px;
  width: 100%;
  border-bottom: 1px solid #f1f2f2;
`;

const InputArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
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
  font-size: 1.8rem;
`;

const ToolsArea = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 40px;
  padding: 0 20px;
`;

export default CreatePost;
