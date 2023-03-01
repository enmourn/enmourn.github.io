import styled, { createGlobalStyle } from "styled-components"

const BaseComponent = styled.div`
  width: ${props => props.w};
  height: ${props => props.h};
  padding: ${props => props.p};
  margin: ${props => props.m};
  margin-top: ${props => props.mt};
  margin-right: ${props => props.mr};
  margin-bottom: ${props => props.mb};
  margin-left: ${props => props.ml};
`

export const device = {
  laptop: `@media (max-width: 1280px)`,
  tablet: `@media (max-width: 1024px)`,
  mobileL: `@media (max-width: 768px)`,
  mobileM: `@media (max-width: 480px)`
}

export const GlobalStyle = createGlobalStyle`
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
const ButtonComponent = BaseComponent.withComponent('button')

export const Button = styled(ButtonComponent)`
  background-color: ${props => props.primary ? 'var(--color-3)' : 'var(--color-0)'};
  color: ${props => props.primary ? 'var(--color-0)': 'var(--color-3)'};
  padding: 6px 18px;
  font-family: 'Coda';
  font-size: 15px;
  border-width: 1px;
  border-style: solid;
  border-color: var(--color-3);
  border-radius: 30px;
  transition: background-color 0.2s, border-color 0.2s, color 0.2s;
  cursor: pointer;
  &:hover {
    background-color: var(--color-3-light);
    border-color: var(--color-3-light);
    color: var(--color-0);
  }
`
export const Section = styled.section`
  max-width: 1200px;
  margin: auto;
  padding: 50px 30px 30px;
  position: relative;
  h2 {
    margin-top: 0;
  }
`