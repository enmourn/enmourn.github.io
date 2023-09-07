import styled from "styled-components"
import { ReactComponent as IconArrowLeft } from "./icons/arrow-left.svg"
import { ReactComponent as IconArrowRight } from "./icons/arrow-right.svg"
import React, { useState, useEffect, useRef } from "react"

const Viewport = styled.div`
  display: flex;
  column-gap: 20px;
  overflow-x: scroll;
  position: relative;
  &::-webkit-scrollbar {
    display: none;
  }
`
const Pagination = styled.div`
  display: ${(props) => (props.active ? "flex" : "none")};
  justify-content: center;
  margin: 30px;
`
const Button = styled.button`
  height: 20px;
  background: none;
  border: none;
  visibility: ${(props) => (props.active ? "visible" : "hidden")};
  cursor: pointer;
`
const Items = styled.div`
  display: flex;
  align-items: center;
  margin: 0 5px;
`
const Item = styled.div`
  width: 7px;
  height: 7px;
  border: 1px solid var(--color-1);
  border-radius: 50%;
  margin: 0 6px;
  background: ${(props) => (props.active ? "var(--color-1)" : "none")};
`

export default function Slider({ children }) {
  const [items, setItems] = useState([])
  const leftAccess = !items[0]
  const rightAccess = !items[items.length - 1]
  const block = useRef()
  const handleScroll = () => {
    const projects = Array.from(block.current.children)
    const newItems = projects.map((project) => {
      const windowResizeError = 2
      const offsetLeft = project.offsetLeft - block.current.scrollLeft
      const offsetRight = offsetLeft + project.clientWidth - windowResizeError
      return offsetLeft >= 0 && offsetRight <= block.current.clientWidth
    })
    setItems(newItems)
  }
  const handleMove = (dir) => {
    const index = dir ? items.indexOf(false, items.indexOf(true)) : items.indexOf(true) - 1
    block.current.children[index].scrollIntoView({ block: "nearest", behavior: "smooth" })
  }
  useEffect(() => {
    window.addEventListener("resize", handleScroll)
    handleScroll()
    return () => window.removeEventListener("resize", handleScroll)
  }, [])
  return (
    <>
      <Viewport ref={block} onScroll={handleScroll}>
        {children}
      </Viewport>
      <Pagination active={leftAccess || rightAccess}>
        <Button active={leftAccess} onClick={() => handleMove(false)}>
          <IconArrowLeft />
        </Button>
        <Items>
          {items.map((item, index) => (
            <Item key={index} active={item} />
          ))}
        </Items>
        <Button active={rightAccess} onClick={() => handleMove(true)}>
          <IconArrowRight />
        </Button>
      </Pagination>
    </>
  )
}
