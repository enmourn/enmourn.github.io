import styled from "styled-components"
import { device } from "./Common"

const Section = styled.section`
  width: 100%;
  position: relative;
  padding-bottom: 60px;
  &::before {
    content: '';
    display: block;
    width: 100%;
    height: calc(100% + 300px);
    background-color: var(--color-6);
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    transform: skew(0, -2deg);
    opacity: 0.6;
  }
`
const Content = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 0 30px;
  padding-top: 20px;
  ul {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 20px;
    list-style: none;
    margin: 0;
    padding: 0;
    li {
      background-color: var(--color-0);
      border-radius: 8px;
      padding: 30px 30px 20px;
      div {
        position: relative;
        img {
          width: 100%;
          border-radius: 50%;
        }
        span {
          position: absolute;
          left: 0;
          left: 0;
          right: 0;
          bottom: 20px;
          background-color: var(--color-7);
          color: var(--color-3);
          padding: 5px 20px;
          border-radius: 4px;
          font-size: 17px;
        }
      }
      p {
        padding: 0px 10px 0px;
        border-radius: 8px;
        color: var(--color-1);
      }
    }
  }
  ${device.mobileL} {
    padding: 0 20px;
    ul {
      grid-template-columns: 1fr;
      gap: 20px;
      li {
        display: flex;
        padding: 20px;
        div {
          height: min-content;
          span {
            padding: 4px 16px;
            bottom: 0
          }
        }
        p {
          padding: 0 0 0 20px;
          margin: 0;
        }
      }
    }
  }
  ${device.mobileM} {
    ul {
      li {
        div {
          span {
            display: inline-block;
            position: static;
            padding: 2px 4px;
            width: 100%;
            text-align: center;
          }
        }
      }
    }
  }
`
const Mark = styled.mark`
  background: none;
  color: var(--color-2);
`

export default function AboutMe() {
  return (
    <Section>
      <Content>
        <h2>About me</h2>
        <ul>
          <li>
            <div>
              <img src="/about-1.png" />
              <span>Play music</span>
            </div>
            <p>I like to <Mark green>play music</Mark> and I have been a member of the Dig Me No Grave band for nine years, <Mark>two albums, two extended plays, three splits</Mark> and dozens of concerts in different venues.</p>
          </li>
          <li>
            <div>
              <img src="/about-2.png" />
              <span>Traveling</span>
            </div>
            <p>I prefer to spend my free time <Mark green>traveling</Mark> by car, bicycle, on foot and I dream of mastering water modes of transport <Mark>in order to get to hard-to-reach places</Mark> where I have never been before.</p>
          </li>
          <li>
            <div>
              <img src="/about-3.png" />
              <span>Big hobby</span>
            </div>
            <p>My third <Mark green>big hobby</Mark> is technology, programming, audio engineering, mechanics, construction and <Mark>all the technical tools</Mark> that allow you to create something new!</p>
          </li>
        </ul>
      </Content>
    </Section>
  )
}