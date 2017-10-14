import styled, { css } from 'styled-components';
import ButtonStyles from '../../../../../styles/ButtonStyles';

const GreenButton = styled.button`
  ${ButtonStyles} ${props => props.clicked && css`background: #98e1d6;`};
`;

export default GreenButton;
