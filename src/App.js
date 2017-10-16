import React, { Component } from 'react';
import styled from 'styled-components';
import SoundBox from './components/SoundBox';

export const AppWrapper = styled.div`
  background-color: #666666;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
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
