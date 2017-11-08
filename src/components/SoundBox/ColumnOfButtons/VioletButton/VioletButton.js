import styled, { css } from 'styled-components';
import ButtonStyles from '../../../../styles/ButtonStyles';

const VioletButton = styled.button`
  ${ButtonStyles} ${props => props.selected && css`background: #a8a2e8;`};
`;

export default VioletButton;
