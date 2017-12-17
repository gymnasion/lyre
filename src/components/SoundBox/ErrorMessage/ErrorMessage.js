import styled from 'styled-components';
import React from 'react';

const ErrorMessage = styled.h3`
  color: white;
  text-align: center;
`;

const ErrorMessageWrapper = styled.div`
  height: 80vh;
  width: 80vh;
  max-height: 80vw;
  max-width: 80vw;
  display: flex;
  align-items: center;
`;

export default () => (
  <ErrorMessageWrapper>
    <ErrorMessage>
      Sorry, but the Web Audio API is not supported by your browser. Please,
      consider upgrading to the latest version or downloading Google Chrome or
      Mozilla Firefox
    </ErrorMessage>
  </ErrorMessageWrapper>
);
