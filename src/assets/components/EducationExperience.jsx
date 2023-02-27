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
      .link {
        color: var(--color-7);
        text-decoration: none;
        margin-top: auto;
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
          <span className="title">Vologda State University</span>
          <p className="text">
            Informatics and computer engineering&nbsp;/&nbsp;computers, complexes, systems and networks
          </p>
          <a className="link" href="https://en.vogu35.ru/">en.vogu35.ru</a>
        </div>
        <div className="item">
          <span className="date">2013-2017</span>
          <span className="title">Сenter of informatization and education</span>
          <p className="text">
            Engineer programmer 1st category (PHP, MySQL)
          </p>
          <a className="link" href="https://cioko.edu35.ru/">cioko.edu35.ru</a>
        </div>
        <div className="item">
          <span className="date">2017-2021</span>
          <span className="title">Papara.ru</span>
          <p className="text">
            Frontend developer (HTML, JavaScript, jQuery, CSS, SCSS, Gulp, Webpack, Node.js, Git, Docker,
            Photoshop, Figma)
          </p>
          <a className="link" href="https://papara.ru/">papara.ru</a>
        </div>
        <div className="item">
          <span className="date">2020-2022</span>
          <span className="title">5Systems</span>
          <p className="text">
            Full stack web developer, mobile developer (HTML, JavaScript, Vue, jQuery, CSS, SCSS, 
            PHP, RedBeanPHP, MySQL, PostgreSQL, Git, Android Studio, Xcode, Figma)
          </p>
          <a className="link" href="https://5systems.ru/">5systems.ru</a>
        </div>
        <div className="item">
          <span className="date">NOW</span>
          <span className="title">enmourn.github.io</span>
          <p className="text">
            Freelancer (HTML, JavaScript, React, React Router, Chakra, Create React App, Vite,
            Firebase, Git, Figma)
          </p>
          <a className="link" href="http://enmourn.github.io">enmourn.github.io</a>
        </div>
      </div>
    </StyledSection>
  )
}