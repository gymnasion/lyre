import React from 'react';
import { mount } from 'enzyme';
import ColumnOfBoxes from './';
import SimpleBox from './SimpleBox';

describe('<ColumnOfBoxes />', () => {
  it('renders ColumnOfBoxes with 4 SimpleBoxes', () => {
    const renderedColumnOfBoxes = mount(<ColumnOfBoxes color="red" />);
    expect(renderedColumnOfBoxes.find(SimpleBox)).toHaveLength(4);
  });

  it('ColumnOfBoxes changes state', () => {
    const renderedColumnOfBoxes = mount(<ColumnOfBoxes color="red" />);
    const firstSimpleBox = renderedColumnOfBoxes.find(SimpleBox).first();
    expect(renderedColumnOfBoxes.state().stateValue).toBeFalsy();
    firstSimpleBox.simulate('click');
    expect(renderedColumnOfBoxes.state().stateValue).toEqual(1);
  });
});
