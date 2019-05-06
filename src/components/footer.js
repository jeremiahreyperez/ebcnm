import React from "react"
import styled from "styled-components"

import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons"

library.add(faEnvelope, faPhone, faMapMarkerAlt)

const Footer = () => {
  return (
    <StyledFooter id="contact">
      <ContactInfo>
        <li>
          <Icon icon="envelope" />
          ebcgnm@yahoo.com
        </li>
        <li>
          <Icon icon="phone" />
          (505) 722-7312
        </li>
        <li>
          <Icon icon="map-marker-alt" />
          213 State Road 564, Gallup, NM 37301
        </li>
      </ContactInfo>
      <small>© {new Date().getFullYear()} EMMANUEL BAPTIST CHURCH</small>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  text-align: center;
  background-color: #333;
  color: #ddd;
  padding: 2rem;
  padding-bottom: 4px;
  font-size: 14px;

  a {
    text-decoration: none;
    color: #eee;
  }
`

const ContactInfo = styled.ul`
  display: flex;
  max-width: 375px;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  margin: 2rem auto 5rem auto;

  li {
    display: flex;
    align-items: center;
    margin: 0.5rem;
    font-size: 1.25rem;
    font-weight: 300;
  }
`

const Icon = styled(FontAwesomeIcon)`
  font-size: 2rem;
  color: #ddd;
  margin-right: 1rem;
`

export default Footer
