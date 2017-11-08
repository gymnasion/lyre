import styled, { css } from 'styled-components';
import ButtonStyles from '../../../../styles/ButtonStyles';

const GreenButton = styled.button`
  ${ButtonStyles} ${props => props.selected && css`background: #98e1d6;`};
`;

export default GreenButton;
