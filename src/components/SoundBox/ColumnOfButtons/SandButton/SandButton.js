import styled, { css } from 'styled-components';
import { getBlinker, ButtonStyles } from '../../../../styles/ButtonStyles';

const sandColor = css`#f0cc90`;
const blinker = getBlinker(sandColor);

const SandButton = styled.button`
  ${ButtonStyles} ${props =>
      props.selected &&
      !props.isLoading &&
      css`
        background: ${sandColor};
      `} ${props =>
      props.isLoading &&
      props.selected &&
      css`
        animation: ${blinker} 1s steps(2, end) infinite;
      `};
`;

export default SandButton;
