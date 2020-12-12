import PropTypes from "prop-types"
import React from "react"
import "./header.css"
import { AiOutlineTwitter, AiOutlineGithub, AiFillLinkedin, AiOutlineFilePdf, AiOutlineMail } from 'react-icons/ai';
import {Box} from "rebass"
// gradient from https://www.gradient-animator.com/

const Header = ({ siteTitle }) => (
  <header>
    <Box
      sx={{
        display: 'grid',
        gridGap: 3,
        gridTemplateColumns: '1fr 1fr',
      }}>
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
          <a href='mailto:abpandya@seas.upenn.edu' style = {{color: 'white', textDecoration: 'none', textShadow: 'none', backgroundImage: 'none'}}> <AiOutlineMail /> </a>
          <a href='https://github.com/abhishekp106' style = {{color: 'white', textDecoration: 'none', textShadow: 'none', backgroundImage: 'none'}}> <AiOutlineGithub /> </a>
          <a href='https://twitter.com/abhishekp106' style = {{color: 'white', textDecoration: 'none', textShadow: 'none', backgroundImage: 'none'}}> <AiOutlineTwitter /> </a>
          <a href='https://www.linkedin.com/in/abhishekanujpandya/' style = {{color: 'white', textDecoration: 'none', textShadow: 'none', backgroundImage: 'none'}}> <AiFillLinkedin /> </a>
          <a href='https://abhishekp106.github.io/resume_latex.pdf' style = {{color: 'white', textDecoration: 'none', textShadow: 'none', backgroundImage: 'none'}}> <AiOutlineFilePdf /> </a>
        </h1>
      </div>
    </Box>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
