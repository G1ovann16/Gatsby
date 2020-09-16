import { graphql, useStaticQuery } from 'gatsby';

const usePosts = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx {
        nodes {
          frontmatter {
            tittle
            slug
            author
            image {
              childImageSharp {
                fluid(
                  maxWidth: 100
                  maxHeight: 100
                  duotone: { shadow: "#663399", highlight: "#ddbbff" }
                ) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
          excerpt
        }
      }
    }
  `);

  return data.allMdx.nodes.map(post => ({
    tittle: post.frontmatter.title,
    slug: post.frontmatter.slug,
    author: post.frontmatter.author,
    excerpt: post.frontmatter.excerpt,
  }));
};
export default usePosts;
