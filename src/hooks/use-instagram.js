import { graphql, useStaticQuery } from 'gatsby';

const useInstagram = () => {
  const data = useStaticQuery(graphql`
    query {
      allInstaNodes(limit: 12) {
        nodes {
          id
          caption
          username
          localfile {
            childImageSharp {
              fluid(maxWidth: 120, maxHeight: 120) {
                ...GatsbyImaheSharpFluid_withWebp
                // srcset
              }
            }
          }
        }
      }
    }
  `);

  return data.allInstaNodes.nodes.map(node => ({
    ...node.localfile.childImageSharp,
    id: node.id,
    caption: node.caption,
    username: node.username,
  }));
};
