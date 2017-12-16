import styled, { css } from 'styled-components';
import { getBlinker, ButtonStyles } from '../../../../styles/ButtonStyles';

const greenColor = css`#98e1d6`;
const blinker = getBlinker(greenColor);

const GreenButton = styled.button`
  ${ButtonStyles} ${props =>
      props.selected &&
      !props.isLoading &&
      css`
        background: ${greenColor};
      `} ${props =>
      props.isLoading &&
      props.selected &&
      css`
        animation: ${blinker} 1s steps(2, end) infinite;
      `};
`;

export default GreenButton;
