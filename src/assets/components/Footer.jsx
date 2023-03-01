import styled from "styled-components"
import { Section, Button, device } from "./Common"

const StyledFooter = styled(Section.withComponent('footer'))`
  .form-contact {
    border-radius: 8px;
    max-width: 500px;
    padding-top: 30px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    .title {
      font-size: 40px;
      color: var(--color-3);
      grid-column: 1/3;
      line-height: 1;
      margin-bottom: 20px;
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
    .button-submit {
      justify-self: start;
      padding-left: 50px;
      padding-right: 50px;
    }
  }
  .copyright {
    position: absolute;
    right: 30px;
    bottom: 39px;
    color: #353535;
    font-size: 13px;
  }
`

export default function Footer() {
  return (
    <StyledFooter bg="#111">
      <form className="form-contact">
        <span className="title">Contact me</span>
        <input name="name" placeholder="Name"/>
        <input name="email" placeholder="Email"/>
        <input name="phone" placeholder="Phone"/>
        <textarea name="message" placeholder="Message" rows="7"></textarea>
        <Button className="button-submit" primary>Send</Button>
      </form>
      <span className="copyright">© Mishin I. V., 2023</span>
    </StyledFooter>
  )
}