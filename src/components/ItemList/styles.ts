import styled from 'styled-components';

export const Container = styled.div`
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  img {
    height: 75%;
    width: 200px;
    border-bottom: 2px solid #e62429;
  }
`;

export const WrapperLike = styled.div`
  margin-top: 20px;
  font-size: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 200px;

  svg {
    cursor: pointer;
  }
`;
