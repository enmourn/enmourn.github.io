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
    --color-6: #4f4e4e
  }
  body {
    background: url('/bg.png');
    font-family: 'Coda', sans-serif;
    margin: 0;
    overflow-x: hidden;
  }
  h1 {
    color: var(--color-3);
    font-size: 40px;
    font-weight: normal;
    margin: 8px 0 0 0;
  }
  h2 {
    color: var(--color-2);
    font-size: 24px;
    font-weight: normal;
    margin: 28px 0 0 30px;
  }
`

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
)