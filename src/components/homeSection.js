import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import MediaQuery from "react-responsive"

import Navbar from "./navbar.js"

const HomeSection = ({ siteTitle }) => {
  return (
    <div style={{ display: `flex`, justifyContent: `center` }}>
      <Navbar />
      <MediaQuery query="(max-device-width: 425px)">
        <div id="home" style={homeStyle}>
          <h1
            style={{
              marginBottom: `1.5rem`,
              fontSize: `30px`,
              fontWeight: `500`,
            }}
          >
            {siteTitle}
          </h1>
          <p
            style={{
              marginBottom: `1rem`,
              fontSize: `16px`,
            }}
          >
            Stop in on your way to eternity
          </p>
          <div>
            <a href="#about" style={mobileBtnStyle}>
              Learn more!
            </a>
            <a href="#visit" style={mobileBtnStyle}>
              Visit us!
            </a>
          </div>
        </div>
      </MediaQuery>
      <MediaQuery query="(min-device-width: 426px)">
        <div id="home" style={homeStyle}>
          <h1
            style={{
              marginBottom: `1.5rem`,
              fontSize: `40px`,
              fontWeight: `500`,
            }}
          >
            {siteTitle}
          </h1>
          <p
            style={{
              marginBottom: `1.5rem`,
              fontSize: `20px`,
            }}
          >
            Stop in on your way to eternity
          </p>
          <div>
            <a href="#about" style={btnStyle}>
              Learn more!
            </a>
            <a href="#visit" style={btnStyle}>
              Visit us!
            </a>
          </div>
        </div>
      </MediaQuery>
    </div>
  )
}

const homeStyle = {
  position: "absolute",
  top: "40%",
  textAlign: "center",
  color: "#f0f0f0",
}

const btnStyle = {
  display: "inline-block",
  fontSize: "24px",
  width: "10rem",
  color: "#f0f0f0",
  margin: ".5rem 1rem",
  padding: ".5rem 0",
  backgroundColor: "#3498db",
  borderRadius: "3px",
  boxShadow: "2px 3px 3px #333",
}

const mobileBtnStyle = {
  display: "inline-block",
  fontSize: "20px",
  width: "8rem",
  color: "#f0f0f0",
  margin: ".5rem 1rem",
  padding: ".5rem 0",
  backgroundColor: "#3498db",
  borderRadius: "3px",
  boxShadow: "2px 3px 3px #333",
}

export default HomeSection
