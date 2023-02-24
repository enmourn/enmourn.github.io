import styled from "styled-components"
import { Section, device } from "./Common"

const StyledSection = styled(Section)`
  .project-set {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 20px;
    .project {
      padding: 10px;
      border-radius: 8px;
      background: var(--color-0);
      .image {
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
      .text {
        color: var(--color-1);
        mark {
          background-color: transparent;
          color: var(--color-2);
          }
      }
    }
  }
`

export default function CurrentProjects() {
  return (
    <StyledSection bg="black">
      <h2 className="heading">Current projects</h2>
      <div className="project-set">
        <div className="project">
          <img className="image" src="./projects/bandstats-1.png" />
          <span className="title">BandStats</span>
          <p className="text">
            A simple and convenient tool for evaluating the activity of a group and its members
          </p>
          <p className="text">
            <mark>Tech stack:</mark> React, React Router, Chart.js, Chakra, Firebase, Vite
          </p>
          <p className="text">
            <mark>To do:</mark> redesign, add month statistic params
          </p>
        </div>
        <div className="project">
          <img className="image" src="./projects/portfolio-1.png" />
          <span className="title">Portfolio</span>
          <p className="text">
            It's my web portfolio where you can fine some information about my skills, experience,
            current projects, and send me message
          </p>
          <p className="text">
            <mark>Tech stack:</mark> React, Styled Components
          </p>
          <p className="text">
            <mark>To do:</mark> Add light theme and language switcher
          </p>
        </div>
        <div className="project">
          <img className="image" src="./projects/canvas-game-1.png" />
          <span className="title">Canvas Game</span>
          <p className="text">
            Here am learning base principles of game development, creating unusual labyrinth game
          </p>
          <p className="text">
            <mark>Tech stack:</mark> Pure JavaScript ES6, Canvas, Vite
          </p>
          <p className="text">
            <mark>To do:</mark> make it playable
          </p>
        </div>
        <div className="project">
          <img className="image" src="./projects/shop-1.png" />
          <span className="title">Shop</span>
          <p className="text">
            Internet store, completely under development
          </p>
          <p className="text">
            <mark>Tech stack:</mark> React, React Router, Firebase, Vite
          </p>
          <p className="text">
            <mark>To do:</mark> make all
          </p>
        </div>
      </div>
    </StyledSection>
  )
}


// export default function CurrentProjects() {
//   return (
//     <Section>
//       <Content>
//         <h2>Current projects</h2>
//         <Project>
//           <img src="./projects/bandstats-1.png" />
//           <div className="title">BandStats</div>
//           <p>A simple and convenient tool for evaluating the activity of a group and its members</p>
//           <p><mark>Tech stack:</mark> React, React Router, Chart.js, Chakra, Firebase, Vite</p>
//           <p><mark>To do:</mark> redesign, add month statistic params</p>
//         </Project>
//         <Project>
//           <img src="./projects/portfolio-1.png" />
//           <div className="title">Portfolio</div>
//           <p>It's my web portfolio where you can fine some information about my skills, experience, current projects, and send me message</p>
//           <p><mark>Tech stack:</mark> React, Styled Components</p>
//           <p><mark>To do:</mark> Add light theme and language switcher</p>
//         </Project>
//         <Project>
//           <img src="./projects/canvas-game-1.png" />
//           <div className="title">Canvas Game</div>
//           <p>Here am learning base principles of game development, creating unusual labyrinth game</p>
//           <p><mark>Tech stack:</mark> Pure JavaScript ES6, Canvas, Vite</p>
//           <p><mark>To do:</mark> make it playable</p>
//         </Project>
//         <Project>
//           <img src="./projects/shop-1.png" />
//           <div className="title">Shop</div>
//           <p>Internet store, completely under development</p>
//           <p><mark>Tech stack:</mark> React, React Router, Firebase, Vite</p>
//           <p><mark>To do:</mark> make all</p>
//         </Project>
//       </Content>
//     </Section>
//   )
// }