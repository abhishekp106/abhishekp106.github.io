import React from "react"
import { PageProps, Link, graphql } from "gatsby"
import {Box, Card, Image, Heading, Text} from "rebass"
import styled from "styled-components"

import Layout from "./layout"
import SEO from "./seo"

interface ImageCardProps {
    src: string;
    heading: string;
    description: string;
}

const Picture: React.FC<ImageCardProps> = (props) => (
    <Card
        sx={{
        p: 1,
        borderRadius: 5,
        boxShadow: '0 0 16px rgba(0, 0, 0, .5)',
        }}>
        <Image src={props.src} width={[1, 1, 1]} sx={{borderRadius: 5}} />
        <Box px={2}>
            <Heading as='h3'>
            {props.heading}
            </Heading>
            <Text fontSize={0}>
            {props.description}
            </Text>
        </Box>
    </Card>
)

export default Picture;