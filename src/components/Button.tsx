import styled, { css } from 'styled-components';
import theme from '../styles/Theme';

type BtnPropsType = {
  color?: string;
  fontSize?: string;
  $btnType: 'primary' | 'outlined';
};

const btnTypes = {
  primary: css<BtnPropsType>`
    color: ${theme.colors.fontPrimary};
    background-color: ${theme.colors.accentSecondary};

    &:hover {
      background-color: #0999d8;
    }
  `,

  outlined: css<BtnPropsType>`
    color: ${theme.colors.accentPrimary};
    border: 2px solid ${theme.colors.accentPrimary};
    background-color: transparent;

    &:hover {
      background-color: ${theme.colors.accentPrimary};
      border-color: ${theme.colors.accentPrimary};
      color: ${theme.colors.fontPrimary};
    }
  `,
};

const Button = styled.button<BtnPropsType>`
  border-radius: 30px;
  text-align: center;
  padding: 10px 20px;
  font-family: 'Rubik', sans-serif;
  font-size: ${(props) => props.fontSize || '1.4rem'};
  font-weight: 500;

  &:hover {
    transition: background-color 0.25s ease-in-out;
  }

  &:focus-visible {
    outline: 1px solid ${(props) => props.color};
  }

  ${(props) => btnTypes[props.$btnType]};
`;

export default Button;
