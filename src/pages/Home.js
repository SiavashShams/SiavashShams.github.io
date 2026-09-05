import React from 'react';
import { Link } from 'react-router-dom';
const publications = [
  { name: 'Neuro2Semantic', title: 'A Transfer Learning Framework for Semantic Reconstruction of Continuous Language from Human Intracranial EEG', authors: 'S. Shams, R. Antonello, G. Mischler, S. Bickel, A. Mehta, N. Mesgarani', venue: 'Interspeech', year: '2025', links: [['Paper', 'https://www.isca-archive.org/interspeech_2025/shams25_interspeech.pdf'], ['arXiv', 'https://arxiv.org/abs/2506.00381'], ['Code', 'https://github.com/SiavashShams/neuro2semantic']] },
  { name: 'SSAMBA', title: 'Self-Supervised Audio Representation Learning with Mamba State Space Model', authors: 'S. Shams, S. S. Dindar, X. Jiang, N. Mesgarani', venue: 'IEEE SLT', year: '2024', links: [['Paper', 'https://ieeexplore.ieee.org/document/10832304'], ['arXiv', 'https://arxiv.org/abs/2405.11831'], ['Code', 'https://github.com/SiavashShams/ssamba']] },
  { title: 'An Optimal Data-Driven Method for Controlling Epileptic Seizures', authors: 'S. Shams, S. Motallebi, M. J. Yazdanpanah', venue: 'IEEE', links: [['Paper', 'https://ieeexplore.ieee.org/abstract/document/10052912/']] },
  { title: 'Comprehensive and Gamified Rehabilitation System for Upper-Limb Impairment Treatments', authors: 'V. Yazdnian, A. Delavari, H. Moradi, S. Shams, M. Teymouri, A. Rezaei', venue: 'IEEE', links: [['Paper', 'https://ieeexplore.ieee.org/document/10025334']] }
];
export default function Home() {
  const track = destination => window.gtag && window.gtag('event', 'social_click', { destination });
  return <div className="shell">
    <section className="intro" aria-labelledby="intro-title"><div className="intro-copy">
      <p className="eyebrow">Machine learning engineer</p>
      <h1 id="intro-title">Siavash Shams<span className="title-dot">.</span></h1>
      <p className="intro-detail">My work spans LLM safety and evaluation, audio representation learning, and decoding language from neural signals.</p>
      <p className="intro-education">M.S. in Electrical Engineering, Columbia University.</p>
      <div className="text-links social-links">
        <a href="mailto:siavashshams.ac@gmail.com" onClick={() => track('email')}>Email <span aria-hidden="true">↗</span></a>
        <a href="https://scholar.google.com/citations?user=xo02sD0AAAAJ" target="_blank" rel="noreferrer" onClick={() => track('scholar')}>Scholar <span aria-hidden="true">↗</span></a>
        <a href="https://github.com/SiavashShams" target="_blank" rel="noreferrer" onClick={() => track('github')}>GitHub <span aria-hidden="true">↗</span></a>
        <a href="https://www.linkedin.com/in/siavashshams/" target="_blank" rel="noreferrer" onClick={() => track('linkedin')}>LinkedIn <span aria-hidden="true">↗</span></a>
      </div>
    </div><figure className="portrait"><img src="/images/IMG_5160.jpg" alt="Siavash outdoors on a winter day" width="1054" height="1434"/><figcaption>Siavash, away from the screen.</figcaption></figure></section>
    <div className="work-index"><p>LLM evaluation <span aria-hidden="true">/</span> Audio <span aria-hidden="true">/</span> Neural decoding</p><div><Link to="/experience">Experience <span aria-hidden="true">↗</span></Link><Link to="/projects">Projects <span aria-hidden="true">↗</span></Link></div></div>
    <section className="research" aria-labelledby="research-title"><div className="section-heading"><h2 id="research-title">Publications</h2><span className="small-note">Research & collaborations</span></div>
      <div className="publication-list">{publications.map((paper, index) => <article className="publication-row" key={paper.title}>
        <div className="paper-meta"><span className="paper-number">0{index + 1}</span><span>{paper.venue}{paper.year && <span className="paper-year">{paper.year}</span>}</span></div>
        <div className="paper-content"><h3>{paper.name && <strong>{paper.name}: </strong>}{paper.title}</h3><p className="paper-authors">{paper.authors.split('S. Shams').map((part, i) => <React.Fragment key={i}>{i > 0 && <span className="author-self">S. Shams</span>}{part}</React.Fragment>)}</p><div className="text-links paper-links">{paper.links.map(([label, url]) => <a key={label} href={url} target="_blank" rel="noreferrer" aria-label={`${label}: ${paper.name || paper.title}`}>{label} <span aria-hidden="true">↗</span></a>)}</div></div>
      </article>)}</div>
    </section>
    <section className="outside-teaser" aria-labelledby="outside-title"><div className="section-heading"><h2 id="outside-title">Outside work</h2><Link className="text-link" to="/miscellaneous">A few photographs <span aria-hidden="true">↗</span></Link></div><Link to="/miscellaneous" aria-label="Browse the photography collection"><img src="/images/hobbies/n1.jpg" alt="Clouds over the Pacific coast, photographed during a road trip" width="1920" height="2560" loading="lazy"/></Link><p className="photo-note">Along the Pacific Coast Highway.</p></section>
  </div>;
}
