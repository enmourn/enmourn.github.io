import styled from "styled-components";
import Code from "./Code";

const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 50px;
  max-width: 1200px;
  padding: 0 50px;
  margin: auto;
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
const Button = styled.button`
  background-color: ${props => props.primary ? 'var(--color-3)': 'var(--color-0)'};
  color: ${props => props.primary ? 'var(--color-0)': 'var(--color-2)'};
  border: none;
  border-radius: 30px;
  padding: 9px 32px;
  font-family: 'DM Mono';
  font-size: 14px;
  margin-top: ${props => props.mt}px;
  cursor: pointer;
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
        <Button primary mt={20}>Contact me</Button>
        <Button mt={10}>Download CV</Button>
      </Profile>
    </Section>
  )
}