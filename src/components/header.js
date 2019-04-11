import PropTypes from "prop-types"
import React from "react"

import BGImage from "./imageComponents/bgImage"
import HomeSection from "./homeSection.js"

const Header = ({ siteTitle }) => (
  <header style={headerStyle}>
    <BGImage />
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
      }}
    >
      <HomeSection siteTitle={siteTitle} />
    </div>
  </header>
)

const headerStyle = {
  width: "100%",
  position: "relative",
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
