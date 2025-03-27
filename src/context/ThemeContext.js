import React, { createContext, useState, useEffect } from 'react';
import { createGlobalStyle } from 'styled-components';

export const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {},
});

export const GlobalStyles = createGlobalStyle`
  :root {
    --primary-color: ${props => props.theme === 'light' ? '#0a66c2' : '#3a9fff'};
    --secondary-color: ${props => props.theme === 'light' ? '#212529' : '#f8f9fa'};
    --background-color: ${props => props.theme === 'light' ? '#ffffff' : '#121212'};
    --text-color: ${props => props.theme === 'light' ? '#212529' : '#e9ecef'};
    --card-bg: ${props => props.theme === 'light' ? '#ffffff' : '#1e1e1e'};
    --nav-bg: ${props => props.theme === 'light' ? '#ffffff' : '#1e1e1e'};
    --accent-color: ${props => props.theme === 'light' ? '#6c757d' : '#adb5bd'};
    --hover-color: ${props => props.theme === 'light' ? '#f8f9fa' : '#2c2c2c'};
    --border-color: ${props => props.theme === 'light' ? 'rgba(0, 0, 0, 0.125)' : 'rgba(255, 255, 255, 0.125)'};
    --shadow-color: ${props => props.theme === 'light' ? 'rgba(0, 0, 0, 0.1)' : 'rgba(0, 0, 0, 0.35)'};
    --transition: all 0.3s ease;
  }

  body {
    background-color: var(--background-color);
    color: var(--text-color);
    transition: var(--transition);
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', sans-serif;
  }

  h1, h2, h3, h4, h5, h6 {
    color: var(--secondary-color);
    font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  }

  a {
    color: var(--primary-color);
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  .card {
    background-color: var(--card-bg);
    border-color: var(--border-color);
    transition: var(--transition);
  }

  .text-muted {
    color: var(--accent-color) !important;
  }

  .btn-outline-primary {
    color: var(--primary-color);
    border-color: var(--primary-color);
  }

  .btn-outline-primary:hover {
    background-color: var(--primary-color);
    color: ${props => props.theme === 'light' ? '#ffffff' : '#121212'};
  }
`;

export const ThemeProvider = ({ children }) => {
  // Check for saved theme preference or default to 'light'
  const savedTheme = localStorage.getItem('theme') || 'light';
  const [theme, setTheme] = useState(savedTheme);

  // Update localStorage when theme changes
  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <GlobalStyles theme={theme} />
      {children}
    </ThemeContext.Provider>
  );
}; 