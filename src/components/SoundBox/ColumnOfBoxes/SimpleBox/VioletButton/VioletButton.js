import styled, { css } from 'styled-components';
import ButtonStyles from '../../../../../styles/ButtonStyles';

const VioletButton = styled.button`
  ${ButtonStyles} ${props => props.clicked && css`background: #a8a2e8;`};
`;

export default VioletButton;
