import { css, keyframes } from 'styled-components';

export const getBlinker = color => keyframes`
  from {
    background: ${color};
  }
  to {
    transform: darkgray;
  }
`;

export const ButtonStyles = css`
  background: darkgray;
  border: 0;
  height: 20vh;
  width: 20vh;
  max-height: 20vw;
  max-width: 20vw;
  display: block;
  margin-top: 1px;
  margin-bottom: 1px;
`;
