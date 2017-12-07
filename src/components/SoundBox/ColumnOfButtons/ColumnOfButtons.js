import React from 'react';
import styled from 'styled-components';
import { compose, withReducer } from 'recompose';
import { changeTrack, stopTrack } from './dataLayer';

export const ColumnOfButtonsWrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  margin-right: 1px;
  margin-left: 1px;
`;

export const columnReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_SELECTED_BOX': {
      const { clickedButton, soundBank, audioFiles, clock, audioType } = action;
      const { selectedButton, getEvent } = state;
      if (getEvent) {
        getEvent.then(stopTrack);
      }
      const newSelectedButton =
        clickedButton === selectedButton ? false : clickedButton;
      if (newSelectedButton) {
        const getNewEvent = changeTrack(
          newSelectedButton,
          soundBank,
          audioFiles,
          clock,
          audioType
        );
        return {
          selectedButton: newSelectedButton,
          getEvent: getNewEvent
        };
      }
      return { selectedButton: newSelectedButton };
    }
    default: {
      return state;
    }
  }
};

export const ColumnOfButtons = ({
  state,
  dispatch,
  colorButton,
  soundBank,
  audioFiles,
  clock,
  audioType
}) => {
  const { selectedButton } = state;
  const ColorButton = colorButton;
  const colorButtons = [1, 2, 3, 4].map(buttonNumber => (
    <ColorButton
      onClick={() =>
        dispatch({
          type: 'TOGGLE_SELECTED_BOX',
          clickedButton: buttonNumber,
          soundBank,
          audioFiles,
          clock,
          audioType
        })
      }
      selected={buttonNumber === selectedButton}
      key={buttonNumber}
    />
  ));
  return <ColumnOfButtonsWrapper>{colorButtons}</ColumnOfButtonsWrapper>;
};

export default compose(
  withReducer('state', 'dispatch', columnReducer, { selectedButton: false })
)(ColumnOfButtons);
