import { Button, ListGroup } from "react-bootstrap"
import styled from "styled-components"

export const ListGroupItem = styled(ListGroup.Item)`
  padding: 1rem 0;
  align-items: center;
  gap: 1rem;
  border-style: dashed;
  &:first-child {
    padding-top: 0 !important;
  }
  &:last-child {
    padding-bottom: 0 !important;
  }
`

export const ArrowRight = styled(Button)`
  background: var(--black-50);
`
