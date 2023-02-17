import styled from "styled-components"

const Section = styled.section`
  width: 100%;
  position: relative;
  padding-bottom: 60px;
  /* overflow: hidden; */
  &::before {
    content: '';
    display: block;
    width: 100%;
    height: calc(100% + 300px);
    background-color: #353535;
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
  padding: 0 50px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 20px;
  h2 {
    grid-column: 1/4;
  }
`
const Item = styled.div`
  background-color: var(--color-0);
  border-radius: 8px;
  padding: 30px 30px 20px;
  img {
    width: 100%;
    border-radius: 50%;
    /* border-left: 1px solid var(--color-3);
    border-top: 1px solid var(--color-3);
    border-right: 1px solid var(--color-2);
    border-bottom: 1px solid var(--color-2); */
  }
  p {
    padding: 0px 10px 0px;
    border-radius: 8px;
    color: var(--color-1);
  }
`
const Title = styled.mark`
  background: none;
  color: var(--color-2);
  font-size: 20px;
  line-height: 1;
  /* padding: 0 6px; */
  margin: 0 4px;
  /* border-radius: 8px; */
`
const Mark = styled.mark`
  background: none;
  color: var(--color-3);
`

export default function AboutMe() {
  return (
    <Section>
      <Content>
        <h2>About me</h2>
        <Item w={20}>
          <img src="/about-1.png" />
          <p>I like to <Title>play music</Title> and I have been a member of the Dig Me No Grave band for nine years, <Mark>two albums, two extended plays, three splits</Mark> and dozens of concerts in different venues.</p>
        </Item>
        <Item w={24}>
          <img src="/about-2.png" />
          <p>I prefer to spend my free time <Title>traveling</Title>by car, bicycle, on foot and I dream of mastering water modes of transport <Mark>in order to get to hard-to-reach places</Mark> where I have never been before.</p>
        </Item>
        <Item w={28}>
          <img src="/about-3.png" />
          <p>My third <Title>big hobby</Title> is technology, programming, audio engineering, mechanics, construction and <Mark>all the technical tools</Mark> that allow you to create something new!</p>
        </Item>
      </Content>
    </Section>
  )
}