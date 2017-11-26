import React from 'react';
import { mount } from 'enzyme';
import { ColumnOfButtonsWithState } from './ColumnOfButtons.js';
import RedButton from './RedButton';

describe('ColumnOfButtons with state', () => {
  it('renders ColumnOfButtons with 4 color buttons', () => {
    const renderedColumnOfButtonsWithState = mount(
      <ColumnOfButtonsWithState colorButton={RedButton} />
    );
    expect(renderedColumnOfButtonsWithState.find(RedButton)).toHaveLength(4);
  });

  it('ColumnOfButtons changes state on select/unselect button', () => {
    const renderedColumnOfButtonsWithState = mount(
      <ColumnOfButtonsWithState colorButton={RedButton} />
    );
    const firstSimpleBox = renderedColumnOfButtonsWithState
      .find(RedButton)
      .first();
    expect(renderedColumnOfButtonsWithState.state().stateValue).toBeFalsy();
    firstSimpleBox.simulate('click');
    expect(renderedColumnOfButtonsWithState.state().stateValue).toEqual(1);
    firstSimpleBox.simulate('click');
    expect(renderedColumnOfButtonsWithState.state().stateValue).toBeFalsy();
  });
});
