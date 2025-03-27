import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { Container } from './StyledComponents';

const FooterWrapper = styled.footer`
  background-color: var(--nav-bg);
  padding: 2rem 0;
  border-top: 1px solid var(--border-color);
  margin-top: 2rem;
`;

const FooterContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
`;

const SocialIcon = styled(motion.a)`
  color: var(--secondary-color);
  font-size: 1.5rem;
  transition: var(--transition);
  
  &:hover {
    color: var(--primary-color);
  }
`;

const Copyright = styled.p`
  color: var(--accent-color);
  font-size: 0.9rem;
  margin: 0;
`;

const iconVariants = {
  hover: {
    y: -5,
    transition: {
      type: 'spring',
      stiffness: 300
    }
  }
};

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <FooterWrapper>
      <FooterContainer>
        <SocialIcons>
          <SocialIcon 
            href="mailto:ss6928@columbia.edu" 
            target="_blank"
            rel="noopener noreferrer"
            variants={iconVariants}
            whileHover="hover"
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </SocialIcon>
          
          <SocialIcon 
            href="https://www.linkedin.com/in/siavash-shams-90a735176/" 
            target="_blank"
            rel="noopener noreferrer"
            variants={iconVariants}
            whileHover="hover"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </SocialIcon>
          
          <SocialIcon 
            href="https://github.com/SiavashShams" 
            target="_blank"
            rel="noopener noreferrer"
            variants={iconVariants}
            whileHover="hover"
          >
            <FontAwesomeIcon icon={faGithub} />
          </SocialIcon>
          
          <SocialIcon 
            href="https://scholar.google.com/citations?view_op=list_works&hl=en&hl=en&user=xo02sD0AAAAJ&sortby=title" 
            target="_blank"
            rel="noopener noreferrer"
            variants={iconVariants}
            whileHover="hover"
          >
            <i className="ai ai-google-scholar"></i>
          </SocialIcon>
        </SocialIcons>
        
        <Copyright>&copy; {currentYear} Siavash Shams. All rights reserved.</Copyright>
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer; 