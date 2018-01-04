import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import ColumnOfButtons from './';
import RedButton from './RedButton';
import WAAClock from 'waaclock';
import audioFiles from '../audioFiles';

describe('ColumnOfButtons with state', () => {
  it('renders ColumnOfButtons correctly', () => {
    const renderedColumnOfButtons = mount(
      <ColumnOfButtons colorButton={RedButton} />
    );
    expect(toJson(renderedColumnOfButtons)).toMatchSnapshot();
  });

  it('renders ColumnOfButtons with 4 color buttons', () => {
    const renderedColumnOfButtons = mount(
      <ColumnOfButtons colorButton={RedButton} />
    );
    expect(renderedColumnOfButtons.find(RedButton)).toHaveLength(4);
  });

  it('ColumnOfButtons changes state on select/unselect button', () => {
    const context = new window.AudioContext();
    const clock = new WAAClock(context);
    const soundBank = {};
    clock.start();
    const renderedColumnOfButtons = mount(
      <ColumnOfButtons
        soundBank={soundBank}
        audioFiles={audioFiles}
        audioType="arp"
        clock={clock}
        colorButton={RedButton}
      />
    );
    const firstSimpleBox = renderedColumnOfButtons.find(RedButton).first();
    expect(
      renderedColumnOfButtons.state().stateValue.selectedButton
    ).toBeFalsy();
    firstSimpleBox.simulate('click');
    expect(renderedColumnOfButtons.state().stateValue.selectedButton).toEqual(
      1
    );
    firstSimpleBox.simulate('click');
    expect(
      renderedColumnOfButtons.state().stateValue.selectedButton
    ).toBeFalsy();
  });
});
