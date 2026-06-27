import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import {
  Container,
  Section,
  SectionTitle,
  Card,
  fadeIn,
  staggerContainer,
  slideUp
} from '../components/StyledComponents';

const TimelineSection = styled(Section)`
  position: relative;
  
  &:before {
    content: '';
    position: absolute;
    width: 3px;
    background-color: var(--primary-color);
    top: 0;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    
    @media (max-width: 768px) {
      left: 30px;
    }
  }
`;

const ExperienceContainer = styled(motion.div)`
  margin-bottom: 4rem;
`;

const ExperienceItem = styled(motion.div)`
  display: flex;
  justify-content: center;
  position: relative;
  margin-bottom: 4rem;
  
  @media (max-width: 768px) {
    justify-content: flex-start;
    margin-left: 60px;
  }
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const ExperienceDate = styled.div`
  position: absolute;
  top: 5px;
  min-width: 150px;
  font-weight: 600;
  color: var(--primary-color);

  @media (max-width: 768px) {
    display: none;
  }

  ${({ position }) => position === 'left' ? `
    left: 50%;
    padding-left: calc(2rem + 10px);
    text-align: left;

    &:after {
      content: '';
      position: absolute;
      width: 20px;
      height: 20px;
      left: -10px;
      top: 0;
      background-color: var(--background-color);
      border: 3px solid var(--primary-color);
      border-radius: 50%;
      z-index: 1;
    }
  ` : `
    right: 50%;
    padding-right: calc(2rem + 10px);
    text-align: right;

    &:after {
      content: '';
      position: absolute;
      width: 20px;
      height: 20px;
      right: -10px;
      top: 0;
      background-color: var(--background-color);
      border: 3px solid var(--primary-color);
      border-radius: 50%;
      z-index: 1;
    }
  `}
`;

const ExperienceContent = styled(Card)`
  width: 45%;
  position: relative;
  
  @media (max-width: 768px) {
    width: 100%;
  }
  
  &:before {
    content: '';
    position: absolute;
    top: 15px;
    width: 0;
    height: 0;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
  }
  
  ${({ position }) => position === 'left' ? `
    margin-right: auto;
    &:before {
      right: -10px;
      border-left: 10px solid var(--card-bg);
    }
  ` : `
    margin-left: auto;
    &:before {
      left: -10px;
      border-right: 10px solid var(--card-bg);
    }
  `}
  
  @media (max-width: 768px) {
    &:before {
      left: -10px;
      border-right: 10px solid var(--card-bg);
      border-left: none;
    }
  }
`;

const MobileDate = styled.p`
  display: none;
  font-weight: 600;
  color: var(--primary-color);
  margin-bottom: 0.75rem;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const ExperienceLogo = styled.div`
  width: 48px;
  height: 48px;
  margin-bottom: 0.75rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 8px;
    background: #ffffff;
    padding: 3px;
  }
`;

const ExperienceTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
`;

const ExperienceCompany = styled.h4`
  font-size: 1.1rem;
  color: var(--accent-color);
  margin-bottom: 1rem;
`;

const ExperienceDescription = styled.div`
  ul {
    padding-left: 1.2rem;
    
    li {
      margin-bottom: 0.5rem;
    }
  }
`;

const EducationContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const EducationItem = styled(Card)`
  display: flex;
  flex-direction: column;
  
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const EducationLogo = styled.div`
  width: 80px;
  height: 80px;
  margin-bottom: 1rem;
  
  @media (min-width: 768px) {
    margin-right: 2rem;
    margin-bottom: 0;
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const EducationContent = styled.div`
  flex: 1;
`;

const EducationDegree = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
`;

const EducationSchool = styled.h4`
  font-size: 1.1rem;
  color: var(--accent-color);
  margin-bottom: 0.5rem;
`;

const EducationPeriod = styled.p`
  font-weight: 500;
  margin-bottom: 1rem;
`;

