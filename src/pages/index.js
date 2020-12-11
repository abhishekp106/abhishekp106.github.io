import React from "react"
import { Link } from "gatsby"
import {Box, Card, Image, Heading, Text} from "rebass"
import { Tiles } from "@rebass/layout"

import Layout from "../components/layout"
import SEO from "../components/seo"
import avatar from "../images/avatar.png"

const avatar_heading = 'This is me ^'
const avatar_description = 'I have new glasses now.'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hey there!</h1>
    <Box
      sx={{
        display: 'grid',
        gridGap: 3,
        gridTemplateColumns: '3fr 1fr',
      }}>
      <Box width={[1, 2, 0.95]}>
      <p>
        Hi! I'm <b>Abhishek Pandya</b>, a student at the <a href="https://www.upenn.edu/">University of Pennsylvania</a> pursuing a BAS in <b>Computer Science</b> and a MSE in <b>Data Science</b>.
        I love teaching math and spreading the word about <b><a href="https://80000hours.org/key-ideas/">effective</a></b> <b><a href="https://www.effectivealtruism.org/articles/introduction-to-effective-altruism/">altruism</a></b>.
        I am interested in AI Safety and Machine Learning, among other things.
        I am looking for SWE internships and research positions.
        I grew up in Central Jersey.
      </p>
    </Box>
      <Box width={256}>
        <Card
          sx={{
            p: 1,
            borderRadius: 2,
            boxShadow: '0 0 16px rgba(0, 0, 0, .25)',
          }}>
            <Image src={avatar} />
            <Box px={2}>
              <Heading as='h3'>
                {avatar_heading}
              </Heading>
              <Text fontSize={0}>
                {avatar_description}
              </Text>
            </Box>
          </Card>
      </Box>
    </Box>
    <p></p>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
