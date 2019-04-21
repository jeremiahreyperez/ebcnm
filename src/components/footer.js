import React from "react"
import styled from "styled-components"

const Footer = () => {
  return (
    <StyledFooter id="contact">
      <ContactInfo>
        <li>Email: ebcgnm@yahoo.com</li>
        <li>Phone: (505) 722-7312</li>
        <li>Address: 213 State Road 564, Gallup, NM 37301</li>
      </ContactInfo>
      © {new Date().getFullYear()}
      {` `}
      <a href="https://www.jeremiahperez.com">Jeremiah Perez</a>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  text-align: center;
  background-color: #333;
  color: #ddd;
  padding: 4px;
  font-size: 14px;

  a {
    text-decoration: none;
    color: #eee;
  }
`

const ContactInfo = styled.ul`
  display: flex;
  width: 275px;
  flex-direction: column;
  justify-content: space-around;
  text-align: left;
  margin: 2rem auto 5rem auto;

  li {
    margin: 0.5rem;
    font-size: 1.25rem;
    font-weight: 300;
  }
`

export default Footer
