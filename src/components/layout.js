/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
//import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <div
        style={{
            '--color-1': 'deepskyblue',
            '--color-2': 'slateblue',
            background: `
            linear-gradient(
                170deg,
                var(--color-1),
                var(--color-2) 80%
            )
            `,
            // Unrelated styles:
            color: 'white',
            textAlign: 'center',
            padding: 10,
            borderRadius: 5,
            height: '50px'
        }}>
            Built by Abhishek Pandya using React, Gatsby, and Rebass
      </div>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
