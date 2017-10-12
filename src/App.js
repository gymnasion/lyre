import React, { Component } from "react";
import styled from "styled-components";
import SoundBox from "./components/SoundBox";

export const AppWrapper = styled.div`
  text-align: center;
  background-color: #666666;
`;

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <SoundBox />
      </AppWrapper>
    );
  }
}

export default App;
