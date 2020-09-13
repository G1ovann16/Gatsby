import React from 'react';
import { Global, css } from '@emotion/core';
import Helmet from 'react-helmet';
import Header from './header';
import useSiteMetadata from '../hooks/use-siteMetadata'; 

const Layout = ({ children }) => (
    cont {title, description} = useSiteMetadata();
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
    <Helmet>
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
    <Header />
    <main> {children} </main>
  </>
);

export default Layout;
