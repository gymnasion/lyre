import React, { Component } from "react";
import ColumnOfButtons from "./ColumnOfButtons";
import GreenButton from "./ColumnOfButtons/GreenButton";
import RedButton from "./ColumnOfButtons/RedButton";
import SandButton from "./ColumnOfButtons/SandButton";
import VioletButton from "./ColumnOfButtons/VioletButton";
import styled from "styled-components";
import WAAClock from "waaclock";
import audioFiles from "./audioFiles";

export const SoundBoxWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

class SoundBox extends Component {
  componentWillMount() {
    this.soundBank = {};
    const context =
      "webkitAudioContext" in window
        ? new window.webkitAudioContext()
        : new window.AudioContext();

    this.clock = new WAAClock(context);
    this.clock.start();
  }

  render() {
    const { clock, soundBank } = this;
    const columnParams = [
      { audioType: "arp", colorButton: RedButton },
      { audioType: "bass", colorButton: VioletButton },
      { audioType: "beat", colorButton: GreenButton },
      { audioType: "lead", colorButton: SandButton }
    ];
    const columnsOfBoxes = columnParams.map(
      ({ audioType, colorButton }, index) => (
        <ColumnOfButtons
          audioFiles={audioFiles}
          soundBank={soundBank}
          clock={clock}
          key={index}
          audioType={audioType}
          colorButton={colorButton}
        />
      )
    );
    return <SoundBoxWrapper>{columnsOfBoxes}</SoundBoxWrapper>;
  }
}

export default SoundBox;
