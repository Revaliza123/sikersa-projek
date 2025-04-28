import { DFlexALignCenter } from "@app/styled/flex.styled"
import { font } from "@app/styled/function/_font.styled"
import React, { FC } from "react"
import styled from "styled-components"

const CardStatisticIllustration: FC<Props> = ({
  name = "String Info",
  value = 0,
  illustration,
  handleClick,
  status,
}) => (
  <CardStatistic
    onClick={handleClick}
    className={"p-4 cursor-pointer " + (status ? "active" : "")}>
    <DFlexALignCenter className="overflow-hidden">
      {/* <div className='mx-auto'> */}
      {illustration && illustration}
      {/* </div> */}
      <Description className="ms-3">
        <Label className="elipsis">{name}</Label>
        <CountInfo>{value}</CountInfo>
      </Description>
    </DFlexALignCenter>
  </CardStatistic>
)

export const CardStatistic = styled.div`
  background-color: var(--white);
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.06);
  border-radius: 5px;
  text-align: center;
  &.active {
    filter: drop-shadow(0px 10px 60px rgba(0, 0, 0, 0.1));
    border: 1px solid var(--primary);
  }
`

const Description = styled.div`
  ${font({ size: "1rem" })}
  font-style: normal;
  font-weight: 700;
  line-height: 1.5rem;
  color: var(--black-800);
  // margin-top: 3rem;
  text-align: start;
`

const Label = styled.div`
  font-weight: 500;
  font-size: 1.2rem;
  margin-bottom: 0.6rem;
`

const CountInfo = styled.h2`
  color: var(--black);
  font-weight: 700;
  font-size: 2.13rem;
  margin-bottom: 0;
`

type Props = {
  name: string
  badgeInfo?: any
  illustration: any
  value?: any
  handleClick: any
  status: any
}

export default CardStatisticIllustration
