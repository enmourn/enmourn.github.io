import styled from "styled-components"
import { Section, device } from "./Common"

const StyledSection = styled(Section)`
  .list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 20px;
    .item {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 20px;;
      background: var(--color-0);
      border-radius: 8px;
      .img {
        align-self: center;
        width: 100%;
        max-width: 300px;
      }
      .title {
        background-color: var(--color-0);
        color: var(--color-3);
        padding: 0 30px;
        font-size: 20px;
        margin-top: -36px;
        border-radius: 4px;
      }
      .text {
        color: var(--color-1);
        margin: 20px 0 0;
        mark {
          background-color: transparent;
          color: var(--color-2);
        }
      }
    }
  }
`

export default function AboutMe() {
  return (
    <StyledSection bg="var(--color-0)">
      <h2 className="title">About me</h2>
      <div className="list">
        <div className="item">
          <img className="img item-1" src="/about-1.png" />
          <span className="title">Play music...</span>
          <p className="text">
            I like to <mark>play music</mark> and I have been a member of the Dig Me No Grave 
            band for <mark>nine years, two albums, two extended plays, three splits</mark> and dozens
            of concerts in different venues.
          </p>
        </div>
        <div className="item">
          <img className="img item-2" src="/about-2.png" />
          <span className="title">Traveling...</span>
          <p className="text">
            I prefer to spend my free time <mark>traveling</mark> by car, bicycle, on foot and I dream
            of mastering water modes of transport <mark>in order to get to hard-to-reach places</mark> where
            I have never been before.
          </p>
        </div>
        <div className="item">
          <img className="img item-3" src="/about-3.png" />
          <span className="title">Big hobby...</span>
          <p className="text">
            My third <mark>big hobby</mark> is technology, programming, audio engineering, mechanics, 
            construction and <mark>all the technical tools</mark> that allow you to create something new 
            and make our live better.
          </p>
        </div>
      </div>
    </StyledSection>
  )
}