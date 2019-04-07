import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import MediaQuery from "react-responsive"

import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faHome,
  faInfoCircle,
  faRoute,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons"

library.add(faHome, faInfoCircle, faRoute, faEnvelope)

const Navbar = () => {
  return (
    <>
      <MediaQuery query="(min-device-width: 426px)">
        <nav style={navStyle}>
          <Link to="/" style={navItemStyle}>
            Home
          </Link>
          <Link to="#about" style={navItemStyle}>
            About Us
          </Link>
          <Link to="#visit" style={navItemStyle}>
            Plan a Visit
          </Link>
          <Link to="#connect" style={navItemStyle}>
            Connect
          </Link>
        </nav>
      </MediaQuery>
      <MediaQuery query="(max-device-width: 425px)">
        <nav style={mobileNavStyle}>
          <Link to="/" style={mobileNavItemStyle}>
            <FontAwesomeIcon icon="home" />
          </Link>
          <Link to="#about" style={mobileNavItemStyle}>
            <FontAwesomeIcon icon="info-circle" />
          </Link>
          <Link to="#visit" style={mobileNavItemStyle}>
            <FontAwesomeIcon icon="route" />
          </Link>
          <Link to="#connect" style={mobileNavItemStyle}>
            <FontAwesomeIcon icon="envelope" />
          </Link>
        </nav>
      </MediaQuery>
    </>
  )
}

const navStyle = {
  display: "flex",
  justifyContent: "space-between",
  margin: "1rem auto",
  position: "absolute",
  top: 0,
}

const navItemStyle = {
  width: 150,
  padding: "0 20px",
  color: "#f0f0f0",
  textAlign: "center",
}

const mobileNavStyle = {
  display: "flex",
  justifyContent: "space-between",
  width: 320,
  margin: "1rem auto",
  position: "absolute",
  top: 0,
}

const mobileNavItemStyle = {
  padding: "0 20px",
  color: "#f0f0f0",
  textAlign: "center",
  fontSize: "24px",
}

export default Navbar
