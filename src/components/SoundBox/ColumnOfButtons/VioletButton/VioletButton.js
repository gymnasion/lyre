import styled, { css } from 'styled-components';
import { getBlinker, ButtonStyles } from '../../../../styles/ButtonStyles';

const violetColor = css`#a8a2e8`;
const blinker = getBlinker(violetColor);

const VioletButton = styled.button`
  ${ButtonStyles} ${props =>
      props.selected &&
      !props.isLoading &&
      css`
        background: ${violetColor};
      `} ${props =>
      props.isLoading &&
      props.selected &&
      css`
        animation: ${blinker} 1s steps(2, end) infinite;
      `};
`;

export default VioletButton;
