import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

export default () => (
  <Layout>
    <h1>Hi I´m Giovanni!!</h1>
    <p>Hello Frontend Masters!</p>
    <Link to="/about">learn about me &rarr;</Link>
  </Layout>
);
