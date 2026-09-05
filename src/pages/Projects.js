import React, { useState } from 'react';
export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');
  const sourceProjects = [
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
  
  const summaries = {
    1: 'An audio editor on NVIDIA Jetson Nano that combines source separation with language models. Edit audio with instructions such as “reduce the background noise” or “amplify the vocals.”',
    2: 'Text-guided music generation with MusicGen and multimodal embeddings, turning descriptions into multi-instrument compositions.',
    3: 'Fine-tuning GPT-2 for text generation and spam classification using the SMSSpamCollection dataset.',
    4: 'A YOLO-based system for detecting motorcycle helmet use, with custom training data and non-maximum suppression.',
    5: 'Matching EEG recordings to speech stimuli for the ICASSP 2024 Challenge, connecting neural signals with what a listener hears.',
    6: 'Self-supervised audio representation learning with the Mamba state space model. Published at IEEE SLT 2024.'
  };
  const projects = [6, 1, 2, 5, 3, 4].map(id => sourceProjects.find(project => project.id === id));
  const filteredProjects = projects.filter(project => activeCategory === 'all' || project.category === activeCategory);
  return <div className="shell inner-page">
    <div className="page-heading"><p className="eyebrow">Ideas, implemented</p><h1>Projects</h1><p>Experiments in audio, language, vision, and neural signals.</p></div>
    <div className="project-filters" role="group" aria-label="Filter projects by topic">{categories.map(category => <button key={category.id} onClick={() => setActiveCategory(category.id)} aria-pressed={activeCategory === category.id}>{category.label.replace('All Projects', 'All projects')}</button>)}</div>
    <p className="project-count" role="status">{filteredProjects.length} projects</p>
    <div className="project-list">{filteredProjects.map(project => <article className="project-row" key={project.id}>
      <div className="project-copy"><h2>{project.title}</h2><p className="project-description">{summaries[project.id]}</p><p className="project-tags">{project.tags.join(' · ')}</p><div className="text-links"><a href={project.github} target="_blank" rel="noreferrer" aria-label={`Code for ${project.title}`}>Code <span aria-hidden="true">↗</span></a>{project.demo && <a href={project.demo} target="_blank" rel="noreferrer" aria-label={`Paper for ${project.title}`}>Paper <span aria-hidden="true">↗</span></a>}</div></div>
      <a className="project-visual" href={project.github} target="_blank" rel="noreferrer" aria-label={`View ${project.title} on GitHub`}><img src={project.image} alt={project.title} loading="lazy" width="220" height="160"/></a>
    </article>)}</div>
  </div>;
}
