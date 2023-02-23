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
    column-gap: 60px;
    list-style: none;
    margin: 0;
    padding: 0;
    li {
      border-radius: 8px;
      /* padding: 30px 30px 20px; */
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
          background-color: var(--color-6);
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


const Styled = styled.section`
  max-width: 1200px;
  margin: auto;
  padding: 20px 50px 40px;
  position: relative;
  &::before {
    content: '';
    /* display: block; */
    width: 100vw;
    height: calc(100% + 30px);
    /* background: #005f3c; */
    background: #858585;
    position: absolute;
    z-index: -1;
    left: calc(50% - 50vw);
    transform: skew(0, -2deg) translateY(-20px);
    opacity: 0.2;
    /* border-top: 100px solid red; */
  }
  .list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 50px;
    /* margin-top: 40px; */
    .item {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 20px;;
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
    <Styled>
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
            I prefer to spend my free time <mark green>traveling</mark> by car, bicycle, on foot and I dream
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
    </Styled>
  )
}



  // return (
  //   <Section>
  //     <Content>
  //       <h2>About me</h2>
  //       <ul>
  //         <li>
  //           <div>
  //             <img src="/about-1.png" />
  //             <span>Play music</span>
  //           </div>
  //           <p>I like to <Mark green>play music</Mark> and I have been a member of the Dig Me No Grave band for nine years, <Mark>two albums, two extended plays, three splits</Mark> and dozens of concerts in different venues.</p>
  //         </li>
  //         <li>
  //           <div>
  //             <img src="/about-2.png" />
  //             <span>Traveling</span>
  //           </div>
  //           <p>I prefer to spend my free time <Mark green>traveling</Mark> by car, bicycle, on foot and I dream of mastering water modes of transport <Mark>in order to get to hard-to-reach places</Mark> where I have never been before.</p>
  //         </li>
  //         <li>
  //           <div>
  //             <img src="/about-3.png" />
  //             <span>Big hobby</span>
  //           </div>
  //           <p>My third <Mark green>big hobby</Mark> is technology, programming, audio engineering, mechanics, construction and <Mark>all the technical tools</Mark> that allow you to create something new!</p>
  //         </li>
  //       </ul>
  //     </Content>
  //   </Section>
  // )