import styled from "styled-components"

const Section = styled.section`
  width: 100wv;
  margin: auto;
  display: grid;
  &::before {
    content: '';
    display: block;
    width: calc(100vw + 100px);
    height: 540px;
    background: #353535;
    opacity: 50%;
    position: absolute;
    left: -50px;
    top: 430px;
    transform: rotate(-2deg);
    z-index: -1;
  }
`

export default function CurrentProjects() {
  return (
    <Section>123</Section>
  )
}