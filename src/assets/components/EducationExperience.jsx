import styled from "styled-components"
import { device } from "./Common"

const Section = styled.section`
  max-width: 1200px;
  margin: auto;
  padding: 0 30px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 20px;
  padding-bottom: 30px;
  margin-top: 50px;
  h2 {
    grid-column: 1/4;
  }
  ${device.mobileL} {
    grid-template-columns: 1fr;
    padding: 0 20px;
    h2 {
      grid-column: auto;
    }
  }
`
const Item = styled.div`
  background: var(--color-0);
  padding: 20px 20px;
  border-radius: 8px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  span {
    color: var(--color-2);
  }
  a {
    color: var(--color-3);
    font-size: 20px;
    text-decoration: none;
    padding: 10px 0 0 0;
    line-height: 1.1;
  }
  p {
    color: var(--color-1);
  }
`

export default function EducationExperience() {
  return (
    <Section>
      <h2>Education / Experience</h2>
      <Item>
        <span>2008-2013</span>
        <a href="https://en.vogu35.ru/">Vologda State University</a>
        <p>
          Informatics and computer engineering&nbsp;/&nbsp;computers, complexes, systems and networks
        </p>
      </Item>
      <Item>
        <span>2013-2017</span>
        <a href="https://cioko.edu35.ru/">Сenter of informatization and education</a>
        <p>
          Engineer programmer 1st category (PHP, MySQL)
        </p>
      </Item>
      <Item>
        <span>2017-2021</span>
        <a href="https://papara.ru/">Papara.ru</a>
        <p>
          Frontend developer (HTML, JavaScript, jQuery, CSS, SCSS, Gulp, Webpack, Node.js, Git, Docker, Photoshop, Figma)
        </p>
      </Item>
      <Item>
        <span>2020-2022</span>
        <a href="https://5systems.ru/">5Systems</a>
        <p>
          Full stack web developer, mobile developer (HTML, JavaScript, Vue, jQuery, CSS, SCSS, PHP, RedBeanPHP, MySQL, PostgreSQL, Git, Android Studio, Xcode, Figma)
        </p>
      </Item>
      <Item>
        <span>NOW</span>
        <a href="http://enmourn.github.io">enmourn.github.io</a>
        <p>
          (HTML, JavaScript, React, React Router, Chakra, Create React App, Vite, Firebase, Git, Figma)
        </p>
      </Item>
    </Section>
  )
}