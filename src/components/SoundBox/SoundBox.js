import React, { Component } from 'react';
import ColumnOfBoxes from './ColumnOfBoxes';
import styled from 'styled-components';

export const SoundBoxWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

class SoundBox extends Component {
  render() {
    const colors = ['red', 'violet', 'green', 'sand'];
    const columnsOfBoxes = colors.map(color => (
      <ColumnOfBoxes key={color} color={color} />
    ));
    return <SoundBoxWrapper>{columnsOfBoxes}</SoundBoxWrapper>;
  }
}

export default SoundBox;
