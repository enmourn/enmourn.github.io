import styled from "styled-components"
import { Button } from "./Common"

const Section = styled.footer`
  position: relative;
  overflow: hidden;
  padding-top: 20px;
  &::before {
    content: '';
    display: block;
    width: 100%;
    height: calc(100%);
    background-color: var(--color-0);
    position: absolute;
    z-index: -1;
    top: 30px;
    left: 0;
    transform: skew(0, 2deg);
  }
`
const Content = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1200px;
  padding: 0 50px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 50px;
  padding-bottom: 20px;
  form {
    grid-column: 1/2;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    max-width: 500px;
    margin-top: 30px;
    padding-left: 60px;
    span {
      font-size: 40px;
      color: var(--color-3);
      grid-column: 1/3;
    }
    input, textarea {
      background: var(--color-0);
      border: 1px solid var(--color-3);
      border-radius: 8px;
      padding: 10px 10px;
      color: var(--color-1);
      resize: none;
      &[name=email] {
        grid-column: 1/2;
      }
    }
    textarea {
      grid-column: 1/3;
    }
    button {
      justify-self: flex-start;
      padding-left: 50px;
      padding-right: 50px;
    }
  }
`
const Copyright = styled.div`
  grid-column: 2/3;
  width: 100%;
  text-align: center;
  margin-right: 200px;
  position: relative;
  color: #353535;
  font-size: 14px;
`

export default function Footer() {
  return (
    <Section>
      <Content>
        <form>
          <span>Contact me</span>
          <input name="name" placeholder="Name"/>
          <input name="email" placeholder="Email"/>
          <input name="phone" placeholder="Phone"/>
          <textarea name="message" placeholder="Message" rows="7"></textarea>
          <Button primary>Send</Button>
        </form>
        <div></div>
        <Copyright>© Mishin I. V., 2023</Copyright>
      </Content>
    </Section>
  )
}