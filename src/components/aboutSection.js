import React from "react"

import AboutGrid from "./aboutGrid"
import PersonImage from "./imageComponents/personImage"

const AboutSection = () => {
  return (
    <div id="about" style={aboutStyle}>
      <h2
        style={{
          textAlign: `center`,
          padding: `1.5rem 0`,
        }}
      >
        About Emmanuel Baptist Church
      </h2>
      <AboutGrid />
      <div
        style={{
          display: `flex`,
          margin: `2rem 0`,
          flexWrap: `wrap`,
          justifyContent: `center`,
        }}
      >
        <div style={galleryStyle}>
          <PersonImage />
        </div>
        <div style={galleryStyle}>
          <PersonImage />
        </div>
        <div style={galleryStyle}>
          <PersonImage />
        </div>
      </div>
    </div>
  )
}

const aboutStyle = {
  padding: "2.5rem 0",
  margin: "0 auto",
  maxWidth: 960,
}

const galleryStyle = {
  width: "300px",
  margin: ".5rem",
}

export default AboutSection
