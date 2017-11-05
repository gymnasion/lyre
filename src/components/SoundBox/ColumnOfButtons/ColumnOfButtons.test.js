import React from 'react';
import { mount } from 'enzyme';
import ColumnOfButtons from './';
import RedButton from './RedButton';

describe('<ColumnOfButtons />', () => {
  it('renders ColumnOfButtons with 4 color buttons', () => {
    const renderedColumnOfButtons = mount(
      <ColumnOfButtons colorButton={RedButton} />
    );
    expect(renderedColumnOfButtons.find(RedButton)).toHaveLength(4);
  });

  it('ColumnOfButtons changes state on select/unselect button', () => {
    const renderedColumnOfButtons = mount(
      <ColumnOfButtons colorButton={RedButton} />
    );
    const firstSimpleBox = renderedColumnOfButtons.find(RedButton).first();
    expect(renderedColumnOfButtons.state().stateValue).toBeFalsy();
    firstSimpleBox.simulate('click');
    expect(renderedColumnOfButtons.state().stateValue).toEqual(1);
    firstSimpleBox.simulate('click');
    expect(renderedColumnOfButtons.state().stateValue).toBeFalsy();
  });
});
