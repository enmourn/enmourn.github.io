import styled from "styled-components"
import { Button, device } from "./Common"

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
  height: 100%;
  max-width: 1200px;
  padding: 0 30px;
  margin: auto;
  padding-bottom: 40px;
  position: relative;
  form {
    grid-column: 1/2;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    max-width: 540px;
    margin-top: 30px;
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
  ${device.laptop} {
    form {
      margin-left: 40px;
    }
  }
  ${device.mobileL} {
    form {
      margin-left: 0;
    }
  }
  ${device.mobileM} {
    padding-bottom: 20px;
    form {
      grid-template-columns: 1fr;
      span, input, textarea {
        grid-column: auto;
      }
    }
  }
`
const Copyright = styled.div`
  position: absolute;
  right: 30px;
  bottom: 48px;
  color: #353535;
  font-size: 13px;
  ${device.mobileM} {
    bottom: 28px;
  }
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
        <Copyright>© Mishin I. V., 2023</Copyright>
      </Content>
    </Section>
  )
}