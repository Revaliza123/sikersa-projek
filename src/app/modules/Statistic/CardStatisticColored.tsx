import PotensiDesaIcon from "@app/components/Icons/Statistic/PotensiDesaIcon"
import MeshIllustration from "@app/components/Illustration/MeshIllustration"
import { font } from "@app/styled/function/_font.styled"
import { DescriptionInfo } from "@app/styled/typography.styled"
import React from "react"
import { Card } from "react-bootstrap"
import styled from "styled-components"

export default function CardStatisticColored() {
  return (
    <CardCustom style={{ background: "var(--primary)" }}>
      <CardHeader>Data Potensi Desa</CardHeader>
      <CardBody>
        <PotensiDesaIcon></PotensiDesaIcon>
        <DescInfo>Luas Desa</DescInfo>
        <Title>24.256 Ha</Title>
      </CardBody>
      <IllustrationContainer>
        <MeshIllustration></MeshIllustration>
      </IllustrationContainer>
    </CardCustom>
  )
}

const CardCustom = styled(Card)`
  height: 23.6rem;
  overflow: hidden;
`

const CardHeader = styled(Card.Header)`
  background-color: var(--primary);
  background: transparent;
  border-bottom: 0;
  padding: 2rem;
  ${font({ size: "1.1rem" })}
  font-weight: 500;
  color: #fff;
`

const CardBody = styled(Card.Body)`
  color: #fff;
  z-index: 111;
`

const Title = styled.h1`
  font-weight: 700;
  ${font({ size: "2.66rem" })}
`

const IllustrationContainer = styled.div`
  /* margin:0 -1rem; */
  bottom: -2rem;
  position: absolute;
`
const DescInfo = styled(DescriptionInfo)`
  color: #fff;
  margin-top: 1rem;
`
