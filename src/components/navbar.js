import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const Navbar = () => {
  let checkboxInput = React.createRef()

  const toggleCheckbox = e => {
    checkboxInput.checked = false
  }

  return (
    <NavWrapper>
      <Toggler type="checkbox" ref={checkboxInput} />
      <MenuIcon>
        <div />
      </MenuIcon>
      <MainMenu>
        <HomeButton to="/" onClick={toggleCheckbox}>
          Home
        </HomeButton>
        <NavItem href="#about">About Us</NavItem>
        <NavItem href="#visit">Plan a Visit</NavItem>
        <NavItem href="#contact">Contact</NavItem>
      </MainMenu>
    </NavWrapper>
  )
}

const NavWrapper = styled.nav`
  width: 100%;
  position: absolute;
  top: 0;
  z-index: 1;

  @media (max-width: 768px) {
    position: fixed;
  }
`

const MainMenu = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  padding: 1rem 4rem 0 4rem;
  margin: 0 auto;
  transition: transform 0.4s ease-out;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgba(51, 51, 51, 0.75);
    transform: translateY(-100%);
  }
`

const NavItem = styled.a`
  width: 100px;
  padding-bottom: 0.5rem;
  margin: 0.5rem 2rem;
  text-align: center;
  color: #eee;
  border-bottom: 1px solid transparent;
  transition: border-bottom 0.4s ease;

  :hover {
    border-bottom: 1px solid #eee;
    transition: border-bottom 0.4s ease;
  }
`

const HomeButton = styled(Link)`
  width: 100px;
  padding-bottom: 0.5rem;
  margin: 0.5rem 2rem;
  text-align: center;
  color: #eee;
  border-bottom: 1px solid transparent;
  transition: border-bottom 0.4s ease;

  :hover {
    border-bottom: 1px solid #eee;
    transition: border-bottom 0.4s ease;
  }
`

const Toggler = styled.input`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 3;
  cursor: pointer;
  width: 50px;
  height: 50px;
  opacity: 0;

  :checked + div > div {
    transform: rotate(135deg);
    background-color: #eee;
  }

  :checked + div > div:before,
  :checked + div > div:after {
    top: 0;
    transform: rotate(90deg);
  }

  :checked ~ div {
    transform: translateY(0);
  }

  @media (min-width: 769px) {
    visibility: hidden;
  }

  :focus {
    none;
  }
`

const MenuIcon = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 60px;
  height: 60px;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;

  div {
    position: relative;
    width: 100%;
    height: 3px;
    background-color: #cd853f;
    transition: transform, top, background-color, 0.3s ease;
  }

  div:before,
  div:after {
    content: "";
    position: absolute;
    top: -10px;
    width: 100%;
    height: 3px;
    background: inherit;
  }

  div:after {
    top: 10px;
  }

  @media (min-width: 769px) {
    visibility: hidden;
  }
`

export default Navbar
