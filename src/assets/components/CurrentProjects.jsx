import styled from "styled-components"
import { Section } from "./Common"
import { ReactComponent as IconExternalLink } from "./icons/external-link.svg"
import { device } from "./Common"
import { currentProjects } from "../../config"

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
const Project = styled.a`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  min-width: calc(25% - 15px);
  border-radius: 8px;
  background: var(--color-0);
  transition: background-color 0.2s;
  padding: 20px;
  cursor: pointer;
  &:hover {
    background: var(--color-9);
  }
`
const Image = styled.img`
  margin-bottom: 10px;
`

const Title = styled.h2`
  display: flex;
  justify-content: space-between;
  color: var(--color-3);
  font-size: 20px;
  margin: 0;
  svg {
    margin-top: 2px;
  }
`
const Text = styled.p`
  color: var(--color-1);
  margin: 0;
`
const Mark = styled.mark`
  background: transparent;
  color: var(--color-2);
`

const ViewCode = styled.object`
  margin-top: auto;
  display: flex;
  a {
    background: var(--color-7);
    border-radius: 4px;
    text-decoration: none;
    font-family: "Coda";
    font-size: 14px;
    color: var(--color-3);
    padding: 2px 12px;
    margin-top: 15px;
    transition: background-color 0.2s, color 0.2s;
    @media (hover: hover) {
      &:hover {
        background: var(--color-6);
      }
    }
    @media (hover: none) {
      &:active {
        background: var(--color-6);
      }
    }
  }
`

export default function CurrentProjects() {
  return (
    <Section>
      <h2 id="current-projects">My current projects</h2>
      <Projects>
        {currentProjects.map((project) => (
          <Project key={project.title} href={project.link} target="_blank">
            <Image src={project.img} />
            <Title>
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
              <ViewCode>
                <a href={project.linkCode} target="_blank">
                  view code
                </a>
              </ViewCode>
            )}
          </Project>
        ))}
      </Projects>
    </Section>
  )
}
