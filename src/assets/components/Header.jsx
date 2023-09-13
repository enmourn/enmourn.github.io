import { useState } from "react"
import styled, { keyframes } from "styled-components"
import { device } from "./Common"

const animateLine = keyframes`
  from { width: 0 }
  to { width: '100vh' }
`
const animateNavItems = keyframes`
  from { opacity: 0 }
  to { opacity: 1 }
`

const Section = styled.header`
  width: 100vw;
  max-width: 100%;
  height: 60px;
  position: relative;
  &::before {
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    background: #4f4f4f;
    position: absolute;
    left: 0;
    top: 50%;
    z-index: -1;
    animation: ${animateLine} 1 2s;
  }
`
const Content = styled.div`
  max-width: 1200px;
  padding: 0 30px;
  height: 100%;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  align-items: center;
  color: var(--color-1);
  ${device.tablet} {
    display: flex;
    justify-content: space-between;
    padding: 0 10px;
  }
`
const Nav = styled.nav`
  grid-column: 1/9;
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
  padding: 0 30px;
  font-size: 17px;
  z-index: 10;
  ${device.tablet} {
    position: absolute;
    left: 40px;
    top: 60px;
    display: ${(props) => (props.active ? "grid" : "none")};
    padding: 10px 20px;
    border-radius: 8px;
    background-color: var(--color-6);
  }
`
const NavItem = styled.button`
  font-size: 17px;
  border: none;
  background: none;
  color: var(--color-1);
  position: relative;
  transition: transform 0.2s;
  cursor: pointer;
  opacity: 0;
  animation-name: ${animateNavItems};
  animation-fill-mode: forwards;
  animation-duration: 0.5s;
  animation-delay: ${(props) => props.delay}s;
  &::before {
    content: "";
    width: 100%;
    height: 1px;
    background: #121212;
    position: absolute;
    top: 50%;
    left: 0;
    z-index: -1;
  }
  &:hover {
    transform: scale(1.1);
  }
  ${device.tablet} {
    &::before {
      background: #666;
    }
  }
`
const Socials = styled.div`
  grid-column: 9/13;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: flex-end;
`
const SocialsItem = styled.a`
  display: flex;
  position: relative;
  opacity: 0;
  animation-name: ${animateNavItems};
  animation-fill-mode: forwards;
  animation-duration: 0.5s;
  animation-delay: ${(props) => props.delay}s;
  &::before {
    content: "";
    width: 148%;
    height: 1px;
    background: #121212;
    position: absolute;
    top: 50%;
    left: -24%;
    z-index: -1;
  }
  &:hover {
    transform: scale(1.1);
  }
`
const Humburger = styled(SocialsItem)`
  display: none;
  ${device.tablet} {
    display: flex;
  }
`

export default function Header() {
  const [navActive, setNavActive] = useState(false)
  const handlerScroll = (e) => {
    document.getElementById(e.target.getAttribute("to")).scrollIntoView({ behavior: "smooth" })
  }

  return (
    <Section>
      <Content>
        <Humburger onClick={() => setNavActive(!navActive)}>
          <img src="/humburger.svg" />
        </Humburger>
        <Nav active={navActive}>
          <NavItem delay={0} onClick={handlerScroll} to="skills">
            Skills
          </NavItem>
          <NavItem delay={0.2} onClick={handlerScroll} to="current-projects">
            Current Projects
          </NavItem>
          <NavItem delay={0.4} onClick={handlerScroll} to="education-experience">
            Education / Experience
          </NavItem>
          <NavItem delay={0.6} onClick={handlerScroll} to="about-me">
            About Me
          </NavItem>
        </Nav>
        <Socials>
          <SocialsItem delay={0.8} href="https://t.me/enmourn" target="_blank">
            <img src="/telegram.svg" />
          </SocialsItem>
          <SocialsItem delay={0.8} href="https://www.instagram.com/en_mourn" target="_blank">
            <img src="/instagram.svg" />
          </SocialsItem>
        </Socials>
      </Content>
    </Section>
  )
}
