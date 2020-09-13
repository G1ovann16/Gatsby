import { graphql, useStaticQuery } from 'gatsby';

const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          desription
        }
      }
    }
  `);
  return data.site.siteMetadata;
};

export default useSiteMetadata;
