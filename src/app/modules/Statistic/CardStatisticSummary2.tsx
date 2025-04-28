import ShiledIcon from "@app/components/Icons/Statistic/ShiledIcon"
import { DFlex } from "@app/styled/flex.styled"
import React, { JSX } from "react"
import { Card } from "react-bootstrap"
import styled from "styled-components"

export default function CardStatisticSummary2({
  total = "0",
  icon = <ShiledIcon />,
  label = "Label information",
  align = "left",
  percentage = null,
}: ICardStatistik) {
  return (
    <CardContainer>
      <CardBody>
        <DFlex className="align-items-center">
          {icon && <div className="me-2">{icon}</div>}
          <div className={`text-${align}`}>
            {percentage ? (
              <CardPercentage>({percentage})</CardPercentage>
            ) : null}
            <CardTotalData style={{ fontSize: "2.23436rem" }}>
              {total}
            </CardTotalData>
            <CardDesc>{label}</CardDesc>
          </div>
        </DFlex>
      </CardBody>
    </CardContainer>
  )
}

const CardContainer = styled(Card)`
  border: none;
  overflow: hidden;
  background-color: inherit;
  color: inherit;
`
const CardTotalData = styled.h5`
  margin: 0;
  font-weight: 800;
  font-size: 2.23436rem;
  color: #2d3848;
`
const CardBody = styled(Card.Body)`
  padding: 2rem 1.3rem;
`
const CardPercentage = styled.span`
  font-weight: 500;
  color: unset; //var(--black-600);
  margin-top: 1rem;
  font-size: 1.2rem;
  color: #2d3848;
`

const CardDesc = styled.p`
  color: #2d3848;
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 500;
  margin: 0;
  line-height: 1.87686rem; /* 210% */
`

interface ICardStatistik {
  total?: string | number
  label?: string
  icon?: JSX.Element | null
  align?: "left" | "right" | "center"
  percentage?: string | null
}
