import React from 'react';
import styled from 'styled-components';
import { compose, withReducer } from 'recompose';

export const ColumnOfButtonsWrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  margin-right: 1px;
  margin-left: 1px;
`;

export const columnReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_SELECTED_BOX': {
      const { clickedButton } = action;
      return clickedButton === state ? false : clickedButton;
    }
    default: {
      return state;
    }
  }
};

export const ColumnOfButtons = ({ state, dispatch, colorButton }) => {
  const ColorButton = colorButton;
  const colorButtons = [1, 2, 3, 4].map(buttonNumber => (
    <ColorButton
      onClick={() =>
        dispatch({ type: 'TOGGLE_SELECTED_BOX', clickedButton: buttonNumber })}
      selected={buttonNumber === state}
      key={buttonNumber}
    />
  ));
  return <ColumnOfButtonsWrapper>{colorButtons}</ColumnOfButtonsWrapper>;
};

export default compose(withReducer('state', 'dispatch', columnReducer, false))(
  ColumnOfButtons
);
