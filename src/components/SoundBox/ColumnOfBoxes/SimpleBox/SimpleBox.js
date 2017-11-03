import React, { Component } from 'react';
import RedButton from './RedButton';
import GreenButton from './GreenButton';
import SandButton from './SandButton';
import VioletButton from './VioletButton';

class SimpleBox extends Component {
  render() {
    const { color, clicked, onClick } = this.props;
    let ColorButton;
    switch (color) {
      case 'red': {
        ColorButton = RedButton;
        break;
      }
      case 'sand': {
        ColorButton = SandButton;
        break;
      }
      case 'green': {
        ColorButton = GreenButton;
        break;
      }
      case 'violet': {
        ColorButton = VioletButton;
        break;
      }
      //no default
    }
    return <ColorButton onClick={onClick} clicked={clicked} />;
  }
}

export default SimpleBox;
