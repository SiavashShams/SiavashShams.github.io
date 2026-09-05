import React, { useLayoutEffect, useState } from 'react';
export default function Miscellaneous() {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
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
  const photos = [
    { id: 1,  src: "/images/hobbies/n1.jpg",  caption: "Coastal overlook on a road trip down the Pacific Coast Highway" },
    { id: 2,  src: "/images/hobbies/n2.jpg",  caption: "The open road through the California hills" },
    { id: 3,  src: "/images/hobbies/n3.jpg",  caption: "Storm light breaking over the Pacific" },
    { id: 4,  src: "/images/hobbies/n4.jpg",  caption: "Black-and-white portrait against a cloudy sky" },
    { id: 5,  src: "/images/hobbies/n5.jpg",  caption: "Sea caves carved into the coastal cliffs" },
    { id: 6,  src: "/images/hobbies/n6.jpg",  caption: "A good boy taking in the ocean view" },
    { id: 7,  src: "/images/hobbies/n7.jpg",  caption: "A lazy afternoon by Lake Tahoe" },
    { id: 8,  src: "/images/hobbies/n8.jpg",  caption: "Driving the mountain roads near Tahoe" },
    { id: 9,  src: "/images/hobbies/n9.jpg",  caption: "Taking in the alpine views" },
    { id: 10, src: "/images/hobbies/n10.jpg", caption: "An alpine lake framed by the Sierra Nevada" },
    { id: 11, src: "/images/hobbies/n11.jpg", caption: "Snowmelt rushing through the Sierra" },
    { id: 12, src: "/images/hobbies/n12.jpg", caption: "Crystal-clear water along Tahoe's boulder shoreline" },
    { id: 13, src: "/images/hobbies/n13.jpg", caption: "Geese gliding across a calm lake" }
  ];
  
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

  const photo = photos[currentPhotoIndex];
  const previous = () => setCurrentPhotoIndex(index => (index + photos.length - 1) % photos.length);
  const next = () => setCurrentPhotoIndex(index => (index + 1) % photos.length);
  return <div className="shell inner-page outside-page">
    <div className="photography-screen" style={{ '--site-header-height': `${headerHeight}px` }}>
    <div className="page-heading"><p className="eyebrow">Away from the screen</p><h1>Outside work</h1><p>A few photographs from the coast and the mountains.</p></div>
    <section className="photo-gallery" aria-label="Photography collection">
      <figure className="gallery-figure"><div className="gallery-image"><img src={photo.src} alt={photo.caption} width="1920" height="2560"/></div><figcaption><div className="gallery-caption" aria-live="polite"><span className="gallery-number">{String(currentPhotoIndex + 1).padStart(2, '0')} / {photos.length}</span><p>{photo.caption}</p></div><div className="gallery-controls"><button onClick={previous} aria-label="Previous photo">←</button><button onClick={next} aria-label="Next photo">→</button></div></figcaption></figure>
    </section>
    </div>
    <section className="skills-section" aria-labelledby="skills-title"><div className="section-heading"><h2 id="skills-title">Tools I work with</h2></div><div className="skills-grid">{skills.map(skill => <div key={skill.id}><h3>{skill.title}</h3><p>{skill.items.join(', ')}</p></div>)}</div></section>
    <section className="contact-section"><h2>Say hello.</h2><a className="text-link" href="mailto:siavashshams.ac@gmail.com">siavashshams.ac@gmail.com <span aria-hidden="true">↗</span></a></section>
  </div>;
}
