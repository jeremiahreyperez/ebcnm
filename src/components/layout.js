import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div>
          <main>{children}</main>
        </div>
        <footer
          style={{
            textAlign: `center`,
            backgroundColor: `#333`,
            color: `#eee`,
            padding: `4px`,
          }}
        >
          © {new Date().getFullYear()},{` `}
          <a
            href="https://www.jeremiahperez.com"
            style={{
              textDecoration: `none`,
              color: `#eee`,
            }}
          >
            Jeremiah Perez
          </a>
        </footer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
