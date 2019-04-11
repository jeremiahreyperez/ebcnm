import React, { Fragment } from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const BGImage = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "Bible.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 4160) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <Img
        fluid={data.placeholderImage.childImageSharp.fluid}
        style={{
          height: `100vh`,
          filter: `brightness(75%)`,
          zIndex: `-1`,
        }}
      />
    )}
  />
)

export default BGImage
