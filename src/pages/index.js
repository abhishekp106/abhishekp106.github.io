import React from "react"
import { Link } from "gatsby"
import {Box, Card, Image, Heading, Text} from "rebass"

import Layout from "../components/layout"
import SEO from "../components/seo"
import avatar from "../images/avatar.png"
import mom_n_me from "../images/mom_n_me.jpg"
import Resume from "../components/resume";

const avatar_heading = 'Me and mom ^'
const avatar_description = 'I have new glasses now.'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h2>Hey there!</h2>
    <Box
      sx={{
        display: 'grid',
        gridGap: 3,
        gridTemplateColumns: '3fr 1fr',
      }}>
      <Box width={[1, 1, 0.95]}>
      <p>
        I'm <b>Abhishek Pandya</b>, a student at the <em>University of Pennsylvania</em> pursuing a BAS in <b>Computer Science</b> and a MSE in <b>Data Science</b>.
        I love teaching math and spreading the word about <b><a href="https://80000hours.org/key-ideas/">effective</a></b> <b><a href="https://www.effectivealtruism.org/articles/introduction-to-effective-altruism/">altruism</a></b>.
        I am interested in AI Safety and Machine Learning, among other things.
        I am looking for SWE internships and research positions.
        I grew up in Central Jersey.
      </p>
    </Box>
      <Box width={[1, 1, 1]}>
        <Card
          sx={{
            p: 1,
            borderRadius: 2,
            boxShadow: '0 0 16px rgba(0, 0, 0, .25)',
          }}>
            <Image src={mom_n_me} width={[1, 1, 1]} />
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
    <Resume />
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
