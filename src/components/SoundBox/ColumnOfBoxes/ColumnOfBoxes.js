import React from 'react';
import styled from 'styled-components';
import SimpleBox from './SimpleBox';
import { compose, withState, withHandlers } from 'recompose';

export const ColumnOfBoxesWrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  margin-right: 1px;
  margin-left: 1px;
`;

export const ColumnOfBoxes = ({ clickedBox, color, toggleClickedBox }) => {
  const simpleBoxes = [1, 2, 3, 4].map(el => (
    <SimpleBox
      onClick={toggleClickedBox.bind(this, el)}
      clicked={el === clickedBox}
      key={el}
      color={color}
    />
  ));
  return <ColumnOfBoxesWrapper>{simpleBoxes}</ColumnOfBoxesWrapper>;
};

export default compose(
  withState('clickedBox', 'toggleBox', false),
  withHandlers({
    toggleClickedBox: ({ toggleBox, clickedBox }) => {
      return (el, event) => {
        return toggleBox(clickedBox === el ? false : el);
      };
    }
  })
)(ColumnOfBoxes);
