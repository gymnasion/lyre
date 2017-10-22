import React, { Component } from 'react';
import styled from 'styled-components';
import SimpleBox from './SimpleBox';

export const ColumnOfBoxesWrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  margin-right: 1px;
  margin-left: 1px;
`;

class ColumnOfBoxes extends Component {
  render() {
    const { color } = this.props;
    const simpleBoxes = [1, 2, 3, 4].map(el => (
      <SimpleBox key={el} color={color} />
    ));
    return <ColumnOfBoxesWrapper>{simpleBoxes}</ColumnOfBoxesWrapper>;
  }
}

export default ColumnOfBoxes;
