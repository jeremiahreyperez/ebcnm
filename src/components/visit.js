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
          <MeetingInfo>
            <MeetingInfoItem>
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
            </MeetingInfoItem>
            <MeetingInfoItem>
              <h3>Meeting Place</h3>
              <p>
                213 State Road 564 (known as Boardman Drive) We are located in
                McKinley County and just outside of the Gallup City limits. We
                are about 2 miles from the intersection of Boardman and Highway
                66. Travel south from Highway 66 until you come to the church
                property on the south side of the highway!
              </p>
              <Aside>Transportation to regular services is available.</Aside>
            </MeetingInfoItem>
          </MeetingInfo>
          <StyledImg>
            <Img fluid={viewImg} />
            <ImgDesc>View from State Road 564</ImgDesc>
          </StyledImg>
          <Map>
            <MapFrame
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5582.033072854125!2d-108.72034393041233!3d35.504886709188106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8724de648b7481c1%3A0xdd88e61810c20eb3!2sEmmanuel+Baptist+Church!5e0!3m2!1sen!2sus!4v1556859208492!5m2!1sen!2sus"
              frameborder="0"
              allowfullscreen
            />
          </Map>
        </VisitContainer>
      )
    }}
  />
)

const VisitContainer = styled.section`
  background-color: #e3e3e3;
  padding: 3.5rem 0 4rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2rem;
`

const MeetingInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const MeetingInfoItem = styled.div`
  padding: 1rem;
  width: 320px;

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
  width: 768px;
  margin: 1rem 0;

  @media (max-width: 768px) {
    width: 100%;
  }
`

const Map = styled.div`
  position: relative;
  height: 0
  padding-bottom: 432px;
  width: 768px;
  overflow hidden;

  @media (max-width: 768px) {
    width: 100%;
    padding-bottom: 56.25%;
  }
`

const MapFrame = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  border: 0;
  width: 100%;
  height: 100%;
`

export default Visit
