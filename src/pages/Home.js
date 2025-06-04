import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import {
  Container,
  Section,
  SectionTitle,
  Card,
  Button,
  HeroSection,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
  Text,
  fadeIn,
  staggerContainer,
  slideUp
} from '../components/StyledComponents';

const HeroContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  
  @media (min-width: 768px) {
    flex-direction: row;
    text-align: left;
    align-items: center;
    justify-content: space-between;
  }
`;

const HeroTextContainer = styled.div`
  @media (min-width: 768px) {
    flex: 1;
    padding-right: 2rem;
  }
`;

const HeroImageContainer = styled.div`
  margin-bottom: 2rem;
  
  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

const HeroImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  object-position: top;
  box-shadow: 0 10px 25px var(--shadow-color);
  
  @media (min-width: 768px) {
    width: 250px;
    height: 300px;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const SocialLink = styled(motion.a)`
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  background-color: var(--card-bg);
  border-radius: 50px;
  color: var(--secondary-color);
  text-decoration: none;
  font-weight: 500;
  box-shadow: 0 2px 10px var(--shadow-color);
  
  svg, i {
    margin-right: 0.5rem;
  }
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px var(--shadow-color);
    color: var(--primary-color);
    text-decoration: none;
  }
`;

const PublicationList = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Publication = styled(Card)`
  display: flex;
  flex-direction: column;
  
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

const PublicationContent = styled.div`
  flex: 1;
`;

const PublicationTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const PublicationAuthors = styled.p`
  font-size: 0.95rem;
  color: var(--accent-color);
  margin-bottom: 1rem;
  
  .highlight {
    font-weight: 700;
  }
`;

const PublicationLinks = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-top: 1rem;
`;

const PublicationLink = styled(Button)`
  font-size: 0.9rem;
  padding: 0.3rem 0.75rem;
  
  svg {
    margin-right: 0.5rem;
  }
`;

const Home = () => {
  return (
    <>
      <HeroSection
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <HeroContainer>
          <HeroTextContainer>
            <HeroTitle
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Siavash Shams
            </HeroTitle>
            
            <HeroSubtitle
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Machine Learning Engineer | MSc in Electrical Engineering from Columbia University
            </HeroSubtitle>
            
            <SocialLinks>
              <SocialLink 
                href="mailto:ss6928@columbia.edu" 
                target="_blank"
                whileHover={{ scale: 1.05 }}
              >
                <i className="fas fa-envelope"></i>
                Email
              </SocialLink>
              
              <SocialLink 
                href="https://www.linkedin.com/in/siavash-shams-90a735176/" 
                target="_blank"
                whileHover={{ scale: 1.05 }}
              >
                <i className="fab fa-linkedin"></i>
                LinkedIn
              </SocialLink>
              
              <SocialLink 
                href="https://scholar.google.com/citations?view_op=list_works&hl=en&hl=en&user=xo02sD0AAAAJ&sortby=title" 
                target="_blank"
                whileHover={{ scale: 1.05 }}
              >
                <i className="ai ai-google-scholar"></i>
                Scholar
              </SocialLink>
              
              <SocialLink 
                href="https://github.com/SiavashShams" 
                target="_blank"
                whileHover={{ scale: 1.05 }}
              >
                <i className="fab fa-github"></i>
                GitHub
              </SocialLink>
            </SocialLinks>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <Button as={Link} to="/projects" primary>View My Projects</Button>
              <Button as={Link} to="/experience" style={{ marginLeft: '1rem' }}>My Experience</Button>
            </motion.div>
          </HeroTextContainer>
          
          <HeroImageContainer>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <HeroImage src="./images/me.JPG" alt="Siavash Shams" />
            </motion.div>
          </HeroImageContainer>
        </HeroContainer>
      </HeroSection>
      
      <Section
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <Container>
          <motion.div variants={slideUp}>
            <SectionTitle>About Me</SectionTitle>
            <Text>
              I am a Machine Learning Engineer with an MSc in Electrical Engineering from Columbia University, specializing in deep
              learning and Large Language Models (LLMs). With experience in cutting-edge research and practical projects, I am passionate about
              solving complex problems and building innovative solutions. I am always open to collaborations and opportunities to work
              on impactful projects.
            </Text>
          </motion.div>
        </Container>
      </Section>
      
      <Section
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        style={{ backgroundColor: 'var(--hover-color)' }}
      >
        <Container>
          <motion.div variants={slideUp}>
            <SectionTitle>Publications</SectionTitle>
          </motion.div>
          
          <PublicationList variants={staggerContainer}>
            <Publication variants={slideUp}>
              <PublicationContent>
                <PublicationTitle>Neuro2Semantic: A Transfer Learning Framework for Semantic Reconstruction of Continuous Language from Human Intracranial EEG</PublicationTitle>
                <PublicationAuthors>
                  <span className="highlight">S. Shams</span>, R. Antonello, G. Mischler, S. Bickel, A. Mehta, N. Mesgarani
                </PublicationAuthors>
                <PublicationLinks>
                  <PublicationLink href="https://arxiv.org/abs/2506.00381" target="_blank">
                    <i className="fas fa-file-pdf"></i> arXiv
                  </PublicationLink>
                </PublicationLinks>
              </PublicationContent>
            </Publication>

            <Publication variants={slideUp}>
              <PublicationContent>
                <PublicationTitle>SSAMBA: Self-Supervised Audio Representation Learning with Mamba State Space Model</PublicationTitle>
                <PublicationAuthors>
                  <span className="highlight">S. Shams</span>, S. S. Dindar, X. Jiang, N. Mesgarani
                </PublicationAuthors>
                <PublicationLinks>
                  <PublicationLink href="https://ieeexplore.ieee.org/document/10832304" target="_blank">
                    <FontAwesomeIcon icon={faExternalLinkAlt} /> Published
                  </PublicationLink>
                  <PublicationLink href="https://arxiv.org/abs/2405.11831" target="_blank">
                    <i className="fas fa-file-pdf"></i> arXiv
                  </PublicationLink>
                  <PublicationLink href="https://github.com/SiavashShams/ssamba" target="_blank">
                    <FontAwesomeIcon icon={faGithub} /> Code
                  </PublicationLink>
                </PublicationLinks>
              </PublicationContent>
            </Publication>
            
            <Publication variants={slideUp}>
              <PublicationContent>
                <PublicationTitle>An Optimal Data-Driven Method for Controlling Epileptic Seizures</PublicationTitle>
                <PublicationAuthors>
                  <span className="highlight">S. Shams</span>, S. Motallebi, M. J. Yazdanpanah
                </PublicationAuthors>
                <PublicationLinks>
                  <PublicationLink href="https://ieeexplore.ieee.org/abstract/document/10052912/" target="_blank">
                    <FontAwesomeIcon icon={faExternalLinkAlt} /> Published
                  </PublicationLink>
                </PublicationLinks>
              </PublicationContent>
            </Publication>
            
            <Publication variants={slideUp}>
              <PublicationContent>
                <PublicationTitle>Comprehensive and Gamified Rehabilitation System for Upper-Limb Impairment Treatments</PublicationTitle>
                <PublicationAuthors>
                  V. Yazdnian, A. Delavari, H. Moradi, <span className="highlight">S. Shams</span>, M. Teymouri, A. Rezaei
                </PublicationAuthors>
                <PublicationLinks>
                  <PublicationLink href="https://ieeexplore.ieee.org/document/10025334" target="_blank">
                    <FontAwesomeIcon icon={faExternalLinkAlt} /> Published
                  </PublicationLink>
                </PublicationLinks>
              </PublicationContent>
            </Publication>
          </PublicationList>
        </Container>
      </Section>
    </>
  );
};

export default Home; 