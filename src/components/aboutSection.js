import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import AboutGrid from "./aboutGrid"

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
    </div>
  )
}

const aboutStyle = {
  padding: "2.5rem 0",
}

export default AboutSection
