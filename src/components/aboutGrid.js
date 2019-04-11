import React from "react"

import ChurchImage from "./imageComponents/churchImage"
import PersonImage from "./imageComponents/personImage"

const AboutSection = () => {
  return (
    <div style={gridStyle}>
      <div
        style={{
          fontSize: "20px",
          gridColumn: `1 / 4`,
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
          maxWidth: `500px`,
          gridColumn: `4 / 6`,
          gridRow: `1 / 2`,
        }}
      >
        <ChurchImage />
      </div>
      <div
        style={{
          maxWidth: `500px`,
          gridColumn: `1 / 3`,
          gridRow: `2 / 3`,
        }}
      >
        <PersonImage />
      </div>
      <div
        style={{
          fontSize: "20px",
          gridColumn: `3 / 6`,
          gridRow: `2 / 3`,
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, at
        cumque iusto mollitia voluptatum veniam fugit. Voluptas inventore
        ducimus id nobis est recusandae, minima atque sapiente delectus ex ullam
        obcaecati perspiciatis iusto ipsa dolorem doloremque doloribus, repellat
        fugiat. Magni, minus?
      </div>
    </div>
  )
}

const gridStyle = {
  margin: "1.5rem auto",
  display: "grid",
  maxWidth: 768,
  gridTemplateColumns: "repeat(5, 1fr)",
  gridTemplateRows: "repeat(2, 1fr)",
  gridGap: "3rem 1rem",
}

export default AboutSection
