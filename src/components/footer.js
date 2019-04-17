import React from "react"
import styled from "styled-components"

const Footer = () => {
  return (
    <StyledFooter>
      © {new Date().getFullYear()}
      {` `}
      <a href="https://www.jeremiahperez.com">Jeremiah Perez</a>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  text-align: center;
  background-color: #333;
  color: #eee;
  padding: 4px;

  a {
    text-decoration: none;
    color: #eee;
  }
`

export default Footer
