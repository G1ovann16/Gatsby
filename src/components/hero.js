import React from 'react';
import styled from '@emotion/styled';
import { Link, graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

const ImageBackground = styled(BackgroundImage)`
  // background-image: url('/images/bg.jpg);
  background-position: Top 20% center;
  background-size: cover;
  height: 50vh;

  + * {
    margin-top: 0;
  }
`;

const TextBox = styeld('div')`
background-image: linear-gradient(to top, #ddbbffdd 2rem, #ddbbff00);
display: : flex;
flex-direction: column;
height: 100%;
justify-content: flex-end;
padding: 0 calc((100vh- 550px)/2) 2 rem;
width: 100%;

h1{
    text-shadow: 1px 1 px 3px #eeddff66;
    font-size: 2.25rem;
}

p, 
a{
    color: #222;
    margin-top: 0;
}

a{
    margin-top: 0.5rem
}
`;

const Hero = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(realativePath: { eq: "bg.jpg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  return (
    <ImageBackground Tag="section" fluid={image.sharp.fluid}>
      {/* tag puede variar puede ser un div o cualquier otro tipo de ettiqueta Html  */}
      <TextBox>
        <h1> FM +Gatsby &hearts;</h1>
        <p>
          Hello <Link to="/about/">Learn about me &rarr;</Link>
        </p>
      </TextBox>
    </ImageBackground>
  );
};

export default Hero;
