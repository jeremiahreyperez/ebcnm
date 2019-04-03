import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Navbar = () => {
  return (
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
  )
}

const navStyle = {
  float: "right",
}

const navItemStyle = {
  padding: "0px 12px",
  color: "#f0f0f0",
}

export default Navbar
