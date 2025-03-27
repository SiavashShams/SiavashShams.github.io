import styled from 'styled-components';
import { motion } from 'framer-motion';

// Container components
export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;

  @media (min-width: 768px) {
    padding: 0 2rem;
  }
`;

export const Section = styled(motion.section)`
  padding: 4rem 0;
  position: relative;
`;

export const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2rem;
  position: relative;
  display: inline-block;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -0.5rem;
    left: 0;
    width: 60px;
    height: 3px;
    background-color: var(--primary-color);
  }
`;

// Card components
export const Card = styled(motion.div)`
  background-color: var(--card-bg);
  border-radius: 12px;
  box-shadow: 0 5px 15px var(--shadow-color);
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  transition: var(--transition);
  border: 1px solid var(--border-color);
  
  &:hover {
    box-shadow: 0 8px 25px var(--shadow-color);
    transform: translateY(-5px);
  }
`;

export const CardTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--secondary-color);
`;

export const CardContent = styled.div`
  color: var(--text-color);
`;

// Button components
export const Button = styled.a`
  display: inline-block;
  background-color: ${props => props.primary ? 'var(--primary-color)' : 'transparent'};
  color: ${props => props.primary ? 'white' : 'var(--primary-color)'};
  border: 2px solid var(--primary-color);
  padding: 0.5rem 1.5rem;
  border-radius: 50px;
  font-weight: 600;
  transition: var(--transition);
  cursor: pointer;
  text-decoration: none;
  
  &:hover {
    background-color: ${props => props.primary ? 'transparent' : 'var(--primary-color)'};
    color: ${props => props.primary ? 'var(--primary-color)' : 'white'};
    text-decoration: none;
  }
`;

// Grid components
export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
`;

// Hero section components
export const HeroSection = styled(motion.section)`
  padding: 6rem 0;
  background-color: var(--background-color);
  position: relative;
  overflow: hidden;
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 1;
`;

export const HeroTitle = styled(motion.h1)`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  
  @media (min-width: 768px) {
    font-size: 4rem;
  }
`;

export const HeroSubtitle = styled(motion.p)`
  font-size: 1.25rem;
  color: var(--accent-color);
  margin-bottom: 2rem;
  
  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

// Image components
export const RoundedImage = styled.img`
  border-radius: 50%;
  object-fit: cover;
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 8px 8px 0 0;
`;

// Text components
export const Text = styled.p`
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

export const Muted = styled.span`
  color: var(--accent-color);
`;

// Animation variants
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.6 }
  }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

export const slideUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 10 }
  }
}; 