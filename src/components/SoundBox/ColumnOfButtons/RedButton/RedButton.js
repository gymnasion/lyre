import styled, { css } from 'styled-components';
import ButtonStyles from '../../../../styles/ButtonStyles';

const RedButton = styled.button`
  ${ButtonStyles} ${props => props.selected && css`background: #e2818a;`};
`;

export default RedButton;
