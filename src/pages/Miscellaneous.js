import React, { useLayoutEffect, useState } from 'react';
import PhotoCarousel from '../components/PhotoCarousel';
import { photos } from '../data/photos';
export default function Miscellaneous() {
  const [headerHeight, setHeaderHeight] = useState(104);
  useLayoutEffect(() => {
    const header = document.querySelector('.site-header');
    if (!header) return undefined;
    const measureHeader = () => setHeaderHeight(header.getBoundingClientRect().height);
    measureHeader();
    const observer = new ResizeObserver(measureHeader);
    observer.observe(header);
    return () => observer.disconnect();
  }, []);

  
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

  return <div className="shell inner-page outside-page">
    <div className="photography-screen" style={{ '--site-header-height': `${headerHeight}px` }}>
    <div className="page-heading"><p className="eyebrow">Away from the screen</p><h1>Outside work</h1><p>A few photographs from the coast and the mountains.</p></div>
    <PhotoCarousel photos={photos} full />
    </div>
    <section className="skills-section" aria-labelledby="skills-title"><div className="section-heading"><h2 id="skills-title">Tools I work with</h2></div><div className="skills-grid">{skills.map(skill => <div key={skill.id}><h3>{skill.title}</h3><p>{skill.items.join(', ')}</p></div>)}</div></section>
    <section className="contact-section"><h2>Say hello.</h2><a className="text-link" href="mailto:siavashshams.ac@gmail.com">siavashshams.ac@gmail.com <span aria-hidden="true">↗</span></a></section>
  </div>;
}
