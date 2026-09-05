import React, { createContext, useState, useEffect } from 'react';
import { createGlobalStyle } from 'styled-components';
export const ThemeContext = createContext({ theme: 'light', toggleTheme: () => {} });
const GlobalStyles = createGlobalStyle`
  :root {
    color-scheme: ${p => p.$mode};
    --background-color: ${p => p.$mode === 'light' ? '#fdfdfc' : '#17191b'};
    --text-color: ${p => p.$mode === 'light' ? '#34383d' : '#cbd0d5'};
    --secondary-color: ${p => p.$mode === 'light' ? '#202429' : '#f0f1f2'};
    --primary-color: ${p => p.$mode === 'light' ? '#335e85' : '#9fc5e7'};
    --accent-color: ${p => p.$mode === 'light' ? '#666e77' : '#a1a9b2'};
    --border-color: ${p => p.$mode === 'light' ? '#e0e3e5' : '#34393f'};
    --hover-color: ${p => p.$mode === 'light' ? '#f2f4f5' : '#22262b'};
    --card-bg: var(--background-color); --nav-bg: var(--background-color); --shadow-color: transparent;
    --transition: color 180ms ease, background-color 180ms ease, border-color 180ms ease;
  }
  *, *::before, *::after { box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  body { margin: 0; background: var(--background-color); color: var(--text-color); font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; font-size: 1rem; line-height: 1.7; -webkit-font-smoothing: antialiased; }
  h1,h2,h3,h4 { color: var(--secondary-color); font-weight: 500; line-height: 1.3; margin: 0; }
  p { margin: 0; } a { color: inherit; text-decoration: none; text-underline-offset: .28em; } a:hover { color: var(--primary-color); }
  button { font: inherit; color: inherit; cursor: pointer; } img { display: block; max-width: 100%; }
  button, a { -webkit-tap-highlight-color: transparent; }
  :focus-visible { outline: 2px solid var(--primary-color); outline-offset: 5px; border-radius: 2px; }
  ::selection { background: #d4e5f3; color: #202429; }
  @media (prefers-reduced-motion: reduce) { html { scroll-behavior: auto; } *, *::before, *::after { animation-duration: .01ms !important; transition-duration: .01ms !important; } }
`;
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => { try { return localStorage.getItem('siavash-preview-theme') === 'dark' ? 'dark' : 'light'; } catch { return 'light'; } });
  useEffect(() => { try { localStorage.setItem('siavash-preview-theme', theme); } catch { /* Storage is optional. */ } }, [theme]);
  const toggleTheme = () => setTheme(current => current === 'light' ? 'dark' : 'light');
  return <ThemeContext.Provider value={{ theme, toggleTheme }}><GlobalStyles $mode={theme} />{children}</ThemeContext.Provider>;
};
