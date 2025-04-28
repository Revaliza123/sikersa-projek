import { DFlexALignCenter } from "@app/styled/flex.styled"
import { font } from "@app/styled/function/_font.styled"
import React, { FC } from "react"
import styled from "styled-components"
import { CardStatistic } from "./CardStatisticIllustration"

const CardStatisticIllustrationTotal: FC<Props> = ({
  name = "String Info",
  value = 0,
  illustration,
  handleClick,
  status,
}) => (
  <CardStatistic
    onClick={handleClick}
    className={`p-4 h-100 cursor-pointer ${status ? "active" : ""}`}>
    <DFlexALignCenter className="overflow-hidden  h-100 justify-content-center flex-column">
      <div className="mx-auto">{illustration && illustration}</div>
      <Description>
        <Label className="elipsis">{name}</Label>
        <CountInfo>{value}</CountInfo>
      </Description>
    </DFlexALignCenter>
  </CardStatistic>
)

const Description = styled.div`
  ${font({ size: "1rem" })}
  font-style: normal;
  font-weight: 700;
  line-height: 1.5rem;
  color: var(--black-800);
  margin-top: 3rem;
  text-align: center;
`

const Label = styled.div`
  font-weight: 500;
  font-size: 0.93rem;
`

const CountInfo = styled.h2`
  color: var(--black);
  font-weight: 700;
  font-size: 2.7rem;
  margin-bottom: 0;
  margin-top: 1rem;
`

type Props = {
  name: string
  badgeInfo?: any
  illustration: any
  value?: any
  handleClick: any
  status: any
}

export default CardStatisticIllustrationTotal
