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
    content: '';
    display: block;
    width: 100%;
    height: 1px;
    background: #4f4f4f;
    position: absolute;
    left: 0;
    top: 50%;
    z-index: -1;
    animation: ${animateLine} 1 2s
  }
`
const Contant = styled.nav`
  max-width: 1200px;
  padding: 0 30px;
  height: 100%;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  color: var(--color-1);
  ${device.tablet} {
    display: flex;
    justify-content: space-between;
    padding: 0 15px;
  }
`
const Menu = styled.div`
  grid-column: 1/9;
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
  padding: 0 30px;
  font-size: 17px;
  ${device.tablet} {
    position: absolute;
    left: 40px;
    top: 60px;
    display: ${props => props.active ? 'grid' : 'none'};
    padding: 20px;
    border-radius: 8px;
    background-color: var(--color-6);
  }
`
const Socials = styled.div`
  grid-column: 9/13;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: flex-end;
`
const LineBlock = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  position: relative;
  opacity: 0;
  animation-name: ${animateNavItems};
  animation-fill-mode: forwards;
  animation-duration: 0.5s;
  animation-delay: ${props => props.delay}s;
  a {
    display: flex;
    transition: transform 0.2s;
    text-decoration: none;
    color: var(--colo-1);
    &:hover {
      transform: scale(1.1);
    }
  }
  &:before {
    content: '';
    display: block;
    width: calc(110% + 20px);
    height: 1px;
    background: #242424;
    position: absolute;
    left: calc(-5% - 10px);
    top: 50%;
    z-index: -1;
  }
`
const Humburger = styled(LineBlock)`
  display: none;
  ${device.tablet} {
    display: flex;
  }
`

export default function Header() {
  const [menuActive, setMenuActive] = useState(false)
  return (
    <Section>
      <Contant>
        <Humburger onClick={() => setMenuActive(!menuActive)}>
          <img src="/humburger.svg"/>
        </Humburger>
        <Menu active={menuActive}>
          <LineBlock delay={0}>
            <a href="#skills">Skills</a>
          </LineBlock>
          <LineBlock delay={0.2}>
            <a href="#current-project">Current Projects</a>
          </LineBlock>
          <LineBlock delay={0.4}>
            <a href="education-experience">Education / Experience</a>
          </LineBlock>
          <LineBlock delay={0.6}>
            <a href="about-me">About me</a>
          </LineBlock>  
        </Menu>
        <Socials>
          <LineBlock delay={0.8}>
            <a href="https://t.me/enmourn" target="_blank"><img src="/telegram.svg" /></a>
            <a href="https://www.instagram.com/en_mourn" target="_blank"><img src="/instagram.svg" /></a>
          </LineBlock>
        </Socials>
      </Contant>
    </Section>
  )
}