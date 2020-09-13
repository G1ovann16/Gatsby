import React from 'react';
import { Global, css } from '@emotion/core';
import Helmet from 'react-helmet';
import Header from './header';
import useSiteMetadata from '../hooks/use-siteMetadata';

const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <>
      <Global
        styles={css`
        *{
            box-Sizing: border-box;
            margin: 0;
            * + *{
                margin-Top: 1rem;
            }
        }
        html,
        body{
            margin: 0;
            color: #555; 
            font-Family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, 'sans-serif';
            font-Size: 18px;
            line-Height: 1.4;
            > div{
                margin-Top: 0; 
            }
            h1,
            h2,
            h3,
            h4,
            h5,
            h6{
                color: #222;
                line-Height: 1.1;
                + *{
                    margin-Top: 0.5rem:
                }
            }
            strong{
                color: #222;
            }
            li{
                margin-Top: 0.25rem;
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
};

export default Layout;
