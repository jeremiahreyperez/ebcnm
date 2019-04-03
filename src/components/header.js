import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Navbar from "./navbar.js"

import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBible } from "@fortawesome/free-solid-svg-icons"

library.add(faBible)

const Header = ({ siteTitle }) => (
  <header style={headerStyle}>
    <div style={containerStyle}>
      <Link
        to="/"
        style={{
          color: `#f0f0f0`,
        }}
      >
        <FontAwesomeIcon icon="bible" /> {siteTitle}
      </Link>
      <Navbar />
    </div>
  </header>
)

const headerStyle = {
  background: "transparent",
  marginBottom: "1.45rem",
  position: "relative",
  zIndex: "10",
}

const containerStyle = {
  margin: "0 auto",
  maxWidth: 1080,
  padding: "1.45rem 1rem",
  fontSize: "28px",
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
