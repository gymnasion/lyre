import React from 'react';
import { Image } from 'rebass';
import mapicon from './map-pin.png';
import styled from 'styled-components';

const Copyright = styled.p`
  color: white;
  font-size: 1.3rem;
  text-align: center;
  margin-bottom: 2vh;
  margin-top: 0;
`;

const FooterWrapper = styled.div`
  margin-top: 1.5rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-flow: column nowrap;
`;

const MapIcon = styled(Image)`margin-bottom: 0.5rem;`;

const LocationText = styled.p`
  color: white;
  font-size: 1.6rem;
  text-align: center;
  padding-left: 0.2rem;
  margin: 0 0 0.5rem 0;
`;

const LocationWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
`;

const Footer = () => (
  <FooterWrapper>
    <LocationWrapper>
      <MapIcon height="1.6rem" width="1.6rem" src={mapicon} />
      <LocationText children="Berlin" />
    </LocationWrapper>
    <Copyright children="Copyright © 2017" />
  </FooterWrapper>
);

export default Footer;
