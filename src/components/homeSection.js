import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { Fragment } from "react"
import Image from "../components/image"

const HomeSection = () => {
  return (
    <Fragment>
      <div id="home" style={homeStyle}>
        <h1
          style={{
            marginBottom: `1.5rem`,
            fontSize: `40px`,
            fontWeight: `500`,
          }}
        >
          Welcome to Emmanuel Baptist Church!
        </h1>
        <p
          style={{
            marginBottom: `1.5rem`,
            fontSize: `20px`,
          }}
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque,
          natus?
        </p>
      </div>
      <Image />
    </Fragment>
  )
}

const homeStyle = {
  position: "absolute",
  width: "100%",
  top: "40%",
  background: "transparent",
  textAlign: "center",
  color: "#f0f0f0",
  zIndex: "10",
}

export default HomeSection
