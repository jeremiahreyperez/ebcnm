import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"

const NotFoundPage = () => (
  <>
    <SEO title="404: Not found" />
    <h1>It's empty!</h1>
    <p>
      This page does not exist, so you will find this page empty just like Jesus
      Christ's tomb.
    </p>
    <Link to="/">Return to Emmanuel Baptist Church's homepage.</Link>
  </>
)

export default NotFoundPage
