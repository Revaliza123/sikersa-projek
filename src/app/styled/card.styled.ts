import { Card as BsCard } from "react-bootstrap"
import styled from "styled-components"
import { font } from "./function/_font.styled"

export const Card = styled(BsCard)``

export const IconText = styled.p`
  text-align: center;
  ${font({ size: "0.85rem" })}
  font-weight: 600;
  line-height: 1.2rem;
  margin: 1rem auto 0 auto;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
`

export const CardIcon = styled(BsCard)`
  padding: 2rem;
  cursor: pointer;
  height: 100%;

  &:hover {
    box-shadow: 0 5px 20px rgba(var(--black-200-rgb), 0.25) !important;
  }
`

export const CardTitle = styled.h5`
  font-size: 1.15rem;
`

export const CardDesc = styled.p`
  font-size: 0.85rem;
  color: var(--black-500);
`

export const CardInfoBox = styled.div`
  text-align: center;
  border: 1px dashed var(--black-200);
  padding: 0.5rem;
  border-radius: var(--border-radius-lg);
  font-size: 0.85rem;
  .count {
    font-weight: bold;
    color: var(--primary);
  }
`

export const CardHeader = styled(BsCard.Header)`
  padding: 1rem 1.5rem;
  font-weight: 600;
  border-bottom: 1px solid var(--black-100);
  background-color: var(--white);
`

export const CardBody = styled(BsCard.Body)`
  padding: 1rem 1.5rem;
`

export const CardFooter = styled.div`
  display: flex;
  justify-content: end;
  gap: 0.75rem;
  padding: 1rem 1.5rem;
`

export const CardSeparator = styled.hr`
  margin: 0.5rem 0;
  border: 1px dashed;
`

export const CardStepIndicator = styled.div<{ active?: boolean }>`
  color: ${(props) => (props.active ? "var(--primary)" : "inherit")};
  display: flex;
  align-items: center;
  gap: 0.5rem;

  div {
    width: 2rem;
    height: 2rem;
    line-height: 2rem;
    text-align: center;
    vertical-align: middle;
    border: 1px solid;
    border-color: ${(props) => (props.active ? "var(--primary)" : "inherit")};
    border-radius: 0.5rem;
  }
`
