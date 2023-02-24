import styled from "styled-components"
import { Section, device } from "./Common"

// const Section = styled.section`
//   max-width: 1200px;
//   margin: auto;
//   padding: 0 30px;
//   display: grid;
//   grid-template-columns: repeat(3, 1fr);
//   column-gap: 20px;
//   padding-bottom: 40px;
//   margin-top: 30px;
//   position: relative;
//   &::before {
//     content: '';
//     width: 100vw;
//     height: calc(100% + 30px);
//     /* background: #005f3c; */
//     background: #000000;
//     position: absolute;
//     z-index: -1;
//     left: calc(50% - 50vw);
//     transform: skew(0, -2deg) translateY(-30px);
//     opacity: 0.6;
//   }
//   h2 {
//     grid-column: 1/4;
//   }
//   ${device.mobileL} {
//     grid-template-columns: 1fr;
//     padding: 0 20px;
//     h2 {
//       grid-column: auto;
//     }
//   }
// `
// const Item = styled.div`
//   background: var(--color-0);
//   padding: 20px 20px;
//   border-radius: 8px;
//   margin-bottom: 20px;
//   display: flex;
//   flex-direction: column;
//   span {
//     color: var(--color-2);
//   }
//   a {
//     color: var(--color-3);
//     font-size: 20px;
//     text-decoration: none;
//     padding: 10px 0 0 0;
//     line-height: 1.1;
//   }
//   p {
//     color: var(--color-1);
//   }
// `

const StyledSection = styled(Section)`
  .item-set {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 20px;
    .item {
      background: var(--color-0);
      padding: 20px 20px;
      border-radius: 8px;
      margin-bottom: 20px;
      display: flex;
      flex-direction: column;
      .date {
        color: var(--color-2);
      }
      .title {
        color: var(--color-3);
        font-size: 20px;
        text-decoration: none;
        padding: 10px 0 0 0;
        line-height: 1.1;
      }
      .text {
        color: var(--color-1);
      }
    }
  }
`



export default function EducationExperience() {
  return (
    <StyledSection bg="black">
      <h2 className="heading">Education / Experience</h2>
      <div className="item-set">
        <div className="item">
          <span className="date">2008-2013</span>
          <a className="title" href="https://en.vogu35.ru/">Vologda State University</a>
          <p className="text">
            Informatics and computer engineering&nbsp;/&nbsp;computers, complexes, systems and networks
          </p>
        </div>
        <div className="item">
          <span className="date">2013-2017</span>
          <a className="title" href="https://cioko.edu35.ru/">Сenter of informatization and education</a>
          <p className="text">
            Engineer programmer 1st category (PHP, MySQL)
          </p>
        </div>
        <div className="item">
          <span className="date">2017-2021</span>
          <a className="title" href="https://papara.ru/">Papara.ru</a>
          <p className="text">
            Frontend developer (HTML, JavaScript, jQuery, CSS, SCSS, Gulp, Webpack, Node.js, Git, Docker,
            Photoshop, Figma)
          </p>
        </div>
        <div className="item">
          <span className="date">2020-2022</span>
          <a className="title" href="https://5systems.ru/">5Systems</a>
          <p className="text">
            Full stack web developer, mobile developer (HTML, JavaScript, Vue, jQuery, CSS, SCSS, 
            PHP, RedBeanPHP, MySQL, PostgreSQL, Git, Android Studio, Xcode, Figma)
          </p>
        </div>
        <div className="item">
          <span className="date">NOW</span>
          <a className="title" href="http://enmourn.github.io">enmourn.github.io</a>
          <p className="text">
            Freelancer (HTML, JavaScript, React, React Router, Chakra, Create React App, Vite,
            Firebase, Git, Figma)
          </p>
        </div>
      </div>
    </StyledSection>
  )
}