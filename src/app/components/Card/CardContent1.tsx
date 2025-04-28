import { font } from "@app/styled/function/_font.styled"
import React from "react"
import { Card } from "react-bootstrap"
import styled from "styled-components"

export default function CardContent1({
  title = "Title Here",
  className = "",
  children,
}: ICardContent1) {
  return (
    <CardContent className={className}>
      <CardHeader>{title}</CardHeader>
      <CardBody>{children && children}</CardBody>
    </CardContent>
  )
}

interface ICardContent1 {
  children?: any
  title?: string
  className?: string
}

const CardContent = styled(Card)``

const CardHeader = styled(Card.Header)`
  background-color: var(--white);
  padding: 1.25rem 1.25rem;
  font-weight: 600;
  ${font({})};
  border-bottom: 1px solid var(--black-100);
`

const CardBody = styled(Card.Body)`
  padding: 1.25rem 1.25rem;
`
