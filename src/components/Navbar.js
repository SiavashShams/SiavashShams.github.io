import React, { useContext, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeContext } from '../context/ThemeContext';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { Container } from './StyledComponents';

const NavbarWrapper = styled.nav`
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: var(--nav-bg);
  box-shadow: 0 2px 10px var(--shadow-color);
  transition: var(--transition);
  padding: 1rem 0;
`;

const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 1.5rem;
  color: var(--secondary-color);
  text-decoration: none;
  transition: var(--transition);
  
  &:hover {
    color: var(--primary-color);
    text-decoration: none;
  }
`;

const NavLinks = styled.div`
  display: none;
  gap: 1.5rem;
  
  @media (min-width: 768px) {
    display: flex;
  }
`;

const NavLink = styled(Link)`
  color: var(--secondary-color);
  font-weight: 500;
  text-decoration: none;
  position: relative;
  transition: var(--transition);
  
  &:after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: var(--primary-color);
    transition: var(--transition);
  }
  
  &:hover, &.active {
    color: var(--primary-color);
    text-decoration: none;
  }
  
  &:hover:after, &.active:after {
    width: 100%;
  }
`;

const MobileMenuButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  color: var(--secondary-color);
  cursor: pointer;
  font-size: 1.5rem;
  
  @media (min-width: 768px) {
    display: none;
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 60px;
  left: 0;
  right: 0;
  background-color: var(--nav-bg);
  padding: 1rem;
  box-shadow: 0 10px 15px var(--shadow-color);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  z-index: 90;
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const mobileMenuVariants = {
  closed: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.2
    }
  },
  open: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3
    }
  }
};

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);
  
  return (
    <NavbarWrapper>
      <NavbarContainer>
        <Logo to="/">Siavash Shams</Logo>
        
        <NavLinks>
          <NavLink to="/" className={location.pathname === '/' ? 'active' : ''}>
            Home
          </NavLink>
          <NavLink 
            to="/experience" 
            className={location.pathname === '/experience' ? 'active' : ''}
          >
            Experience
          </NavLink>
          <NavLink 
            to="/projects" 
            className={location.pathname === '/projects' ? 'active' : ''}
          >
            Projects
          </NavLink>
          <NavLink 
            to="/miscellaneous" 
            className={location.pathname === '/miscellaneous' ? 'active' : ''}
          >
            Miscellaneous
          </NavLink>
        </NavLinks>
        
        <RightSection>
          <DarkModeSwitch
            checked={theme === 'dark'}
            onChange={toggleTheme}
            size={24}
            moonColor="#f8f9fa"
            sunColor="#212529"
          />
          
          <MobileMenuButton onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? '✕' : '☰'}
          </MobileMenuButton>
        </RightSection>
      </NavbarContainer>
      
      <AnimatePresence>
        {mobileMenuOpen && (
          <MobileMenu
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
          >
            <NavLink to="/" className={location.pathname === '/' ? 'active' : ''}>
              Home
            </NavLink>
            <NavLink 
              to="/experience" 
              className={location.pathname === '/experience' ? 'active' : ''}
            >
              Experience
            </NavLink>
            <NavLink 
              to="/projects" 
              className={location.pathname === '/projects' ? 'active' : ''}
            >
              Projects
            </NavLink>
            <NavLink 
              to="/miscellaneous" 
              className={location.pathname === '/miscellaneous' ? 'active' : ''}
            >
              Miscellaneous
            </NavLink>
          </MobileMenu>
        )}
      </AnimatePresence>
    </NavbarWrapper>
  );
};

export default Navbar; 