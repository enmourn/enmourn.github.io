import styled from "styled-components"
import Code from "./Code"
import { Button, device } from "./Common"
import portfolioPDF from "../Mishin_Ivan.pdf"

const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  column-gap: 50px;
  max-width: 1200px;
  padding: 0 30px;
  margin: auto;
  padding-bottom: 30px;
  position: relative;
  h1 {
    grid-column: 1/9;
  }
  ${device.tablet} {
    column-gap: 30px;
    padding-bottom: 20px;
  }
  ${device.mobileL} {
    grid-template-columns: 1fr;
    h1 {
      grid-column: auto;
      text-align: center;
      margin-bottom: 20px;
      margin-top: 10px;
    }
  }
  ${device.mobileM} {
    padding: 0 20px;
    h1 {
      font-size: 34px;
    }
  }
`
const Content = styled.div`
  grid-column: 1/9;
  background: "red";
  ${device.mobileL} {
    grid-column: auto;
    grid-row: 3;
  }
`
const Profile = styled.div`
  grid-column: 9/13;
  display: grid;
  justify-items: center;
  align-content: flex-start;
  margin-top: -30px;
  img {
    width: 100%;
  }
  div {
    display: flex;
    gap: 10px;
    margin-top: 20px;
    button {
      width: 128px;
    }
  }
  ${device.tablet} {
    div {
      display: grid;
    }
  }
  ${device.mobileL} {
    grid-column: auto;
    grid-row: 2;
    margin-top: 0;
    img {
      max-width: 360px;
    }
    div {
      display: flex;
    }
  }
`

export default function Skills() {
  const scrollToForm = () => {
    document.querySelector("footer").scrollIntoView({ behavior: "smooth" })
  }

  return (
    <Section>
      <h1>Web Development</h1>
      <Content>
        <h2 id="skills">Skills</h2>
        <Code />
      </Content>
      <Profile>
        <img src="/avatar.png" />
        <div>
          <Button primary onClick={scrollToForm}>
            Contact me
          </Button>
          <Button as="a" href={portfolioPDF} download style={{ textDecoration: "none" }}>
            Download CV
          </Button>
        </div>
      </Profile>
    </Section>
  )
}
