import React, { Component } from 'react';
import ColumnOfButtons from './ColumnOfButtons';
import GreenButton from './ColumnOfButtons/GreenButton';
import RedButton from './ColumnOfButtons/RedButton';
import SandButton from './ColumnOfButtons/SandButton';
import VioletButton from './ColumnOfButtons/VioletButton';
import styled from 'styled-components';

export const SoundBoxWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

class SoundBox extends Component {
  render() {
    const colorButtons = [RedButton, VioletButton, GreenButton, SandButton];
    const columnsOfBoxes = colorButtons.map((colorButton, index) => (
      <ColumnOfButtons key={index} colorButton={colorButton} />
    ));
    return <SoundBoxWrapper>{columnsOfBoxes}</SoundBoxWrapper>;
  }
}

export default SoundBox;
