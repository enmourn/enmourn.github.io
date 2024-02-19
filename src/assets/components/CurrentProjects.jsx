import styled from "styled-components"
import { Button, Section } from "./Common"
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
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  min-width: calc(25% - 15px);
  border-radius: 8px;
  background: var(--color-0);
  padding-bottom: 20px;
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
  margin: 0;
  &:last-of-type {
    margin-bottom: 5px;
  }
`
const Mark = styled.mark`
  background: transparent;
  color: var(--color-2);
`

const ViewCode = styled.a`
  background: var(--color-7);
  border: none;
  border-radius: 4px;
  font-family: "Coda";
  font-size: 14px;
  color: black;
  text-decoration: none;
  align-self: flex-start;
  margin-top: auto;
  margin-left: 20px;
  padding: 2px 12px;
  transition: background-color 0.2s;
  cursor: pointer;
  &:hover {
    background: var(--color-6);
  }
`

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
    img: "./projects/collagepro.png",
    title: "Collage Pro",
    link: "/collagepro",
    description: `Collage maker with the ability to change canvas, template, save project localy and
      getting preview and final image`,
    techStack: "Preact, Typescipt, Zustand, Styled Components, Vite",
    toDo: "Fix rendering bugs, create image optimization, redesign sidebar, make mouse control, add image filters",
  },
  {
    img: "./projects/lost-in-the-forest.png",
    title: "Lost In The Forest",
    link: "/lost-in-the-forest",
    linkCode: "https://github.com/enmourn/lost-in-the-forest",
    description: "2D top-down view simulator, created to demonstrate what happens to a person lost in the forest.",
    techStack: "HTML5, TypeScript, ES6, Vite",
    toDo: "Sprite graphics",
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
    img: "./projects/portfolio.png",
    title: "Portfolio",
    link: "/",
    description: `It's my web portfolio where you can fine some information about my skills, experience,
      current projects, and send me message`,
    techStack: "React, Styled Components, Vite",
    toDo: "Add light theme and language switcher",
  },
  {
    img: "./projects/metal-circle.png",
    title: "Metal Circle",
    link: "/metalcircle",
    description: "Marketplace for underground metal bands, music lables and fans",
    techStack: "React, Redux Toolkit, TypeScript, Styled Components, Firebase, Vite",
    toDo: "Make basic functionality",
  },
]

export default function CurrentProjects() {
  return (
    <Section>
      <h2 id="current-projects">My current projects</h2>
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
            {project.linkCode && (
              <ViewCode href={project.linkCode} target="_blank">
                view code
              </ViewCode>
            )}
          </Project>
        ))}
      </Projects>
    </Section>
  )
}
