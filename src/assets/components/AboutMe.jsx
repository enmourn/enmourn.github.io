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
      background: var(--color-0);
      border-radius: 8px;
      .title {
        padding: 20px 20px 0px;
        color: var(--color-3);
        font-size: 20px;
      }
      .text {
        padding: 20px;
        margin: 0;
        color: var(--color-1);
        mark {
          background-color: transparent;
          color: var(--color-2);
        }
      }
      .img {
        margin: 20px 0 0;
        background-size: cover;
        background-position: 0 50%;
        width: calc(100% - 20px);
        margin: auto 10px 10px;
        height: 200px;
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
        &.item-1 {
          background-image: url('/about-1.png');
        }
        &.item-2 {
          background-image: url('/about-2.png');
        }
        &.item-3 {
          background-image: url('/about-3.png');
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
          <span className="title">Play music</span>
          <p className="text">
            I like to <mark>play music</mark> and I have been a member of the Dig Me No Grave 
            band for nine years, <mark>two albums, two extended plays, three splits</mark> and dozens
            of concerts in different venues.
          </p>
          <div className="img item-1"></div>
        </div>
        <div className="item">
          <span className="title">Traveling</span>
          <p className="text">
            I prefer to spend my free time <mark>traveling</mark> by car, bicycle, on foot and I dream
            of mastering water modes of transport in order <mark>to get to hard-to-reach places</mark> where
            I have never been before.
          </p>
          <div className="img item-2"></div>
        </div>
        <div className="item">
          <span className="title">Big hobby</span>
          <p className="text">
            My third <mark>big hobby</mark> is technology, programming, audio engineering, mechanics, 
            construction and <mark>all the technical tools</mark> that allow you to create something new 
            and make our live better.
          </p>
          <div className="img item-3"></div>
        </div>
      </div>
    </StyledSection>
  )
}