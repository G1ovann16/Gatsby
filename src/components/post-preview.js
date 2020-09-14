import React from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/core';

const PostPreview = ({ post }) => (
  <article
    css={css`
      border-bottom: 1px solid #ddd;
      margin-top: 0, 75rem;
      padding-bottom: 1rem;

      :first-of-type {
        margin-top: 1rem;
      }
    `}
  >
    <h3>
      <Link to={post.slug}>{post.title}</Link>
    </h3>
    <p> {post.excerpt} </p>
    <Link to={post.slug}>Read post &rarr</Link>
  </article>
);

export default PostPreview;
