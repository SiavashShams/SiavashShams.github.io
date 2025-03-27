import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import {
  Container,
  Section,
  SectionTitle,
  Card,
  fadeIn,
  staggerContainer,
  slideUp
} from '../components/StyledComponents';

const CategoryTabs = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const CategoryTab = styled.button`
  background: ${props => props.active ? 'var(--primary-color)' : 'var(--card-bg)'};
  color: ${props => props.active ? 'white' : 'var(--text-color)'};
  border: none;
  border-radius: 30px;
  padding: 0.5rem 1.25rem;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px var(--shadow-color);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px var(--shadow-color);
    background: ${props => props.active ? 'var(--primary-color)' : 'var(--hover-color)'};
  }
`;

const ProjectsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`;

const ProjectCard = styled(motion(Card))`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px var(--shadow-color);
  }
`;

const ProjectImage = styled.div`
  height: 200px;
  overflow: hidden;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  margin: -1.5rem -1.5rem 1.5rem -1.5rem;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: ${props => props.containImage ? 'contain' : 'cover'};
    background-color: ${props => props.containImage ? 'var(--card-bg)' : 'transparent'};
    transition: transform 0.5s ease;
  }
  
  ${ProjectCard}:hover & img {
    transform: scale(1.05);
  }
`;

const CustomImageContainer = styled(ProjectImage)`
  &.orchestrator img {
    object-fit: contain;
    background-color: var(--card-bg); /* Uses your theme's card background color */
  }
  
  &.eeg img {
    object-fit: contain;
    background-color: var(--card-bg);
  }
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: auto;
  padding-top: 1rem;
`;

const Tag = styled.span`
  background-color: var(--hover-color);
  color: var(--accent-color);
  font-size: 0.75rem;
  font-weight: 500;
  padding: 0.3rem 0.6rem;
  border-radius: 30px;
`;

const ProjectTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 0.75rem;
`;

