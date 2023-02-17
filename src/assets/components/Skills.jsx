import styled from "styled-components";
import Code from "./Code";
import { Button } from './Common';

const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 50px;
  max-width: 1200px;
  padding: 0 50px;
  margin: auto;
  padding-bottom: 40px;
`
const Content = styled.div`
  grid-column: 1/9;
  background: 'red';
`
const Profile = styled.div`
  grid-column: 9/13;
  display: grid;
  justify-items: center;
  align-content: flex-start;
  margin-top: 20px;
  img {
    width: 100%;
  }
`

export default function Skills() {
  return (
    <Section>
      <Content>
        <h1>Web Development</h1>
        <h2>Skills</h2>
        <Code />
      </Content>
      <Profile>
        <img src="/avatar.png" />
        <div>
          <Button primary mt={30}>Contact me</Button>
          <Button ml={10}>Download CV</Button>
        </div>
      </Profile>
    </Section>
  )
}