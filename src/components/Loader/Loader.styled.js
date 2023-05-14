import styled from 'styled-components';

export const SpinnerEl = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  font-size: 24px;
  margin-right: 10px;
  animation: icon-spin 2s infinite linear;
  @keyframes icon-spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(359deg);
    }
  }
`;

export const SpinnerContainer = styled.div`
  display: flex;
  display: flex;
  justify-content: center;
  padding-top: 10px;
  padding-bottom: 10px;
  align-items: center;
  font-size: 24px;
`;
