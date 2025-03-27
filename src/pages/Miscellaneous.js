import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileDownload, faEnvelope, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import {
  Container,
  Section,
  SectionTitle,
  Card,
  Button,
  fadeIn,
  staggerContainer,
  slideUp
} from '../components/StyledComponents';

const SkillsSection = styled(Section)`
  background-color: var(--hover-color);
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
`;

const SkillCard = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px var(--shadow-color);
  }
`;

const SkillIcon = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const SkillTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.75rem;
`;

const SkillList = styled.ul`
  text-align: left;
  padding-left: 1.2rem;
  
  li {
    margin-bottom: 0.5rem;
  }
`;

const HobbiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`;

const HobbyCard = styled(Card)`
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const HobbyImage = styled.div`
  height: 180px;
  overflow: hidden;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  margin: -1.5rem -1.5rem 1.5rem -1.5rem;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  ${HobbyCard}:hover & img {
    transform: scale(1.05);
  }
`;

const HobbyTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 0.75rem;
`;

const HobbyDescription = styled.p`
  color: var(--text-color);
`;

const ContactSection = styled(Section)`
  text-align: center;
`;

const ContactCard = styled(Card)`
  max-width: 700px;
  margin: 0 auto;
  padding: 2.5rem;
`;

const ContactTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
`;

const ContactText = styled.p`
  margin-bottom: 2rem;
  font-size: 1.1rem;
`;

const ContactButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
`;

const ContactButton = styled(Button)`
  svg {
    margin-right: 0.5rem;
  }
`;

const PhotoSection = styled(Section)`
  background-color: var(--hover-color);
`;

const PhotoShowcaseCard = styled(Card)`
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem;
  position: relative;
  overflow: hidden;
`;

const PhotoContainer = styled.div`
  position: relative;
  height: 500px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  overflow: hidden;
  
  @media (max-width: 768px) {
    height: 300px;
  }
`;

const Photo = styled(motion.img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
`;

const PhotoNavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 5;
  background-color: rgba(255, 255, 255, 0.8);
  color: var(--primary-color);
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  
  &:hover {
    background-color: var(--primary-color);
    color: white;
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  &.prev {
    left: 20px;
  }
  
  &.next {
    right: 20px;
  }
  
  @media (max-width: 768px) {
    width: 32px;
    height: 32px;
    
    &.prev {
      left: 10px;
    }
    
    &.next {
      right: 10px;
    }
  }
`;

const PhotoCaption = styled.div`
  padding: 1rem 0;
  text-align: center;
  font-size: 1.1rem;
  font-weight: 500;
`;

const PhotoCounter = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
`;

const Miscellaneous = () => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  
  const photos = [
    {
      id: 1,
      src: "/images/hobbies/n1.jpg",
      caption: "Breathtaking natural landscape I captured during my adventures"
    },
    {
      id: 2,
      src: "/images/hobbies/n2.jpg",
      caption: "Serene moments in nature"
    },
    {
      id: 3,
      src: "/images/hobbies/n3.jpg",
      caption: "Serene moments in nature"
    },
    {
      id: 4,
      src: "/images/hobbies/n4.jpg",
      caption: "The beauty of our natural world"
    },
    {
      id: 5,
      src: "/images/hobbies/n5.jpg",
      caption: "Exploring the wilderness"
    },
    {
      id: 6,
      src: "/images/hobbies/n6.jpg",
      caption: "A moment with nature's creatures"
    },
    {
      id: 7,
      src: "/images/hobbies/n7.jpg",
      caption: "Me enjoying one of my favorite hiking spots"
    }
  ];
  
  const goToPreviousPhoto = () => {
    setCurrentPhotoIndex((prevIndex) => 
      prevIndex === 0 ? photos.length - 1 : prevIndex - 1
    );
  };
  
  const goToNextPhoto = () => {
    setCurrentPhotoIndex((prevIndex) => 
      prevIndex === photos.length - 1 ? 0 : prevIndex + 1
    );
  };

  const skills = [
    {
      id: 1,
      title: "Programming Languages",
      icon: "/images/icons/code.svg",
      items: ["Python", "Swift", "JavaScript", "MATLAB", "SQL"]
    },
    {
      id: 2,
      title: "Machine Learning",
      icon: "/images/icons/brain.svg",
      items: ["PyTorch", "JAX", "PEFT", "HuggingFace", "Transformers", "scikit-learn"]
    },
    {
      id: 3,
      title: "Web Development",
      icon: "/images/icons/web.svg",
      items: ["React", "HTML/CSS", "Node.js", "Express", "RESTful APIs"]
    },
    {
      id: 4,
      title: "Tools & Technologies",
      icon: "/images/icons/tools.svg",
      items: ["Git", "Docker", "AWS", "Linux", "CUDA", "Signal Processing"]
    }
  ];

  return (
    <Container>
      <SkillsSection
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <SectionTitle>Skills & Expertise</SectionTitle>
        
        <SkillsGrid>
          {skills.map(skill => (
            <motion.div
              key={skill.id}
              variants={slideUp}
            >
              <SkillCard>
                <SkillIcon>
                  <img src={skill.icon} alt={skill.title} />
                </SkillIcon>
                <SkillTitle>{skill.title}</SkillTitle>
                <SkillList>
                  {skill.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </SkillList>
              </SkillCard>
            </motion.div>
          ))}
        </SkillsGrid>
      </SkillsSection>
      
      <PhotoSection
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <SectionTitle>Photography Showcase</SectionTitle>
        
        <PhotoShowcaseCard>
          <PhotoContainer>
            <PhotoNavButton 
              className="prev" 
              onClick={goToPreviousPhoto}
              aria-label="Previous photo"
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </PhotoNavButton>
            
            <Photo
              key={currentPhotoIndex}
              src={photos[currentPhotoIndex].src}
              alt={`Nature photo ${currentPhotoIndex + 1}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
            
            <PhotoCounter>
              {currentPhotoIndex + 1} / {photos.length}
            </PhotoCounter>
            
            <PhotoNavButton 
              className="next" 
              onClick={goToNextPhoto}
              aria-label="Next photo"
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </PhotoNavButton>
          </PhotoContainer>
          
          <PhotoCaption>
            {photos[currentPhotoIndex].caption}
          </PhotoCaption>
        </PhotoShowcaseCard>
      </PhotoSection>
      
      <ContactSection
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <ContactCard>
          <ContactTitle>Get In Touch</ContactTitle>
          <ContactText>
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            Feel free to reach out for collaborations or just a friendly chat.
          </ContactText>
          
          <ContactButtons>
            <ContactButton
              href="mailto:ss6928@columbia.edu"
              as="a"
              primary
            >
              <FontAwesomeIcon icon={faEnvelope} />
              Contact Me
            </ContactButton>
            
          </ContactButtons>
        </ContactCard>
      </ContactSection>
    </Container>
  );
};

export default Miscellaneous; 