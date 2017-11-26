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
    this.soundBank = {};
    this.context = new window.AudioContext();
    this.clock = new WAAClock(this.context);
    this.clock.start();
  }

  render() {
    const { context, clock, soundBank } = this;
    const columnParams = [
      { type: 'arp', colorButton: RedButton },
      { type: 'bass', colorButton: VioletButton },
      { type: 'beat', colorButton: GreenButton },
      { type: 'lead', colorButton: SandButton }
    ];
    const columnsOfBoxes = columnParams.map(({ type, colorButton }, index) => (
      <ColumnOfButtons
        audioFiles={audioFiles}
        soundBank={soundBank}
        context={context}
        clock={clock}
        key={index}
        type={type}
        colorButton={colorButton}
      />
    ));
    return <SoundBoxWrapper>{columnsOfBoxes}</SoundBoxWrapper>;
  }
}

export default SoundBox;
