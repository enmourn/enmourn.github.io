import styled from "styled-components"
import { device } from "./Common"

const Container = styled.div`
  position: relative;
  background-color: var(--color-0);
  border-radius: 8px;
  padding: 10px 10px 0px 60px;
  font-family: 'DM Mono';
  overflow: hidden;
  &:before {
    content: '1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32';
    display: block;
    width: 20px;
    position: absolute;
    left: 20px;
    top: 10px;
    padding-right: 20px;
    color: #4f4e4e;
    border-right: 1px solid #252525;
    text-align: end;
  }
  ${device.tablet} {
    font-size: 14px;
  }
`
const Line = styled.div`
  background-color: var(--color-0);
  color: ${props => props.color};
  margin-left: ${props => props.tab * 20}px;
  position: relative;
  padding-bottom: ${props => props.last ? 4 : 0}px;
  &::before {
    content: '·· ·· ·· ·· ';
    display: ${props => props.tab ? 'block' : 'none'};
    width: 10px;
    position: absolute;
    left: -18px;
    top: 0;
    color: #353535;
  }
`
const Mark = styled.mark`
  background: none;
  color: var(--color-1);
`

export default function Code(props) {
  return (
    <Container>
      <Line color='var(--color-1)'>Hello, world {`{`}</Line>
      <Line tab={1}>&nbsp;</Line>
      <Line tab={1} color='var(--color-3)'>
        My name is <Mark>Ivan</Mark>, I'm a <Mark>web developer</Mark> with <Mark>5 years</Mark> of professional experience. In&nbsp;my work I used the following technologies:</Line>
      <Line tab={1}>&nbsp;</Line>
      <Line tab={1} color='var(--color-2)'>Frontend development {`{`}</Line>
      <Line tab={2} color='var(--color-1)'>HTML, JavaScript, React, React Router, Vue, jQuery, CSS, SCSS, Styled Compontnts, Chakra, Gulp, Webpack, CRA, Vite</Line>
      <Line tab={1} color='var(--color-2)'>{`}`}</Line>
      <Line tab={1}>&nbsp;</Line>
      <Line tab={1} color='var(--color-2)'>Backend development {`{`}</Line>
      <Line tab={2} color='var(--color-1)'>NodeJS, Express, Websocket, PHP, RedBeanPHP, MySQL, PostgreSQL, NoSQL</Line>
      <Line tab={1} color='var(--color-2)'>{`}`}</Line>
      <Line tab={1}>&nbsp;</Line>
      <Line tab={1} color='var(--color-2)'>Other helpers {`{`}</Line>
      <Line tab={2} color='var(--color-1)'>Git, Docker, Figma, Photoshop</Line>
      <Line tab={1} color='var(--color-2)'>{`}`}</Line>
      <Line tab={1}>&nbsp;</Line>
      <Line tab={1} color='var(--color-3)'>I will be glad to cooperate! Thanks {`=>`}</Line>
      <Line color='var(--color-1)'>{`}`}</Line>
      <Line last>&nbsp;</Line>
    </Container>
  )
}