const ProjectDescription = styled.p`
  color: var(--text-color);
  margin-bottom: 1.5rem;
  flex-grow: 1;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const ProjectLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--primary-color);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
  
  &:hover {
    color: var(--secondary-color);
  }
  
  svg {
    font-size: 1.1rem;
  }
`;

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: "Listen, Chat, and Edit on the Edge",
      description: "Engineered a real-time, edge-deployed multimodal audio editor on NVIDIA Jetson Nano. Combined ConvTasNet for audio separation and LLaMA2 for natural language understanding, enabling users to edit audio with text instructions. The system processes commands like 'reduce the background noise' or 'amplify the vocals' with minimal latency, optimized for edge computing.",
      image: "/images/projects/lce.jpg",
      github: "https://github.com/SiavashShams/Listen-Chat-Edit-on-Edge",
      tags: ["Edge Computing", "Audio Processing", "LLaMA2", "Jetson Nano", "ConvTasNet"],
      category: "audio"
    },
    {
      id: 2,
      title: "Music Orchestrator",
      description: "Fine-tuned Meta's MusicGen model using multimodal embedding techniques to generate high-quality multi-instrument music tracks from text instructions. The system takes descriptive prompts such as 'upbeat jazz with piano solo' and produces coherent musical compositions, incorporating audio descriptors to enhance the quality and specificity of generated music.",
      image: "/images/projects/music_orchestrator.png",
      github: "https://github.com/susameddin/music_orchestrator",
      tags: ["Music Generation", "MusicGen", "Transformers", "Audio Synthesis", "Multimodal"],
      category: "audio"
    },
    {
      id: 3,
      title: "Fine-Tuning GPT-2 for Text Generation and Classification",
      description: "Implemented and fine-tuned GPT-2 for dual tasks: natural text generation and spam classification. Using the SMSSpamCollection dataset, I customized the pre-trained model to identify spam messages while maintaining coherent text generation capabilities, demonstrating the versatility of transformer architectures for classification and generation tasks.",
      image: "/images/projects/spam.jpg",
      github: "https://github.com/SiavashShams/Spam_detection_GPT2",
      tags: ["NLP", "GPT-2", "Text Classification", "Transfer Learning", "Transformers"],
      category: "nlp"
    },
    {
      id: 4,
      title: "Motorcycle Helmet Detection Using YOLO",
      description: "Developed an advanced helmet detection system for traffic safety monitoring using YOLO (You Only Look Once) architecture. Trained the model on a custom dataset with merged classes to improve detection robustness, and implemented Non-Maximum Suppression (NMS) to eliminate redundant detections, enhancing accuracy in real-world traffic scenarios.",
      image: "/images/projects/helmet.jpg",
      github: "https://github.com/SiavashShams/Helmet-Rule-Violation-Detection-YOLO",
      tags: ["Computer Vision", "YOLO", "Object Detection", "Traffic Safety", "Deep Learning"],
      category: "computer-vision"
    },
    {
      id: 5,
      title: "EEG-Speech Classification for ICASSP 2024 Challenge",
      description: "Created an innovative model for the ICASSP 2024 Challenge that classifies EEG and speech data using a match-mismatch paradigm. The approach improved classification accuracy by 3% by determining whether a given EEG signal corresponds to the presented speech stimulus, contributing to advancements in brain-computer interfaces and speech processing.",
      image: "/images/projects/task_matchmismatch.png",
      github: "https://github.com/SiavashShams/EEG_Challenge",
      tags: ["EEG", "Speech Processing", "Neural Decoding", "Classification", "Deep Learning"],
      category: "brain"
    },
    {
      id: 6,
      title: "SSAMBA: Audio Representation Learning",
      description: "Self-supervised audio representation learning using the Mamba State Space Model. Achieved state-of-the-art performance on multiple audio classification tasks, surpassing Transformer models in speed by 2x and reducing GPU memory consumption by 97.8%. Published in IEEE SLT 2024.",
      image: "/images/projects/ssamba.png",
      github: "https://github.com/SiavashShams/ssamba",
      demo: "https://ieeexplore.ieee.org/document/10832304",
      tags: ["Deep Learning", "Audio Processing", "Mamba SSM", "PyTorch", "Self-Supervised Learning"],
      category: "audio"
    }
  ];
  
  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'audio', label: 'Audio & Speech' },
    { id: 'computer-vision', label: 'Computer Vision' },
    { id: 'brain', label: 'Brain & EEG' },
    { id: 'nlp', label: 'Natural Language' }
  ];
  
  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);
  
  return (
    <Container>
      <Section
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <SectionTitle>My Projects</SectionTitle>
        
        <CategoryTabs>
          {categories.map(category => (
            <CategoryTab
              key={category.id}
              active={activeCategory === category.id}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.label}
            </CategoryTab>
          ))}
        </CategoryTabs>
        
        <AnimatePresence mode="wait">
          <ProjectsGrid
            key={activeCategory}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {filteredProjects.map(project => (
              <ProjectCard
                key={project.id}
                variants={slideUp}
                layout
              >
                {project.image && (
                  <ProjectImage containImage={project.id === 2 || project.id === 5}>
                    <img src={project.image} alt={project.title} />
                  </ProjectImage>
                )}
                
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                
                <ProjectLinks>
                  {project.github && (
                    <ProjectLink href={project.github} target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faGithub} />
                      GitHub
                    </ProjectLink>
                  )}
                  {project.demo && (
                    <ProjectLink href={project.demo} target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faExternalLinkAlt} />
                      Demo
                    </ProjectLink>
                  )}
                </ProjectLinks>
                
                <Tags>
                  {project.tags.map((tag, index) => (
                    <Tag key={index}>{tag}</Tag>
                  ))}
                </Tags>
              </ProjectCard>
            ))}
          </ProjectsGrid>
        </AnimatePresence>
      </Section>
    </Container>
  );
};

export default Projects; 