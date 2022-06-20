import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.div`
  height: 95%;
  max-width: 1200px;
  margin: 0 30px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 55px;

  margin-bottom: 50px;

  > svg {
    width: 220px;
  }

  strong {
    margin-bottom: 15px;
  }

  span {
    margin-bottom: 15px;
    color: #81868e;
    font-size: 14px;
  }
`;

export const ControlList = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;

  margin: 20px 0;

  span {
    color: #81868e;
    font-size: 14px;
  }

  @media (max-width: 620px) {
    flex-direction: column;

    > div {
      display: flex;
      flex-direction: column;
      width: 100%;
    }
  }
`;

export const RightContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 70%;

  div {
    display: flex;
    align-items: center;

    span {
      color: #e12225;
      margin: 0 5px;
    }
  }
`;

export const List = styled.div`
  min-height: 1000px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-flow: row;

  @media (max-width: 1050px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 830px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 560px) {
    grid-template-columns: repeat(1, 1fr);
  } ;
`;

export const WrapperSpinner = styled.div`
  min-height: 1000px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Footer = styled.div`
  background-color: #e12225;
  width: 100%;
  height: 50px;
`;
