import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { Link } from 'gatsby';

const Navlink = styled(Link)`
  color: #222;
  font-size: 1rem;
  font-weight: ${props => props.fontWeight || 'normal'};
  line-height: 1;
  margin: 0 0.5rem 0 0;
  padding: 0.25rem;
  text-decoration: none;
  &.current-page {
    border-bottom: 2px solid #222;
  }
`;

const Header = () => (
  <header
    css={css`
      background: #eee;
      border-bottom: 1px solid #ddd;
      display: flex;
      justify-content: space-between;
      padding: 0.5rem calc((100vw - 550px- 0.5rem) / 2);
    `}
  >
    <Navlink to="/" font-Weight="bold">
      Whorkshop
    </Navlink>
    <nav
      xss={css`
        margin-top: 0;
      `}
    >
      <Navlink to="/" activeClassName="current-page">
        Home
      </Navlink>
      <Navlink to="/about" activeClassName="current-page">
        About
      </Navlink>
    </nav>
  </header>
);

export default Header;
