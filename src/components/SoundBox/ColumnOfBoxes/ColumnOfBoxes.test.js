import React from 'react';
import { mount } from 'enzyme';
import ColumnOfBoxes from './';
import SimpleBox from './SimpleBox';

describe('<ColumnOfBoxes />', () => {
  it('renders ColumnOfBoxes with 4 SimpleBoxes', () => {
    const renderedColumnOfBoxes = mount(<ColumnOfBoxes color="red" />);
    expect(renderedColumnOfBoxes.find(SimpleBox)).toHaveLength(4);
  });
});
