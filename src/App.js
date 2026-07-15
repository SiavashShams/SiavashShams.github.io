import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Miscellaneous from './pages/Miscellaneous';

// Animation variants
const pageVariants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut"
    }
  },
  out: {
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  }
};

const MainContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const ContentContainer = styled(motion.div)`
  flex: 1;
`;

function App() {
  const location = useLocation();

  // Track every route change as a GA4 page_view (HashRouter SPA).
  // GA4 strips the #/... fragment from page_location, so hash routes must be
  // reported as real paths or every view collapses into "/".
  useEffect(() => {
    if (window.gtag) {
      window.gtag('event', 'page_view', {
        page_location: window.location.origin + location.pathname + location.search,
        page_title: document.title,
      });
    }
  }, [location]);

  return (
    <MainContainer>
      <Navbar />
      <ContentContainer
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/miscellaneous" element={<Miscellaneous />} />
        </Routes>
      </ContentContainer>
      <Footer />
    </MainContainer>
  );
}

export default App; 