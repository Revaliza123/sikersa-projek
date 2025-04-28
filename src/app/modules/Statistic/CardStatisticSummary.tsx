import ShiledIcon from "@app/components/Icons/Statistic/ShiledIcon"
import { TextDescription } from "@app/styled/select-case.styled"
import React, { JSX } from "react"
import { Card } from "react-bootstrap"
import styled from "styled-components"

export default function CardStatisticSummary({
  total = "0",
  icon = <ShiledIcon></ShiledIcon>,
  label = "Label information",
}: ICardStatistik) {
  return (
    <CardContainer>
      <Card.Body>
        {icon}
        <CardTotalData>{total}</CardTotalData>
        <TextDescription>{label}</TextDescription>
      </Card.Body>
    </CardContainer>
  )
}

const CardContainer = styled(Card)`
  height: 12rem;
  overflow: hidden;
`
const CardTotalData = styled.h3`
  margin-top: 0.5rem;
`

interface ICardStatistik {
  total?: string | number
  label?: string
  icon?: JSX.Element
}
