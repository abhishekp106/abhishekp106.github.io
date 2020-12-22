// If you don't want to use TypeScript you can delete this file!
import React, { useState } from "react"
import { Link } from "gatsby"
import { Document, Page } from 'react-pdf';

import Layout from "../components/layout"
import SEO from "../components/seo"


interface Props {}

const Resume: React.FC<Props> = () => {
  const [file, setFile] = React.useState('https://github.com/abhishekp106/abhishekp106.github.io/raw/development/src/resources/resume.pdf');
  const [numPages, setNumPages] = React.useState(null);
  
  return (
    <Layout>
      <SEO title="Resume" />
      <h1>HALLO!</h1>
      <div>
        <Document file={file}></Document>
      </div>
      <p>This means that you can create and write <em>.ts/.tsx</em> files for your pages, components etc. Please note that the <em>gatsby-*.js</em> files (like gatsby-node.js) currently don't support TypeScript yet.</p>
      <p>For type checking you'll want to install <em>typescript</em> via npm and run <em>tsc --init</em> to create a <em>.tsconfig</em> file.</p>
      <p>To learn more, head over to our <a href="https://www.gatsbyjs.com/docs/typescript/">documentation about TypeScript</a>.</p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default Resume
