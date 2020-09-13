import React from 'react';
import { Global, css } from '@emotion/core';

const Layout = ({ children }) => (
  <>
    <Global
      styles={css`
        *{
            boxSizing: 'border-box';
            margin: 0;
            * + *{
                marginTop: 1rem;
            }
        }
        html,
        body{
            margin: 0;
            color: #555; 
            fontFamily: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, 'sans-serif';
            fontSize: 18px;
            lineHeight: 1.4;
            > div{
                marginTop: 0; 
            }
            h1,
            h2,
            h3,
            h4,
            h5,
            h6{
                color: #222;
                lineHeight: 1.1;
                + *{
                    marginTop: 0.5rem:
                }
            }
            strong{
                color: #222;
            }
            li{
                marginTop: 0.25rem;
            }
        } 
     `}
    />
    <header></header>
    <main> {children} </main>
  </>
);

export default Layout;
