import { Button } from "react-bootstrap"
import styled from "styled-components"

export const ButtonIcon = styled(Button)`
  background: transparent;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  position: relative;

  &:focus {
    box-shadow: none !important;
  }
`
