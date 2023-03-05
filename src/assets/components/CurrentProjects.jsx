import styled from "styled-components"
import { Section } from "./Common"
import { ReactComponent as IconExternalLink } from '../../../public/external-link.svg'
import Slider from './Slider'

const Project = styled.div`
  min-width: calc(25% - 15px);
  border-radius: 8px;
  background: var(--color-0);
  padding-bottom: 10px;
  @media (max-width: 1024px) {
    min-width: calc(33.33% - 13.33px);
  }
  @media (max-width: 768px) {
    min-width: calc(50% - 10px);
  }
  @media (max-width: 520px) {
    min-width: 100%;
  }
`
const Image = styled.img`
  max-width: calc(100% - 20px);
  border-radius: 8px;
  padding: 10px;
`
const Title = styled.div`
  display: flex;
  justify-content: space-between;
  color: var(--color-3);
  padding: 0 20px;
  font-size: 20px;
  svg {
    margin-top: 2px;
  }
  &:hover {
    color: var(--color-2);
    cursor: pointer;
    svg path {
      fill: var(--color-2);
    }
  }
`
const Text = styled.p`
  color: var(--color-1);
  padding: 0 20px;
`
const Mark = styled.mark`
  background: transparent;
  color: var(--color-2);
`

export default function CurrentProjects() {
  const projects = [
    {
      img: '/projects/bandstats-1.png',
      title: 'BandStats',
      description: 'Simple and convenient tool for evaluating the activity of a group and its members',
      techStack: 'React, React Router, Chakra, Chart.js, Firebase, Vite',
      toDo: 'Add month statistic'
    },
    {
      img: './projects/portfolio-1.png',
      title: 'Portfolio',
      description: `It's my web portfolio where you can fine some information about my skills, experience,
      current projects, and send me message`,
      techStack: 'React, Styled Components, Vite',
      toDo: 'Add light theme and language switcher'
    },
    {
      img: './projects/canvas-game-1.png',
      title: 'Canvas Game',
      description: 'Here am learning base principles of game development, creating unusual labyrinth game',
      techStack: 'HTML5, JavaScript ES6, Vite',
      toDo: ''
    },
    {
      img: './projects/shop-1.png',
      title: 'Shop',
      description: 'Internet store',
      techStack: 'React, Redux, TypeScript, Styled Components, Firebase, Vite',
      toDo: 'Completely under development'
    }
  ]
  return (
    <Section>
      <h2>Current projects</h2>
      <Slider>
      {projects.map(project => 
        <Project key={project.title}>
          <Image src={project.img}/>
          <Title>{project.title}<IconExternalLink /></Title>
          <Text>{project.description}</Text>
          <Text><Mark>Tech stack: </Mark>{project.techStack}</Text>
          <Text><Mark>To do: </Mark>{project.toDo}</Text>
        </Project>
      )}
      </Slider>
    </Section>
  )
}