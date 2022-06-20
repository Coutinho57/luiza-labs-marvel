import styled, { keyframes } from 'styled-components';

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);
  border-top: 6px solid #e12225;
  border-right: 6px solid #e12225;
  border-bottom: 6px solid #e12225;
  border-left: 5px solid black;
  background: transparent;
  width: 90px;
  height: 90px;
  border-radius: 50%;
`;

export default Spinner;
