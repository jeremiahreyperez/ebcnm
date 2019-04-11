import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import AboutSection from "../components/aboutSection"
import VisitSection from "../components/visitSection"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[`emmanuel`, `baptist`, `church`, `gallup`, `new mexico`]}
    />
    <AboutSection />
    <VisitSection />
  </Layout>
)

export default IndexPage
