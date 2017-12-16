import React from 'react';
import { mount } from 'enzyme';
import SoundBox from './';
import RedButton from './ColumnOfButtons/RedButton';
import GreenButton from './ColumnOfButtons/GreenButton';
import SandButton from './ColumnOfButtons/SandButton';
import VioletButton from './ColumnOfButtons/VioletButton';
import ErrorMessage from './ErrorMessage';

describe('SoundBox', () => {
  it('renders SoundBox with 4 colored columns', () => {
    const renderedSoundBox = mount(<SoundBox />);
    expect(renderedSoundBox.find(RedButton)).toHaveLength(4);
    expect(renderedSoundBox.find(GreenButton)).toHaveLength(4);
    expect(renderedSoundBox.find(SandButton)).toHaveLength(4);
    expect(renderedSoundBox.find(VioletButton)).toHaveLength(4);
  });
  it('renders SoundBox if browser uses webkitAudioContext', () => {
    window.AudioContext = window.AudioContext || window.webkitAudioContext;
    const renderedSoundBox = mount(<SoundBox />);
    expect(renderedSoundBox.find(RedButton)).toHaveLength(4);
  });
  it('renders error message if browser does not support Web Audio', () => {
    window.AudioContext = undefined;
    const renderedSoundBox = mount(<SoundBox />);
    expect(renderedSoundBox.find(ErrorMessage)).toHaveLength(1);
  });
});
