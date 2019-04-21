import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Visit = () => (
  <StaticQuery
    query={graphql`
      query {
        roadviewImage: file(relativePath: { eq: "road-view.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        mapImage: file(relativePath: { eq: "map.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => {
      const viewImg = data.roadviewImage.childImageSharp.fluid
      const mapImg = data.mapImage.childImageSharp.fluid
      return (
        <VisitContainer id="visit">
          <SectionTitle>Visit Us!</SectionTitle>
          <FlexContainer>
            <MeetingInfo>
              <h3>Meeting Times</h3>
              <h4>Sundays:</h4>
              <ul>
                <li>10:00 AM - Sunday School for Kids and Adults</li>
                <li>11:00 AM - Morning Service</li>
                <li>6:00 PM - Evening Service</li>
              </ul>
              <h4>Wednesdays:</h4>
              <ul>
                <li>7:00 PM - Bible Study / Prayer</li>
              </ul>
            </MeetingInfo>
            <MeetingInfo>
              <h3>Meeting Place</h3>
              <p>
                213 State Road 564 (known as Boardman Drive) We are located in
                McKinley County and just outside of the Gallup City limits. We
                are about 2 miles from the intersection of Boardman and Highway
                66. Travel south from Highway 66 until you come to the church
                property on the south side of the highway!
              </p>
              <Aside>Transportation to regular services is available.</Aside>
            </MeetingInfo>
          </FlexContainer>
          <ImgContainer>
            <StyledImg>
              <Img fluid={viewImg} />
              <ImgDesc>View from State Road 564</ImgDesc>
            </StyledImg>
            <StyledImg>
              <Img fluid={mapImg} />
              <ImgDesc>Location on Google Maps</ImgDesc>
            </StyledImg>
          </ImgContainer>
        </VisitContainer>
      )
    }}
  />
)

const VisitContainer = styled.div`
  background-color: #e3e3e3;
  padding: 3.5rem 0 1rem 0;
`

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2rem;
`

const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const ImgContainer = styled(FlexContainer)`
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
`

const MeetingInfo = styled.div`
  padding: 1rem;
  max-width: 350px;

  h4,
  h3 {
    margin: 0.5rem 0;
  }

  li,
  p {
    margin: 0.25rem;
    font-size: 14px;
    font-family: Georgia, "Times New Roman", Times, serif;
    line-height: 1.5;
  }
`

const Aside = styled.p`
  font-style: italic;
  font-size: 14px;
`

const ImgDesc = styled.p`
  text-align: center;
  margin-top: 0.5rem;
  font-size: 14px;
`

const StyledImg = styled.div`
  width: 600px;
  margin: 1rem 0;

  @media (max-width: 600px) {
    width: 300px;
  }
`

export default Visit