const EducationDetails = styled.div`
  ul {
    padding-left: 1.2rem;
    
    li {
      margin-bottom: 0.5rem;
    }
  }
`;

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Founding Software Engineer",
      company: "Virtue AI (acqui-hired by Meta Superintelligence Labs, 2026)",
      date: "Nov 2025 - Present",
      logo: "/images/virtue_logo.png",
      description: (
        <ul>
          <li>
            Built and open-sourced Guard Eval Harness (PyPI: geh), a CLI framework benchmarking LLM guardrail, moderation,
            and safety models across 80+ jailbreak, prompt-injection, toxicity, and secure-code benchmarks (text and image).
          </li>
          <li>
            Designed an agentic-AI code-safety evaluation suite (6 benchmark suites) that runs coding agents in sandboxed
            environments and scores generated code for correctness and security.
          </li>
          <li>
            Shipped guardrail safety models to production for 4+ enterprise customers on $1M+/year accounts: Dockerized
            deployments, CVE fixes, and end-to-end feature delivery.
          </li>
        </ul>
      ),
      position: "right"
    },
    {
      id: 2,
      title: "Founding Machine Learning Engineer",
      company: "Sciforium",
      date: "Nov 2024 - Nov 2025",
      logo: "/images/sciforium_logo.png",
      description: (
        <ul>
          <li>
            Built distributed training and fine-tuning pipelines for 1B+ parameter foundation models on a multi-node GPU
            cluster, with post-training (SFT/RLHF/DPO/GRPO) and quantization.
          </li>
          <li>
            Optimized the inference pipeline for 3x faster serving over the baseline, with CI/CD, automated tests, and deployment.
          </li>
          <li>
            Worked across multimodal (audio, text) foundation models and generative AI.
          </li>
        </ul>
      ),
      position: "left"
    },
    {
      id: 3,
      title: "Research Assistant",
      company: "Neural Acoustic Processing Lab, Columbia University",
      date: "Sep 2023 - Dec 2024",
      logo: "/images/columbia_logo.png",
      description: (
        <ul>
          <li>
            Led the development of auditory attention decoding tools using Transformer models and ECoG neural data, achieving a
            15% improvement in decoding accuracy.
          </li>
          <li>
            Authored and implemented SSAMBA, a self-supervised audio representation learning model accepted at SLT 2024,
            surpassing Transformer models in speed by 2x and reducing GPU memory consumption by 97.8%.
          </li>
          <li>
            Innovated multimodal learning techniques to improve model interpretability, advancing brain research.
          </li>
          <li>
            Served as a reviewer for ICLR 2025, evaluating cutting-edge research in machine learning and neuroscience.
          </li>
        </ul>
      ),
      position: "right"
    },
    {
      id: 4,
      title: "Research Assistant",
      company: "Advanced Control Systems Laboratory, University of Tehran",
      date: "Jan 2022 - Sep 2023",
      logo: "/images/ut_logo.png",
      description: (
        <ul>
          <li>
            Developed a comprehensive framework for the optimal control of complex networks, including optimal driver node selection.
          </li>
          <li>
            Tested the framework for desynchronization of brain networks to stop epileptic seizures.
          </li>
          <li>
            Contributed to a paper on epileptic seizure control using data-driven approaches, which was published in an IEEE conference.
          </li>
        </ul>
      ),
      position: "left"
    },
    {
      id: 5,
      title: "Research Assistant",
      company: "Advanced Robotics and Intelligent Systems Laboratory, University of Tehran",
      date: "Jun 2022 - Sep 2022",
      logo: "/images/ut_logo.png",
      description: (
        <ul>
          <li>
            Designed a comprehensive platform for upper limb rehabilitation using gamification methods.
          </li>
          <li>
            Developed a low-cost, efficient, and specific movement data acquisition system to motivate patients.
          </li>
          <li>
            Conducted experiments to evaluate the designed platform, with findings submitted to ICROM2022.
          </li>
        </ul>
      ),
      position: "right"
    }
  ];

  const education = [
    {
      id: 1,
      degree: "Master of Science in Electrical Engineering",
      school: "Columbia University",
      logo: "/images/columbia_logo.png",
      period: "2023 - 2024",
      details: (
        <ul>
          <li>Specialization in Machine Learning and Signal Processing</li>
          <li>GPA: 4.09/4.0</li>
          <li>Relevant Coursework: Deep Learning, Machine Learning, Natural Language Processing, Computer Vision, Advanced Topics in AI</li>
          <li>Graduate Research Assistant at NeuroTech Lab under Prof. Mesgarani, focusing on audio representation learning</li>
        </ul>
      )
    },
    {
      id: 2,
      degree: "Bachelor of Science in Electrical Engineering",
      school: "University of Tehran",
      logo: "/images/ut_logo.png",
      period: "2018 - 2022",
      details: (
        <ul>
          <li>Specialization in Control Systems and Signal Processing</li>
          <li>GPA: 3.91/4.0</li>
          <li>Relevant Coursework: Digital Signal Processing, Linear Control Systems, Stochastic Processes, Linear Algebra</li>
          <li>Research Assistant at Neural Systems Lab, working on EEG signal processing and seizure control</li>
        </ul>
      )
    }
  ];

  return (
    <Container>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <SectionTitle>Work Experience</SectionTitle>
      </motion.div>
      
      <TimelineSection>
        <ExperienceContainer
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {experiences.map((exp) => (
            <ExperienceItem key={exp.id} variants={slideUp}>
              <ExperienceDate position={exp.position}>{exp.date}</ExperienceDate>
              <ExperienceContent position={exp.position}>
                <MobileDate>{exp.date}</MobileDate>
                {exp.logo && (
                  <ExperienceLogo>
                    <img src={exp.logo} alt={`${exp.company} logo`} />
                  </ExperienceLogo>
                )}
                <ExperienceTitle>{exp.title}</ExperienceTitle>
                <ExperienceCompany>{exp.company}</ExperienceCompany>
                <ExperienceDescription>{exp.description}</ExperienceDescription>
              </ExperienceContent>
            </ExperienceItem>
          ))}
        </ExperienceContainer>
      </TimelineSection>
      
      <Section>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <SectionTitle>Education</SectionTitle>
        </motion.div>
        
        <EducationContainer
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {education.map((edu) => (
            <motion.div key={edu.id} variants={slideUp}>
              <EducationItem>
                <EducationLogo>
                  <img src={edu.logo} alt={`${edu.school} logo`} />
                </EducationLogo>
                <EducationContent>
                  <EducationDegree>{edu.degree}</EducationDegree>
                  <EducationSchool>{edu.school}</EducationSchool>
                  <EducationPeriod>{edu.period}</EducationPeriod>
                  <EducationDetails>{edu.details}</EducationDetails>
                </EducationContent>
              </EducationItem>
            </motion.div>
          ))}
        </EducationContainer>
      </Section>
    </Container>
  );
};

export default Experience; 