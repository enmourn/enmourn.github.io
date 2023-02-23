import styled from "styled-components"
import { device } from "./Common"

const Section = styled.section`
  width: 100%;
  position: relative;
  padding-bottom: 10px;
  &::before {
    content: '';
    display: block;
    width: 100%;
    height: calc(100% + 100px);
    /* background: linear-gradient(#797979, #005f3c); */
    background-color: #858585;
    position: absolute;
    z-index: -1;
    left: 50%;
    top: 0;
    transform: translate(-50%, -100px) skew(0, -2deg);
    opacity: 0.2;
  }
  ${device.tablet} {
    padding-bottom: 20px;
  }
`
const Content = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 0 30px;
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  h2 {
    grid-column: 1/5;
  }
  mark {
    background-color: transparent;
    color: var(--color-2);
    border-radius: 4px;
  }
  ${device.mobileL} {
    grid-template-columns: repeat(2, 1fr);
    padding: 0 20px;
    h2 {
      grid-column: 1/3
    }
  }
`
const Project = styled.div`
  padding: 10px;
  border-radius: 8px;
  img {
    max-width: 100%;
    border-radius: 8px;
  }
  .title {
    color: var(--color-3);
    background-color: var(--color-0);
    border-radius: 4px;
    padding: 0 20px;
    font-size: 20px;
  }
  p {
    color: var(--color-1);
  }
`

export default function CurrentProjects() {
  return (
    <Section>
      <Content>
        <h2>Current projects</h2>
        <Project>
          <img src="./projects/bandstats-1.png" />
          <div className="title">BandStats</div>
          <p>A simple and convenient tool for evaluating the activity of a group and its members</p>
          <p><mark>Tech stack:</mark> React, React Router, Chart.js, Chakra, Firebase, Vite</p>
          <p><mark>To do:</mark> redesign, add month statistic params</p>
        </Project>
        <Project>
          <img src="./projects/portfolio-1.png" />
          <div className="title">Portfolio</div>
          <p>It's my web portfolio where you can fine some information about my skills, experience, current projects, and send me message</p>
          <p><mark>Tech stack:</mark> React, Styled Components</p>
          <p><mark>To do:</mark> Add light theme and language switcher</p>
        </Project>
        <Project>
          <img src="./projects/canvas-game-1.png" />
          <div className="title">Canvas Game</div>
          <p>Here am learning base principles of game development, creating unusual labyrinth game</p>
          <p><mark>Tech stack:</mark> Pure JavaScript ES6, Canvas, Vite</p>
          <p><mark>To do:</mark> make it playable</p>
        </Project>
        <Project>
          <img src="./projects/shop-1.png" />
          <div className="title">Shop</div>
          <p>Internet store, completely under development</p>
          <p><mark>Tech stack:</mark> React, React Router, Firebase, Vite</p>
          <p><mark>To do:</mark> make all</p>
        </Project>
      </Content>
    </Section>
  )
}