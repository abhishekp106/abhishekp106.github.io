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
      <ResumeItemDetails>CIS 160 (Discrete Mathematics) Teaching Assistant • Jan, 2020 — Dec, 2020</ResumeItemDetails>
      <ResumeItem>Teaching Assistant for CIS 160: Mathematical Foundations of Computer Science. Responsibilities include holding weekly office hours, creating and grading homework assignments, and leading recitations of 20+ students.</ResumeItem>
      <p>Topics Include: Set Theory, Proof Techniques, Combinatorics, Probability, Graph Theory.</p>

      <ResumeItemTitle>Program in Combinatorial and Algorithmic Thinking</ResumeItemTitle>
      <ResumeItemDetails>Teaching Assistant/Student • June 2020 — July 2020</ResumeItemDetails>
      <ResumeItem>Taught recitations on university-level discrete mathematics to high school students in India, China, and Africa. Studied graduate-level randomized and approximation algorithms and different models of computation.</ResumeItem>

      <SectionHeader>Projects</SectionHeader>

      <ResumeItemTitle><a href="https://github.com/hack4impact-upenn/onward-survey">Onward Financial Survey</a> [Hack4Impact]</ResumeItemTitle>
      <ResumeItemDetails>Full Stack Developer • October — December 2020</ResumeItemDetails>
      <ResumeItem>Onward Financial (F2020): Helping employers understand their workers' financial wellness through data analytics and visualization. Project completed as a part of Hack4Impact, University of Pennsylvania.</ResumeItem>
      <p></p>

      <ResumeItemTitle><a href="https://github.com/abhishekp106/DeepRL">Deep Q-Learning (DQN)</a></ResumeItemTitle>
      <ResumeItemDetails>Sole Developer • June 2020</ResumeItemDetails>
      <ResumeItem>I implemented the Deep Reinforcement Learning Algorithm DQN, described in the Deepmind Paper here in PyTorch. It works on toy environments (CartPole), and I am working on adapting this to Atari games. I also implemented a Vanilla Policy Gradient Algorithm, using an average reward as baseline and reward-to-go.</ResumeItem>
      <p></p>

      <ResumeItemTitle><a href="https://github.com/abhishekp106/DataScienceProjects/blob/master/CIS545FinalProject.ipynb">Analysis of Kaggle US Accidents Dataset</a></ResumeItemTitle>
      <ResumeItemDetails>Sole Developer • April - May 2020</ResumeItemDetails>
      <ResumeItem>Here, I've analyzed the US Accidents dataset from Kaggle. I studied where and when accidents happen, and how to characterize the accidents on a large set of criteria, including location, time, and other factors. I attempt to predict the duration of the accident, given a variety of factors, including the severity, the location, precipitation, and others.</ResumeItem>
      <p></p>

      <ResumeItemTitle><a href="https://github.com/abhishekp106/DataScienceProjects/blob/master/WAFChallenge.ipynb">YouTube Recommendation Algorithm</a></ResumeItemTitle>
      <ResumeItemDetails>Sole Developer • January 2020</ResumeItemDetails>
      <ResumeItem>I wrote a recommendation algorithm for a dataset of YouTube videos using K-Means and TF-IDF techniques.</ResumeItem>

      <SectionHeader>Skills</SectionHeader>

      <ResumeItemDetails>Programming Languages and Relevant Libraries</ResumeItemDetails>
      <ResumeItem>Python (pandas, scikit-learn, numpy, PyTorch), Java, C, LaTeX, R</ResumeItem>
      <p></p>

      <ResumeItemDetails>Teaching</ResumeItemDetails>
      <ResumeItem>I have taught students ranging from middle school to college, in topics such as programming, competition math, and discrete math for 5+ years.</ResumeItem>

      <SectionHeader>Associations</SectionHeader>

      <ResumeItemTitle><a href="https://www.1fortheworld.org/">One for the World</a> - Penn Undergraduate Chapter</ResumeItemTitle>
      <ResumeItemDetails>Co-President • Aug 2020 — Present</ResumeItemDetails>
      <ResumeItem>I help organize events, assist in marketing initiatives, and table biweekly to encourage students to pledge to donate 1% of their income to the world's most effective charities. Globally, we have donated our millionth dollar. I help build the EA community and education at Penn.</ResumeItem>
      <p></p>

      <ResumeItemTitle><a href="https://hack4impact.org/">Hack4Impact</a></ResumeItemTitle>
      <ResumeItemDetails>Technical Developer • Sep 2020 — Present</ResumeItemDetails>
      <ResumeItem>I help build technical products for nonprofits and socially responsible organizations.</ResumeItem>
      <p></p>

      <ResumeItemTitle> <a href="https://sbhsscioly.github.io/">Science Olympiad at SBHS</a> </ResumeItemTitle>
      <ResumeItemDetails>Team Captain • 2012 — 2019</ResumeItemDetails>
      <ResumeItem>I arranged travels and logistics for my high school Science Olympiad team of 40+ members. I competed in many Earth Science events, and won multiple NJ state medals.</ResumeItem>
      <p></p>

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
