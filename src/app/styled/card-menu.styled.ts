import { Dropdown } from "react-bootstrap"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { font } from "./function/_font.styled"
import { CardHeader } from "./report.tyled"

export const DropdownMenu = styled(Dropdown.Menu)`
  margin-top: 1rem;
`

export const DropdownImage = styled(Dropdown)``

export const CardHeaderMenu = styled(CardHeader)`
  ${font({})}
  background-color: white;
  border-bottom: 0;
  font-size: 1rem;
  font-weight: 600;
  padding: 0.9375rem 1.5rem; 
`

export const LinkMenu = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 10.125rem;
  height: 7.875rem;

  &:active,
  &.active,
  &:hover {
    background-color: var(--primary-75) !important;
  }
`
export const LinkMenuClick = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 10.125rem;
  height: 7.875rem;
  cursor: pointer;
`

export const TitleMenu = styled.span`
  font-weight: 500;
  color: var(--black);
  font-size: 0.875rem;
`

export const DescMenu = styled.span`
  font-weight: 400;
  color: var(--black-400);
  font-size: 0.75rem;
`
