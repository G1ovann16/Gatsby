import React from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/core';
import ReadLink from './read-link';
import image from 'gatsby-image';

const PostPreview = ({ post }) => (
  <article
    css={css`
      border-bottom: 1px solid #ddd;
      display: flex;
      margin-top: 0;
      padding-bottom: 1rem;

      :first-of-type {
        margin-top: 1rem;
      }
    `}
  >
    <Link
      to={post.slug}
      css={css`
        margin: 1rem 1 rem 0 0;
        width: 100%;
      `}
    >
      <Image
        fluid={post.image.sharp.fluid}
        css={css`
          * {
            margin-top: 0;
          }
        `}
        alt={post.title}
      />
    </Link>
    <h3>
      <Link to={post.slug}>{post.title}</Link>
    </h3>
    <p> {post.excerpt} </p>
    <ReadLink to={post.slug}>Read post &rarr</ReadLink>
  </article>
);

export default PostPreview;
