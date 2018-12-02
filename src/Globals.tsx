import React from 'react';
import { Global, css } from '@emotion/core';

export const globalStyles = css`
  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
    -webkit-overflow-scrolling: touch;
  }
  body {
    margin: 0;
    padding: 0;
    background-color: #73625611;
    color: #736256;
    font-family: Roboto, sans-serif;
    font-size: 14px;
  }
`;

const MyGlobalStyles = ({ children }: any) => {
  return (
    <React.Fragment>
      <Global styles={globalStyles} />
      {children}
    </React.Fragment>
  );
};

export default MyGlobalStyles;
