import styled from "styled-components"
import { Section, device } from "./Common"

const Blocks = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  ${device.tablet} {
    grid-template-columns: 1fr 1fr;
  }
  ${device.phoneL} {
    grid-template-columns: 1fr;
  }
`
const Block = styled.div`
  background: var(--color-0);
  border-radius: 8px;
`
const Photo = styled.img`
  box-sizing: border-box;
  border-radius: 50%;
  width: 100%;
  padding: 10px;
`
const Title = styled.div`
  margin: 0 20px;
  display: flex;
  gap: 15px;
  position: relative;
  color: var(--color-3);
  font-size: 20px;
  &:before,
  &:after {
    content: "";
    flex-grow: 2;
    margin-top: 14px;
    height: 1px;
    background: var(--color-2);
  }
`
const Text = styled.p`
  padding: 20px;
  margin: 0;
  color: var(--color-1);
`

export default function AboutMe() {
  return (
    <Section>
      <h2 id="about-me">About me</h2>
      <Blocks>
        <Block>
          <Photo src="/about-1.png" />
          <Title>Play music</Title>
          <Text>
            I like to play music and I have been a member of the Dig Me No Grave band for nine years, two albums, two
            extended plays, three splits and dozens of concerts in different venues.
          </Text>
        </Block>
        <Block>
          <Photo src="/about-2.png" />
          <Title>Traveling</Title>
          <Text>
            I prefer to spend my free time traveling by car, bicycle, on foot and I dream of mastering water modes of
            transport in order to get to hard-to-reach places where I have never been before.
          </Text>
        </Block>
        <Block>
          <Photo src="/about-3.png" />
          <Title>Big hobby</Title>
          <Text>
            My third big hobby is technology, programming, audio engineering, mechanics, construction and all the
            technical tools that allow you to create something new and make our live better.
          </Text>
        </Block>
      </Blocks>
    </Section>
  )
}
