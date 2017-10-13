import React, { Component } from 'react';
import RedButton from './RedButton';
import GreenButton from './GreenButton';
import SandButton from './SandButton';
import VioletButton from './VioletButton';

class SimpleBox extends Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false };
  }
  render() {
    const { clicked } = this.state;
    const { color } = this.props;
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
    }
    return (
      <ColorButton
        clicked={clicked}
        onClick={() =>
          this.setState(() => {
            return { clicked: !clicked };
          })}
        color={color}
      />
    );
  }
}

export default SimpleBox;
