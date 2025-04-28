import { Nav } from "react-bootstrap"
import styled from "styled-components"
import { font } from "./function/_font.styled"

export const TabLink = styled(Nav.Link)<{ bold?: boolean }>`
  color: var(--black-600);
  padding: 0.85rem 0;
  margin: 0 1rem;
  text-align: center;
  font-weight: ${(props) => (props.bold ? "600" : "500")};
  ${font({})}

  &.active {
    color: var(--primary);
    box-shadow: 0px 2px var(--primary);
  }
  &:hover {
    cursor: pointer;
  }
`
