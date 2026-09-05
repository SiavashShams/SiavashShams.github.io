import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';
export default function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return <header className="site-header shell">
    <a className="skip-link" href="#main-content" onClick={event => { event.preventDefault(); document.getElementById('main-content').focus(); }}>Skip to content</a>
    <Link className="wordmark" to="/">Siavash Shams<span className="wordmark-dot">.</span></Link>
    <div className="navigation"><nav aria-label="Main navigation">
      <NavLink to="/" end>About</NavLink><NavLink to="/experience">Experience</NavLink><NavLink to="/projects">Projects</NavLink><NavLink to="/miscellaneous">Outside work</NavLink>
    </nav><button className="theme-toggle" onClick={toggleTheme} aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`} title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}>
      <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true"><circle cx="12" cy="12" r="8"/><path d="M12 4a8 8 0 0 1 0 16Z" fill="currentColor" stroke="none"/></svg>
    </button></div>
  </header>;
}
