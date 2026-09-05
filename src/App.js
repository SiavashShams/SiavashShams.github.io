import React, { useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Miscellaneous from './pages/Miscellaneous';

export default function App() {
  const location = useLocation();
  useEffect(() => {
    const titles = { '/': 'Machine Learning Engineer', '/experience': 'Experience', '/projects': 'Projects', '/miscellaneous': 'Outside work' };
    document.title = `Siavash Shams | ${titles[location.pathname] || 'Page not found'}`;
    window.scrollTo(0, 0);
    if (window.gtag) window.gtag('event', 'page_view', { page_location: window.location.origin + location.pathname + location.search, page_title: document.title });
  }, [location]);
  return <div className="site-layout"><Navbar/><main id="main-content" tabIndex={-1}><Routes>
    <Route path="/" element={<Home/>}/><Route path="/experience" element={<Experience/>}/><Route path="/projects" element={<Projects/>}/><Route path="/miscellaneous" element={<Miscellaneous/>}/>
    <Route path="*" element={<div className="shell inner-page"><div className="page-heading"><h1>Page not found</h1></div><Link className="text-link" to="/">Return home ↗</Link></div>}/>
  </Routes></main><Footer/></div>;
}
