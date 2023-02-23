import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { createGlobalStyle } from "styled-components"
import '@fontsource/coda'
import '@fontsource/dm-mono'

const GlobalStyle = createGlobalStyle`
  :root {
    --color-0: #1A1A1A;
    --color-1: white;
    --color-2: #58FFC3;
    --color-3: #FFD058;
    --color-3-light: #f8e2a9;
    --color-6: #4f4e4e;
    --color-7: #353535;
  }
  body {
    background-image: url('/bg.png');
    font-family: 'Coda', sans-serif;
    margin: 0;
    font-size: 16px;
    overflow: overlay;
    &::-webkit-scrollbar {
      width: 8px;
      background: transparent;
      display: none;
    }
    &::-webkit-scrollbar-thumb {
      background: var(--color-7);
      border-radius: 10px;
    }
  }
  h1 {
    color: var(--color-3);
    font-size: 40px;
    font-weight: normal;
    margin: 20px 0 0 0;
    line-height: 1;
  }
  h2 {
    color: var(--color-2);
    font-size: 24px;
    font-weight: normal;
    margin: 30px 0 20px 60px;
  }
`

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
)