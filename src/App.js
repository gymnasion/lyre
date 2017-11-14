import React, { Component } from 'react';
import styled from 'styled-components';
import SoundBox from './components/SoundBox';
import Footer from './components/Footer';

export const AppWrapper = styled.div`
  background-color: #666666;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const LyreHeader = styled.h1`
  color: white;
  font-size: 3.5rem;
  margin: 1rem 0;
  text-align: center;
`;

const LyreDescription = styled.h2`
  color: white;
  font-size: 1.6rem;
  margin: 0 0 2rem 0;
  text-align: center;
  max-width: 80vw;
`;

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <LyreHeader children="Lyre" />
        <LyreDescription children="Mentoring project created to inspire you to play some music, learn Apollo and GraphQL" />
        <SoundBox />
        <Footer />
      </AppWrapper>
    );
  }
}

export default App;
