import React, { Component } from "react";
import ColumnOfBoxes from "./ColumnOfBoxes";

class SoundBox extends Component {
  render() {
    const colors = ["red", "violet", "green", "sand"];
    const columnsOfBoxes = colors.map(color => (
      <ColumnOfBoxes key={color} color={color} />
    ));
    return <div>{columnsOfBoxes}</div>;
  }
}

export default SoundBox;
