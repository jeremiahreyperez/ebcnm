import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import AboutSection from "../components/aboutSection"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[`emmanuel`, `baptist`, `church`, `gallup`, `new mexico`]}
    />
    <AboutSection />
  </Layout>
)

export default IndexPage
