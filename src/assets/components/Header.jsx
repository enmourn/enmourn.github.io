import styled, { keyframes } from "styled-components"

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
const Nav = styled.nav`
  max-width: 1200px;
  padding: 0 50px;
  height: 100%;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  color: var(--color-1);
`
const Menu = styled.div`
  grid-column: 1/9;
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
  padding: 0 30px;
  font-size: 17px;
`
const Socials = styled.div`
  grid-column: 9/13;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: flex-end;
  padding: 0 30px;
`
const Link = styled.a`
  display: flex;
  position: relative;
  opacity: 0;
  color: var(--color-1);
  text-decoration: none;
  animation-name: ${animateNavItems};
  animation-fill-mode: forwards;
  animation-duration: 0.5s;
  animation-delay: ${props => props.delay}s;
  &::before {
    content: '';
    display: block;
    width: calc(100% + 20px);
    height: 1px;
    background: #242424;
    position: absolute;
    left: -10px;
    top: 50%;
    z-index: -1;
  }
`

export default function Header() {
  return (
    <Section>
      <Nav>
        <Menu>
          <Link href="#skills" delay={0}>Skills</Link>
          <Link href="#current-project" delay={0.2}>Current Projects</Link>
          <Link href="education-experience" delay={0.4}>Education / Experience</Link>
          <Link href="about-me" delay={0.6}>About me</Link>  
        </Menu>
        <Socials>
          <Link href="https://t.me/enmourn" target="_blank" delay={0.8}>
            <img src="/telegram.svg" />
          </Link>
          <Link href="https://www.instagram.com/en_mourn" target="_blank" delay={0.8}>
            <img src="/instagram.svg" />
          </Link>
        </Socials>
      </Nav>
    </Section>
  )
}