import React, { Fragment } from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import MediaQuery from "react-responsive"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `StaticQuery`: https://gatsby.dev/staticquery
 */

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
      <>
        <MediaQuery query="(max-device-width: 425px)">
          <Img
            fluid={data.placeholderImage.childImageSharp.fluid}
            style={{
              height: `75vh`,
              filter: `brightness(75%)`,
              zIndex: `-1`,
            }}
          />
        </MediaQuery>
        <MediaQuery query="(min-device-width: 426px)">
          <Img
            fluid={data.placeholderImage.childImageSharp.fluid}
            style={{
              height: `100vh`,
              filter: `brightness(75%)`,
              zIndex: `-1`,
            }}
          />
        </MediaQuery>
      </>
    )}
  />
)

export default BGImage
