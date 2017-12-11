import React, { Component } from 'react';
import ColumnOfButtons from './ColumnOfButtons';
import GreenButton from './ColumnOfButtons/GreenButton';
import RedButton from './ColumnOfButtons/RedButton';
import SandButton from './ColumnOfButtons/SandButton';
import VioletButton from './ColumnOfButtons/VioletButton';
import styled from 'styled-components';
import WAAClock from 'waaclock';
import audioFiles from './audioFiles';

export const SoundBoxWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

class SoundBox extends Component {
  componentWillMount() {
    const AudioContext =
      window.AudioContext || window.webkitAudioContext || false;
    if (AudioContext) {
      this.soundBank = {};
      const context = new AudioContext();
      this.clock = new WAAClock(context);
      this.clock.start();
    }
  }

  render() {
    const { clock, soundBank } = this;
    if (clock) {
      const columnParams = [
        { audioType: 'arp', colorButton: RedButton },
        { audioType: 'bass', colorButton: VioletButton },
        { audioType: 'beat', colorButton: GreenButton },
        { audioType: 'lead', colorButton: SandButton }
      ];
      const columnsOfBoxes = columnParams.map(
        ({ audioType, colorButton }, index) => (
          <ColumnOfButtons
            audioFiles={audioFiles}
            soundBank={soundBank}
            clock={clock}
            key={index}
            audioType={audioType}
            colorButton={colorButton}
          />
        )
      );
      return <SoundBoxWrapper>{columnsOfBoxes}</SoundBoxWrapper>;
    }
    return (
      <h1>
        Sorry, but the Web Audio API is not supported by your browser. Please,
        consider upgrading to the latest version or downloading Google Chrome or
        Mozilla Firefox
      </h1>
    );
  }
}

export default SoundBox;
