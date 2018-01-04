import React from 'react';
import styled from 'styled-components';
import { compose, withReducer } from 'recompose';
import { getNextTrack } from './dataLayer';

export const ColumnOfButtonsWrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  margin-right: 1px;
  margin-left: 1px;
`;

export const columnReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_SELECTED_BOX': {
      const { clickedButton, track } = action;
      const { selectedButton } = state;
      if (clickedButton === selectedButton) {
        return { selectedButton: null };
      }
      return {
        ...state,
        selectedButton: clickedButton,
        track
      };
    }
    case 'TOGGLE_LOADING_STATE': {
      const { isLoading } = action;
      return { ...state, isLoading };
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
  const { selectedButton, track, isLoading } = state;
  const ColorButton = colorButton;
  const colorButtons = [1, 2, 3, 4].map(buttonNumber => (
    <ColorButton
      onClick={() => {
        dispatch({
          type: 'TOGGLE_SELECTED_BOX',
          clickedButton: buttonNumber,
          track: getNextTrack(
            track,
            buttonNumber,
            selectedButton,
            soundBank,
            audioFiles,
            clock,
            audioType,
            dispatch
          )
        });
      }}
      isLoading={isLoading}
      selected={buttonNumber === selectedButton}
      key={buttonNumber}
    />
  ));
  return <ColumnOfButtonsWrapper>{colorButtons}</ColumnOfButtonsWrapper>;
};

export default compose(
  withReducer('state', 'dispatch', columnReducer, { selectedButton: null })
)(ColumnOfButtons);
