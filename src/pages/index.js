import React from 'react';
import Layout from '../components/layout';
import Hero from '../components/hero';
import usePosts from '../hooks/use-post';
import PostPreview from '../components/post-preview';
export default () => {
  const posts = usePosts();

  return (
    <>
      <Hero />
      <Layout>
        {/* <h1>Hi I´m Giovanni!!</h1>
      <p>Hello Frontend Masters!</p>
    <Link to="/about">learn about me &rarr;</Link> */}
        <h2>Read my article</h2>
        {posts.map(post => (
          <PostPreview key={post.slug} post={post} />
          // <pre>{JSON.stringify(post, null, 2)}</pre>
        ))}
        {/* un json del post credo en use-post */}
      </Layout>
    </>
  );
};
