import React from "react"
import { PageProps, Link, graphql } from "gatsby"
import {Box, Card, Image, Heading, Text} from "rebass"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "./resume.css"

interface Props {}

const SectionHeader = styled.h2`
    border-top: 2px solid #c7c7c7;
    border-bottom: 2px solid #c7c7c7;
    padding: .2rem 0 .4rem;
    margin-bottom: 1.5rem;
    font-weight: 900;
    letter-spacing: -.05rem;
`;

const ResumeItemTitle = styled.h3`
    font-weight: 700;
    margin: 0 0 .75rem;
    letter-spacing: -0.05rem;
    line-height: 1;
`;

const ResumeItemDetails = styled.h4`
    margin: 0 0 .75rem;
    line-height: 1;
`;

const ResumeItem = styled.p`
    margin: .75rem 0 0;
`;

const Resume: React.FC<Props> = () => (
  <Box>
      <SectionHeader>Education</SectionHeader>
        <ResumeItemTitle>University of Pennsylvania</ResumeItemTitle>
        <ResumeItemDetails>BAS, Computer and Information Science • 2019 — 2023</ResumeItemDetails>
        <ResumeItem>Coursework: Engineering Probability, Linear Algebra, Big Data Analytics, Discrete Mathematics, Scaling Operations in Tech Ventures </ResumeItem>
        <p>GPA: 3.88</p>

        <ResumeItemTitle>South Brunswick High School</ResumeItemTitle>
        <ResumeItemDetails>High School Diploma • 2019</ResumeItemDetails>
        <ul>
            <li>Attended <a href="https://soe.rutgers.edu/gset"> NJ Governor's School</a> of Engineering and Technology.</li>
            <li>National Merit Scholarship Winner - Mary E. Beyerle Scholarship.</li>
            <li>Outstanding Math Student<a href="http://tarangsriv.me/">.</a></li>
            <li>National AP Scholar</li>        
        </ul>
        <ResumeItem>Highlighted Coursework: Data Structures, Game Theory, Intro to Data Science, Multivariable Calculus, Linear Algebra, Differential Equations, Complex Analysis</ResumeItem>

      <SectionHeader>Experience</SectionHeader>
      
      <ResumeItemTitle>Keep.id</ResumeItemTitle>
      <ResumeItemDetails>Backend Software Engineer • July 2020 — September 2020</ResumeItemDetails>
      <ResumeItem>Helped develop the backend for <a href="https://keep.id/home">Keep.id</a>, a secure document storage platform for identification used to assist the homeless in government aid, jobs, and homelessness services. Worked on PDF upload, PDF annotation, and encryption. Achieved HIPAA Compliance for encryption of personal information.</ResumeItem>
      <p></p>
      
      <ResumeItemTitle>University of Pennsylvania, CIS Department</ResumeItemTitle>

      <SectionHeader>Projects</SectionHeader>

      <SectionHeader>Skills</SectionHeader>

      <SectionHeader>Associations</SectionHeader>
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
            padding: 30,
            borderRadius: 12,
        }}>
            Hello World
      </div>
  </Box>
)

export default Resume
