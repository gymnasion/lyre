import styled, { css } from 'styled-components';
import ButtonStyles from '../../../../../styles/ButtonStyles';

const SandButton = styled.button`
  ${ButtonStyles} ${props => props.clicked && css`background: #f0cc90;`};
`;

export default SandButton;
