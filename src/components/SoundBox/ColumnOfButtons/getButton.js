import styled, { css } from 'styled-components';
import { ButtonStyles, getBlinker } from '../../../styles/ButtonStyles';

const getButton = color => {
  const blinker = getBlinker(color);
  return styled.button`
    ${ButtonStyles} ${props => {
        if (props.selected) {
          return props.isLoading
            ? css`
                animation: ${blinker} 1s steps(2, end) infinite;
              `
            : css`
                background: ${color};
              `;
        }
      }};
  `;
};

export default getButton;
