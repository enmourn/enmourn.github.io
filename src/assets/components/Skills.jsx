import styled from "styled-components";

const Section = styled.section`
  grid-template-columns: repeat(12, 1fr);
  max-width: 1216px;
  margin: auto;
`
const Content = styled.div`
  grid-column: 1/8;
  background: 'red';
`


export default function Skills() {
  return (
    <Section>
      <Content>
        <h1>Web Development</h1>
        <h2>Skills</h2>
      </Content>
    </Section>
  )
}