import React from 'react';
import { Image } from 'rebass';
import styled from 'styled-components';
import lyre from './lyre-white.png';

const LyreLogo = styled(Image)`margin: 0;`;

const LogoTitleWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: flex-start;
`;

const LyreTitle = styled.h1`
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

const Header = () => (
  <div>
    <LogoTitleWrapper>
      <LyreLogo src={lyre} width="6rem" height="6rem" />
      <LyreTitle children="Lyre" />
    </LogoTitleWrapper>
    <LyreDescription children="Mentoring project created to inspire you to play some music" />
  </div>
);

export default Header;
