import React from "react"
import { graphql, StaticQuery, Link } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"

import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"

library.add(faChevronDown)

const Showcase = () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
        showcaseBG: file(relativePath: { eq: "showcase-background.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      const imageData = data.showcaseBG.childImageSharp.fluid
      const siteTitle = data.site.siteMetadata.title
      return (
        <StyledShowcase
          Tag="section"
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
            <Link to="#about">
              <Chevron icon="chevron-down" />
            </Link>
          </ShowcaseContent>
        </StyledShowcase>
      )
    }}
  />
)

const StyledShowcase = styled(BackgroundImage)`
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
    margin-bottom: 0.75rem;
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

const Chevron = styled(FontAwesomeIcon)`
  font-size: 3rem;
  position: absolute;
  bottom: 5%;
  color: white;
  transform: translateX(-50%);
  transition: transform 0.5s ease-out;

  :hover {
    transform: translateX(-50%) translateY(10%);
  }
`

export default Showcase
