import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  margin-top: 20px;

  svg {
    cursor: pointer;
  }
`;

export const Content = styled.div`
  max-width: 1200px;
  margin: 0 30px;
`;

export const Body = styled.div`
  margin: 50px 0;
  min-height: 1000px;
  width: 90%;
`;

export const FirstBlock = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 850px) {
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;

    div {
      width: 100%;
      margin-bottom: 20px;
    }
  } ;
`;

export const LeftContent = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;

  .block {
    display: flex;
    justify-content: space-between;
    svg {
      cursor: pointer;
    }
  }

  > span {
    margin: 20px 0;
    font-size: 12px;
    color: #81868e;
  }

  span {
    font-size: 12px;
  }

  div {
    margin-top: 30px;
  }
`;

export const WrapperIcon = styled.div`
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    align-items: center;
    margin-top: 10px;

    svg {
      margin-right: 5px;
    }
  }
`;

export const RightContent = styled.div`
  width: 50%;
  height: 50%;
  display: flex;
  justify-content: flex-end;

  img {
    width: 80%;
  }
`;

export const List = styled.div`
  margin-top: 20px;
  min-height: 1000px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;

  img {
    height: 240px;
  }

  @media (max-width: 1050px) {
    grid-template-columns: repeat(3, 1fr);
    img {
      height: 200px;
      width: 130px;
    }
  }

  @media (max-width: 830px) {
    grid-template-columns: repeat(2, 1fr);
    img {
      height: 175px;
    }
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
