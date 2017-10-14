import React from 'react';
import { mount } from 'enzyme';
import SoundBox from './';
import RedButton from './ColumnOfBoxes/SimpleBox/RedButton';
import GreenButton from './ColumnOfBoxes/SimpleBox/GreenButton';
import SandButton from './ColumnOfBoxes/SimpleBox/SandButton';
import VioletButton from './ColumnOfBoxes/SimpleBox/VioletButton';

describe('<SoundBox />', () => {
  it('renders SoundBox with 4 colored columns', () => {
    const renderedSoundBox = mount(<SoundBox />);
    expect(renderedSoundBox.find(RedButton)).toHaveLength(4);
    expect(renderedSoundBox.find(GreenButton)).toHaveLength(4);
    expect(renderedSoundBox.find(SandButton)).toHaveLength(4);
    expect(renderedSoundBox.find(VioletButton)).toHaveLength(4);
  });
});
