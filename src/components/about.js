import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const About = () => (
  <StaticQuery
    query={graphql`
      query {
        auditoriumImage: file(relativePath: { eq: "church-auditorium.png" }) {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        pastorImage: file(relativePath: { eq: "pastor-and-wife.JPG" }) {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        signImage: file(relativePath: { eq: "ebc-sign.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => {
      const auditoriumImg = data.auditoriumImage.childImageSharp.fluid
      const pastorImg = data.pastorImage.childImageSharp.fluid
      const signImg = data.signImage.childImageSharp.fluid
      return (
        <AboutContainer id="about">
          <SectionTitle>About Us</SectionTitle>
          <GridContainer>
            <CardOne>
              <h3>Our Heritage...</h3>
              <ul>
                <ListItem>
                  Emmanuel is an "old fashioned" gospel preaching church. The
                  Bible speaks for itself, and it is our responsibility to align
                  with it, not modify it to fit our feelings or comply with our
                  culture.
                </ListItem>
                <ListItem>
                  We identify with the tenants of the faith that would be
                  identified with Historical Baptist Churches.
                </ListItem>
              </ul>
            </CardOne>
            <CardTwo>
              <h3>Our History...</h3>
              <ul>
                <ListItem>
                  Emmanuel came together as the vision of several different
                  people.
                </ListItem>
                <ListItem>
                  The property was secured and construction on the building
                  began in 1979.
                </ListItem>
                <ListItem>
                  Several men served as Pastor through the 1980's and into the
                  1990's.
                </ListItem>
                <ListItem>
                  Mike Kleeberger has served as Pastor since 1996.
                </ListItem>
              </ul>
            </CardTwo>
            <CardThree>
              <h3>Our Hope...</h3>
              <ul>
                <ListItem>
                  Jesus Christ (God the Son) was born of a virgin, lived a
                  sinless life, and died for the sin of mankind. After His
                  crucifixion, He was buried. Three days later He rose bodily
                  from the dead and interacted with numerous witnesses over the
                  next 40 days. He ascended into Heaven while His disciples
                  watched Him. There He waits until His return to gather
                  together all believers in the Rapture.
                </ListItem>
                <ListItem>
                  God has not given humanity a religious code to follow.
                  Instead, He has created a way that sinful people can be
                  brought into a positive relation with Him. This happened when
                  Jesus was crucified, paying the penalty for our sin. A person
                  needs to repent of his sin and receive the gift of salvation.
                  He will then be adopted into the very Family of God.
                </ListItem>
                <ListItem>
                  We preach Christ: Crucified, Risen and Returning!
                </ListItem>
              </ul>
            </CardThree>
            <StyledImgOne>
              <Img fluid={signImg} />
            </StyledImgOne>
            <StyledImgTwo>
              <Img fluid={pastorImg} />
            </StyledImgTwo>
            <StyledImgThree>
              <Img fluid={auditoriumImg} />
            </StyledImgThree>
          </GridContainer>
        </AboutContainer>
      )
    }}
  />
)

const AboutContainer = styled.div`
  background-color: #eaf4ff;
  padding: 3.5rem 0 1rem 0;
`

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2rem;
`

const GridContainer = styled.div`
  display: grid;
  max-width: 1000px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  grid-template-areas:
    "card-one card-one image-one"
    "image-two card-two card-two"
    "card-three card-three image-three";
  justify-content: center;
  align-items: center;
  grid-gap: 2rem;
  flex-wrap: wrap;
  padding: 2rem;
  margin: 2rem auto;

  @media (max-width: 680px) {
    grid-template-areas:
      "card-one card-one card-one"
      "image-one image-one image-one"
      "card-two card-two card-two"
      "image-two image-two image-two"
      "card-three card-three card-three"
      "image-three image-three image-three";
  }
`

const AboutCard = styled.div`
  // background-color: #eee;
  border-radius: 10px;
  padding: 0.5rem 0;
  // margin: 0 1rem;
  text-align: left;
`

const CardOne = styled(AboutCard)`
  grid-area: card-one;
`
const CardTwo = styled(AboutCard)`
  grid-area: card-two;
`
const CardThree = styled(AboutCard)`
  grid-area: card-three;
`

const ListItem = styled.li`
  margin: 1rem 0;
  font-family: Georgia, "Times New Roman", Times, serif;
  line-height: 1.5rem;
`

const StyledImg = styled.div`
  width: 300px;
  justify-self: center;
`

const StyledImgOne = styled(StyledImg)`
  grid-area: image-one;
`

const StyledImgTwo = styled(StyledImg)`
  grid-area: image-two;
`

const StyledImgThree = styled(StyledImg)`
  grid-area: image-three;
`

export default About
