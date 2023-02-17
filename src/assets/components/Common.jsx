import styled from "styled-components"

export const Button = styled.button`
  background-color: ${props => props.primary ? 'var(--color-3)': 'var(--color-0)'};
  color: ${props => props.primary ? 'var(--color-0)': 'var(--color-2)'};
  border: none;
  border-radius: 30px;
  padding: 9px 32px;
  font-family: 'Coda';
  font-size: 15px;
  margin-top: ${props => props.mt}px;
  margin-left: ${props => props.ml}px;
  cursor: pointer;
`