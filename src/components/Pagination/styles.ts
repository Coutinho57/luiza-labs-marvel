import styled, { css } from 'styled-components';

interface IPaper {
  selected?: boolean;
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 20px 0;
  color: #e12225;
  font-size: 14px;
  line-height: 120%;
`;

export const Paper = styled.div<IPaper>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  margin-right: 10px;
  cursor: pointer;
  border: 1px solid #e12225;
  border-radius: 8px;

  ${props =>
    props.selected &&
    css`
      border: 1px solid #e12225;
      background-color: #e12225;
      color: #fff;
    `}
`;

export const PaperChevron = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  margin-right: 10px;
  cursor: pointer;
`;
