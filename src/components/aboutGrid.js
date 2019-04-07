import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import ChurchImage from "./imageComponents/churchImage"
import PersonImage from "./imageComponents/personImage"

import MediaQuery from "react-responsive"

const AboutSection = () => {
  return (
    <div style={gridStyle}>
      <div
        style={{
          fontSize: "20px",
          gridColumn: `2 / 6`,
          gridRow: `1 / 2`,
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, at
        cumque iusto mollitia voluptatum veniam fugit. Voluptas inventore
        ducimus id nobis est recusandae, minima atque sapiente delectus ex ullam
        obcaecati perspiciatis iusto ipsa dolorem doloremque doloribus, repellat
        fugiat. Magni, minus?
      </div>
      <div
        style={{
          maxWidth: `300px`,
          gridColumn: `6 / 8`,
          gridRow: `1 / 2`,
        }}
      >
        <ChurchImage />
      </div>
      <div
        style={{
          maxWidth: `300px`,
          gridColumn: `2 / 4`,
          gridRow: `2 / 3`,
        }}
      >
        <PersonImage />
      </div>
      <div
        style={{
          fontSize: "20px",
          gridColumn: `4 / 8`,
          gridRow: `2 / 3`,
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, at
        cumque iusto mollitia voluptatum veniam fugit. Voluptas inventore
        ducimus id nobis est recusandae, minima atque sapiente delectus ex ullam
        obcaecati perspiciatis iusto ipsa dolorem doloremque doloribus, repellat
        fugiat. Magni, minus?
      </div>
      <div
        style={{
          maxWidth: `300px`,
          gridColumn: `1 / 3`,
          gridRow: `3 / 4`,
        }}
      >
        <PersonImage />
      </div>
      <div
        style={{
          maxWidth: `300px`,
          gridColumn: `3 / 5`,
          gridRow: `3 / 4`,
        }}
      >
        <PersonImage />
      </div>
      <div
        style={{
          maxWidth: `300px`,
          gridColumn: `5 / 7`,
          gridRow: `3 / 4`,
        }}
      >
        <PersonImage />
      </div>
      <div
        style={{
          maxWidth: `300px`,
          gridColumn: `7 / 9`,
          gridRow: `3 / 4`,
        }}
      >
        <PersonImage />
      </div>
    </div>
  )
}

const gridStyle = {
  margin: "1.5rem auto",
  display: "grid",
  maxWidth: 960,
  gridTemplateColumns: "repeat(8, 1fr)",
  gridTemplateRows: "repeat(3, 1fr)",
  gridGap: "3rem 1rem",
}

export default AboutSection
