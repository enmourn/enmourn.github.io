import styled from "styled-components"
import { Section, Button, device } from "./Common"
import { useState } from "react"

const StyledFooter = styled(Section.withComponent("footer"))`
  .title {
    font-size: 40px;
    color: var(--color-3);
    line-height: 1;
    margin-bottom: 20px;
    display: block;
  }
  .form-contact {
    border-radius: 8px;
    width: 100%;
    max-width: 500px;
    padding-top: 30px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    input,
    textarea {
      background: var(--color-0);
      border: 1px solid var(--color-3);
      border-radius: 8px;
      padding: 10px 10px;
      color: var(--color-1);
      resize: none;
      &[name="email"] {
        grid-column: 1/2;
      }
      &:disabled {
        opacity: 0.5;
      }
    }
    textarea {
      grid-column: 1/3;
    }
    .button-submit {
      justify-self: start;
      padding-left: 50px;
      padding-right: 50px;
      &:disabled {
        opacity: 0.5;
      }
    }
    @media (max-width: 520px) {
      grid-template-columns: 1fr;
      .title {
        grid-column: auto;
      }
      input {
        &[name="email"] {
          grid-column: auto;
        }
      }
      textarea {
        grid-column: auto;
      }
    }
  }
  .answer {
    font-size: 26px;
    color: var(--color-3);
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
  const [state, setState] = useState("ready")
  const submit = (e) => {
    e.preventDefault()
    setState("pending")
    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData)
    const api = "https://api.telegram.org/bot"
    const token = "1421702689:AAEFmzi57gvtOOR3Dmn8seX3R-KjNjn6wF4"
    const method = "/sendMessage?chat_id=-982312478"
    const text = `&text=${data.name} ${data.email} ${data.phone} ${data.message}`
    fetch(`${api}${token}${method}${text}`).then(() => {
      setState("submited")
    })
  }

  return (
    <StyledFooter bg="#111">
      <span className="title">Contact me</span>
      {state != "submited" && (
        <form className="form-contact" onSubmit={submit}>
          <input name="name" placeholder="Name" required disabled={state == "pending"} />
          <input name="email" placeholder="Email" required disabled={state == "pending"} />
          <input name="phone" placeholder="Phone" required disabled={state == "pending"} />
          <textarea name="message" placeholder="Message" rows="7" required disabled={state == "pending"}></textarea>
          <Button className="button-submit" primary disabled={state == "pending"}>
            Send
          </Button>
        </form>
      )}
      {state == "submited" && <span className="answer">Thanks, I'll answer you as soon as I can :)</span>}
      <span className="copyright">© Mishin I. V., 2023</span>
    </StyledFooter>
  )
}
