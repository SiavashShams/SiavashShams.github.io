import React from 'react';
export default function Experience() {
  const experiences = [
    {
      id: 1,
      title: "Founding Software Engineer",
      company: "Virtue AI",
      date: "Nov 2025 - Aug 2026",
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
        </ul>
      )
    }
  ];

  return <div className="shell inner-page">
    <div className="page-heading"><p className="eyebrow">Research & engineering</p><h1>Experience</h1></div>
    <section aria-label="Work experience" className="experience-list">{experiences.map(item => <article className="experience-row" key={item.id}>
      <p className="experience-date">{item.date}</p><div><div className="organization"><img src={item.logo} alt="" width="36" height="36"/><p>{item.company}</p></div><h2>{item.title}</h2><div className="experience-detail">{item.description}</div></div>
    </article>)}</section>
    <section className="education-section" aria-labelledby="education-title"><div className="section-heading"><h2 id="education-title">Education</h2></div>{education.map(item => <article className="experience-row education-row" key={item.id}><p className="experience-date">{item.period}</p><div><div className="organization"><img src={item.logo} alt="" width="36" height="36"/><p>{item.school}</p></div><h3>{item.degree}</h3><div className="experience-detail">{item.details}</div></div></article>)}</section>
  </div>;
}
