import React from "react"

import SEO from "../components/seo"
import GlobalStyle from "../components/theme/globalStyle"

import StyledShowcase from "../components/showcase"
import Navbar from "../components/navbar"
import About from "../components/about"
import Footer from "../components/footer"
import Visit from "../components/visit"

const Index = ({ data }) => {
  return (
    <>
      <GlobalStyle />
      <SEO
        title="Home"
        keywords={[`emmanuel`, `baptist`, `church`, `gallup`, `new mexico`]}
      />
      <Navbar />
      <StyledShowcase />
      <About />
      <Visit />
      <Footer />
    </>
  )
}

export default Index
