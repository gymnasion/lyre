import React from 'react';
import styled from 'styled-components';
import { compose, withReducer, lifecycle } from 'recompose';

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
        dispatch({ type: 'TOGGLE_SELECTED_BOX', clickedButton: buttonNumber })
      }
      selected={buttonNumber === state}
      key={buttonNumber}
    />
  ));
  return <ColumnOfButtonsWrapper>{colorButtons}</ColumnOfButtonsWrapper>;
};

const loadTrack = (type, trackNumber, context, soundBank, URL) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.open('GET', URL, true);
    request.responseType = 'arraybuffer';
    request.onload = () => {
      context.decodeAudioData(request.response, buffer => {
        const createNode = () => {
          const node = context.createBufferSource();
          node.buffer = buffer;
          node.connect(context.destination);
          return node;
        };
        const duration = createNode().buffer.duration;
        soundBank[type + trackNumber] = { createNode, duration };
        resolve();
      });
    };
    request.send();
  });
};

const startTrack = (type, trackNumber, context, clock, soundBank, event) => {
  if (event) {
    event.clear();
    event.bufferNode.stop();
  }
  event = clock
    .callbackAtTime(event => {
      const bufferNode = soundBank[type + trackNumber].createNode();
      bufferNode.start();
      event.bufferNode = bufferNode;
    }, context.currentTime)
    .repeat(soundBank[type + trackNumber].duration);
  return event;
};

export const ColumnOfButtonsWithState = compose(
  withReducer('state', 'dispatch', columnReducer, false)
)(ColumnOfButtons);

export default compose(
  withReducer('state', 'dispatch', columnReducer, false),
  lifecycle({
    componentWillUpdate({
      state,
      soundBank,
      audioFiles,
      context,
      clock,
      type
    }) {
      if (state) {
        if (!soundBank[type + state]) {
          const url = audioFiles[type][state - 1];
          loadTrack(type, state, context, soundBank, url).then(() => {
            this.event = startTrack(
              type,
              state,
              context,
              clock,
              soundBank,
              this.event
            );
          });
        } else {
          this.event = startTrack(
            type,
            state,
            context,
            clock,
            soundBank,
            this.event
          );
        }
      } else {
        if (this.event) {
          this.event.clear();
          this.event.bufferNode.stop();
        }
      }
    }
  })
)(ColumnOfButtons);
