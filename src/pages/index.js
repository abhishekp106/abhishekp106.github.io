import React from "react"
import {Box, Card, Image, Heading, Text} from "rebass"
import {Tiles} from "@rebass/layout"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import mom_n_me from "../images/mom_n_me.jpg"
import fam from "../images/fam.jpg"
import banff from "../images/banff.jpg"
import yosemite from "../images/yosemite.jpg"
import dolomites from "../images/dolomites.jpg"
import Resume from "../components/resume";
import Picture from "../components/Picture";

const avatar_heading = 'Me n mom ^'
const avatar_description = 'Dolomites, Italy'

const SectionHeader = styled.h2`
    border-top: 2px solid #c7c7c7;
    padding: .2rem 0 .4rem;
    margin-bottom: 1.5rem;
    font-weight: 900;
    letter-spacing: -.05rem;
`;
// border-bottom: 2px solid #c7c7c7;

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
      <p>You can reach me at abpandya@seas.upenn.edu!</p>
    </Box>
      <Box width={[1, 1, 1]}>
        <Card
          sx={{
            p: 1,
            borderRadius: 5,
            boxShadow: '0 0 16px rgba(0, 0, 0, .5)',
          }}>
            <Image src={mom_n_me} width={[1, 1, 1]} sx={{borderRadius: 5}} />
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
    <SectionHeader><p></p>Images</SectionHeader>
    <Tiles columns={[2, null, 4]}>
      <Picture src={fam} heading='Fam' description='Mom, Bo, Dac' />
      <Picture src={dolomites} heading='Dolomites' description='...' />
      <Picture src={yosemite} heading='Yosemite National Park' description='Half Dome' />
      <Picture src={banff} heading='Banff National Park' description='Lake Jasper' />
    </Tiles>
    <p></p>
  </Layout>
)

{/* 
      <Picture src='https://www.nasa.gov/sites/default/files/thumbnails/image/c34-1_0.jpg' heading='Caldwell 34' description='sss' />
      <Picture src='https://www.nasa.gov/sites/default/files/thumbnails/image/c34-1_0.jpg' heading='Caldwell 34' description='sss' />
      <Picture src='https://www.nasa.gov/sites/default/files/thumbnails/image/c34-1_0.jpg' heading='Caldwell 34' description='sss' /> */}

/* <Link to="/page-2/">Go to page 2</Link> <br />
<Link to="/using-typescript/">Go to "Using TypeScript"</Link> */

export default IndexPage
