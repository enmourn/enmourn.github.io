import styled from "styled-components"

const BaseComponent = styled.div`
  width: ${props => props.w};
  height: ${props => props.h};
  padding: ${props => props.p};
  margin: ${props => props.m};
  margin-top: ${props => props.mt};
  margin-right: ${props => props.mr};
  margin-bottom: ${props => props.mb};
  margin-left: ${props => props.ml};
`
const ButtonComponent = BaseComponent.withComponent('button')

export const device = {
  laptop: `@media (max-width: 1280px)`,
  tablet: `@media (max-width: 1024px)`,
  mobileL: `@media (max-width: 768px)`,
  mobileM: `@media (max-width: 480px)`
}
export const Button = styled(ButtonComponent)`
  background-color: ${props => props.primary ? 'var(--color-3)' : 'var(--color-7)'};
  color: ${props => props.primary ? 'var(--color-0)': 'var(--color-3)'};
  padding: 6px 18px;
  font-family: 'Coda';
  font-size: 15px;
  border-width: 1px;
  border-style: solid;
  border-color: var(--color-3);
  border-radius: 30px;
  transition: background-color 0.2s, border-color 0.2s, color 0.2s;
  cursor: pointer;
  &:hover {
    background-color: var(--color-3-light);
    border-color: var(--color-3-light);
    color: var(--color-0);
  }
`