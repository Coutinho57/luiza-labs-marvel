import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused?: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: rgba(244, 129, 129, 0.2);
  border-radius: 20px;
  padding: 10px 20px;
  width: 100%;
  color: #e62429;
  display: flex;
  align-items: center;
  & + div {
    margin-top: 8px;
  }
  ${props =>
    props.isFocused &&
    css`
      border: 2px solid #e62429;
    `}

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #e62429;
    &::placeholder {
      color: #e62429;
    }
  }
  svg {
    height: 15px;
    width: 15px;
    margin-right: 16px;
  }
`;
