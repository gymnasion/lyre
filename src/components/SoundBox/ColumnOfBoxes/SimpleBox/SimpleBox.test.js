import React from 'react';
import { mount } from 'enzyme';
import SimpleBox from './';
import RedButton from './RedButton';

describe('<SimpleBox />', () => {
  it('renders SimpleBox with RedButton inside', () => {
    const renderedSimpleBox = mount(<SimpleBox color="red" />);
    const simpleBoxColor = renderedSimpleBox.props().color;
    expect(renderedSimpleBox.find(RedButton)).toBeDefined();
    expect(simpleBoxColor).toBe('red');
  });

  it('SimpleBox changes clicked state', () => {
    const renderedSimpleBox = mount(<SimpleBox color="red" />);
    expect(renderedSimpleBox.state().clicked).toBeFalsy();
    renderedSimpleBox.simulate('click');
    expect(renderedSimpleBox.state().clicked).toBeTruthy();
  });
});
