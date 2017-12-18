import styled, { css } from 'styled-components';
import { ButtonStyles, getBlinker } from '../../../styles/ButtonStyles';

const getButton = color => {
  const blinker = getBlinker(color);
  return styled.button`
    ${ButtonStyles} ${props =>
        props.selected &&
        !props.isLoading &&
        css`
          background: ${color};
        `} ${props =>
        props.isLoading &&
        props.selected &&
        css`
          animation: ${blinker} 1s steps(2, end) infinite;
        `};
  `;
};

export default getButton;
