import React from 'react';
import { Link } from 'rebass';
import styled from 'styled-components';

const FooterText = styled.p`
  color: white;
  font-size: 1.3rem;
  text-align: center;
  margin-bottom: 2vh;
  margin-top: 0;
`;

const ProjectLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 2vh;
  margin-top: 0;
  &:hover {
    text-decoration: underline;
  }
`;

const FooterWrapper = styled.div`
  margin-top: 1.5rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-flow: column nowrap;
`;

const Footer = () => (
  <FooterWrapper>
    <FooterText>
      <ProjectLink href="https://github.com/gymnasion/lyre" children="Github" />{' '}
      | <ProjectLink href="http://gymnasion.io/" children="Gymnasion" />
    </FooterText>
    <FooterText children="Copyright © 2017" />
  </FooterWrapper>
);

export default Footer;
