import styled from "styled-components"
import { Section } from "./Common"
import { ReactComponent as IconExternalLink } from "./icons/external-link.svg"
import { device } from "./Common"

const Projects = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 1fr 1fr;
  ${device.mobileL} {
    grid-template-columns: 1fr 1fr;
  }
  ${device.mobileM} {
    grid-template-columns: auto;
  }
`
const Project = styled.div`
  min-width: calc(25% - 15px);
  border-radius: 8px;
  background: var(--color-0);
  padding-bottom: 10px;
`
const Image = styled.img`
  max-width: calc(100% - 20px);
  border-radius: 8px;
  padding: 10px;
`
const Title = styled.a`
  display: flex;
  justify-content: space-between;
  color: var(--color-3);
  padding: 0 20px;
  font-size: 20px;
  text-decoration: none;
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
      img: "/projects/bandstats.png",
      title: "BandStats",
      link: "/bandstats",
      description: "Simple and convenient tool for evaluating the activity of a group and its members",
      techStack: "React, React Router, Chakra, Chart.js, Firebase, Vite",
      toDo: "Add month statistic",
    },
    {
      img: "./projects/portfolio.png",
      title: "Portfolio",
      link: "/",
      description: `It's my web portfolio where you can fine some information about my skills, experience,
      current projects, and send me message`,
      techStack: "React, Styled Components, Vite",
      toDo: "Add light theme and language switcher",
    },
    {
      img: "./projects/canvas-game.png",
      title: "Canvas Game",
      link: "/canvas-game",
      description: "Here am learning base principles of game development, creating unusual labyrinth game",
      techStack: "HTML5, JavaScript ES6, Vite",
      toDo: "Add map saving, goal, timer and high score table",
    },
    {
      img: "./projects/grotesquesounds.png",
      title: "Grotesque Sounds",
      link: "http://grotesquesounds.ru",
      description: "Internet store for Grotesque Sounds metal music label",
      techStack: "jQuery, PHP, MySQL",
      toDo: "Restore cart, add new payment methods",
    },
    {
      img: "./projects/metal-circle.png",
      title: "Metal Circle",
      link: "/metalcircle",
      description: "Marketplace for underground metal bands, music lables and fans",
      techStack: "React, Redux, TypeScript, Styled Components, Firebase, Vite",
      toDo: "Make basic functionality",
    },
  ]
  return (
    <Section>
      <h2 id="current-projects">Current projects</h2>
      <Projects>
        {projects.map((project) => (
          <Project key={project.title}>
            <Image src={project.img} />
            <Title href={project.link} target="_blank">
              {project.title}
              <IconExternalLink />
            </Title>
            <Text>{project.description}</Text>
            <Text>
              <Mark>Tech stack: </Mark>
              {project.techStack}
            </Text>
            <Text>
              <Mark>To do: </Mark>
              {project.toDo}
            </Text>
          </Project>
        ))}
      </Projects>
    </Section>
  )
}
