import PropTypes from "prop-types"
import React from "react"
import "./header.css" 
// gradient from https://www.gradient-animator.com/

const Header = ({ siteTitle }) => (
  <header
    >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1
        style={{ 
          margin: 0,
          color: 'white'
      }}>
          <a href='/' style = {{
            color: 'white', 
            textDecoration: 'none', 
            textShadow: 'none',
            backgroundImage: 'none'
            }}>
            {siteTitle} 
          </a>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
