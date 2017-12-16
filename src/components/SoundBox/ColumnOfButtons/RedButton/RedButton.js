import styled, { css } from 'styled-components';
import { getBlinker, ButtonStyles } from '../../../../styles/ButtonStyles';

const redColor = css`#e2818a`;
const blinker = getBlinker(redColor);

const RedButton = styled.button`
  ${ButtonStyles} ${props =>
      props.selected &&
      !props.isLoading &&
      css`
        background: ${redColor};
      `} ${props =>
      props.isLoading &&
      props.selected &&
      css`
        animation: ${blinker} 1s steps(2, end) infinite;
      `};
`;

export default RedButton;
