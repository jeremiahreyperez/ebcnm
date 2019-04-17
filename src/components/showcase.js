import React from "react"
import { graphql, StaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"

import Navbar from "./navbar"

const Showcase = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
        desktop: file(relativePath: { eq: "Bible-background-image.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      const imageData = data.desktop.childImageSharp.fluid
      const siteTitle = data.site.siteMetadata.title
      return (
        <BackgroundImage
          Tag="section"
          class={className}
          fluid={imageData}
          backgroundColor={`#040e18`}
        >
          <ShowcaseContent>
            <Title>{siteTitle}</Title>
            <Tagline>Stop in on your way to eternity!</Tagline>
            <div>
              <Button href="#about">About</Button>
              <Button href="#visit">Visit</Button>
            </div>
          </ShowcaseContent>
        </BackgroundImage>
      )
    }}
  />
)

const StyledShowcase = styled(Showcase)`
  width: 100%;
  background-position: bottom center;
  background-repeat: none;
  background-size: cover;
`

const ShowcaseContent = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #eee;
  text-align: center;
`

const Title = styled.h1`
  text-transform: uppercase;
  margin: 1.5rem;
  font-size: 3rem;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`
const Tagline = styled.p`
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  font-style: italic;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`

const Button = styled.a`
  cursor: pointer;
  display: inline-block;
  font-size: 1.5rem;
  width: 8rem;
  height: 8rem;
  vertical-align: middle;
  margin: 0.5rem 1rem;
  padding-top: 45px;
  // background-color: #0984e3;
  border: 2px solid #eee;
  border-radius: 50%;
  // box-shadow: 2px 3px 3px #333;
  color: #eee;
  transition: background-color, color, 0.25s ease-in;

  :hover {
    background-color: #eee;
    color: #333;
    transition: background-color, color, 0.5s ease-out;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    width: 5rem;
    height: 5rem;
    padding-top: 27px;
  }
`

export default StyledShowcase
