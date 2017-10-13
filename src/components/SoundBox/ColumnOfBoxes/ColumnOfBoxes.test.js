import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ColumnOfBoxes from './';
import SimpleBox from './SimpleBox';

Enzyme.configure({ adapter: new Adapter() });

describe('<ColumnOfBoxes />', () => {
  it('renders ColumnOfBoxes with 4 SimpleBoxes', () => {
    const renderedColumnOfBoxes = mount(<ColumnOfBoxes color="red" />);
    expect(renderedColumnOfBoxes.find(SimpleBox)).toHaveLength(4);
  });
});
