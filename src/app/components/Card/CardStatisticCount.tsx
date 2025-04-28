import { font } from "@app/styled/function/_font.styled"
import React, { FC } from "react"
import { Card } from "react-bootstrap"
import styled from "styled-components"
import { ApproveDocumentIllustration } from "../Illustration/ApproveDocumentIllustration"
import { ChecklistDocumentIllustration } from "../Illustration/ChecklistDocumentIllustration"
import CityIllustration from "../Illustration/CityIllustration"
import ClipIllustration from "../Illustration/ClipIllustration"
import MetricAgendaIllustration from "../Illustration/MetricAgendaIllustration"
import MetricAparatDesaIllustration from "../Illustration/MetricAparatDesaIllustration"
import MetricInvestasiKekayaanDesaIllustration from "../Illustration/MetricInvestasiKekayaanDesaIllustration"
import { MetricKKIllustration } from "../Illustration/MetricKKIllustration"
import MetricKeputusanDesaIllustration from "../Illustration/MetricKeputusanDesaIllustration"
import MetricLembaranDanBeritaDesaIllustration from "../Illustration/MetricLembaranDanBeritaDesaIllustration"
import MetricPeraturanDesaIllustration from "../Illustration/MetricPeraturanDesaIllustration"
import { MetricRTIllustration } from "../Illustration/MetricRTIllustration"
import { MetricRWIllustration } from "../Illustration/MetricRWIllustration"
import MetricTanahKasDesaIllustration from "../Illustration/MetricTanahKasDesaIllustration"
import PersonDuo from "../Illustration/PersonDuo"
import { ProcessIllustration } from "../Illustration/ProcessIllustration"
import { RejectDocumentIllustration } from "../Illustration/RejectDocumentIllustration"
import { VerifyDocumentIllustration } from "../Illustration/VerifyDocumentIllustration"

const CARD_STYLES = {
  green: {
    backgroundColor: "var(--primary)",
    color: "#fff",
  },
  orange: {
    backgroundColor: "var(--secondary)",
    color: "var(--black)",
  },
  gray: {
    backgroundColor: "#44556C",
    color: "#fff",
  },
  transprent: {
    backgroundColor: "var(--white)",
    color: "var(--text-body)",
  },
}

const WIDGETS = {
  "Jumlah Penduduk": {
    style: CARD_STYLES.green,
    icon: <PersonDuo />,
  },
  "Mutasi Penduduk": {
    style: CARD_STYLES.orange,
    icon: <CityIllustration />,
  },
  "Penduduk Sementara": {
    style: CARD_STYLES.gray,
    icon: <ClipIllustration />,
  },
  other: {
    style: CARD_STYLES.transprent,
    icon: null,
  },
  "Total Pengajuan": {
    style: CARD_STYLES.green,
    icon: <ChecklistDocumentIllustration />,
  },
  "Belum Diproses": {
    style: CARD_STYLES.orange,
    icon: <ProcessIllustration />,
  },
  "Surat Ditolak": {
    style: CARD_STYLES.gray,
    icon: <RejectDocumentIllustration />,
  },
  "Proses Verifikasi": {
    style: CARD_STYLES.orange,
    icon: <VerifyDocumentIllustration />,
  },
  "Pengajuan Selesai": {
    style: CARD_STYLES.green,
    icon: <ApproveDocumentIllustration />,
  },
  "Jumlah RT": {
    style: CARD_STYLES.green,
    icon: <MetricRTIllustration />,
  },
  "Jumlah RW": {
    style: CARD_STYLES.orange,
    icon: <MetricRWIllustration />,
  },
  "Jumlah KK": {
    style: CARD_STYLES.gray,
    icon: <MetricKKIllustration />,
  },
  "Peraturan Desa": {
    style: CARD_STYLES.transprent,
    icon: <MetricPeraturanDesaIllustration />,
    position: {
      bottom: 0,
      right: "10px",
    },
  },
  "Keputusan Kepala Desa": {
    style: CARD_STYLES.transprent,
    icon: <MetricKeputusanDesaIllustration />,
    position: {
      bottom: 0,
      right: "10px",
    },
  },
  "Inventaris Kekayaan Desa": {
    style: CARD_STYLES.transprent,
    icon: <MetricInvestasiKekayaanDesaIllustration />,
    position: {
      bottom: 0,
      right: "10px",
    },
  },
  "Aparat Pemerintah Desa": {
    style: CARD_STYLES.transprent,
    icon: <MetricAparatDesaIllustration />,
    position: {
      bottom: 0,
      right: "10px",
    },
  },
  "Tanah Kas Desa": {
    style: CARD_STYLES.transprent,
    icon: <MetricTanahKasDesaIllustration />,
    position: {
      bottom: 0,
      right: "10px",
    },
  },
  "Tanah Desa": {
    style: CARD_STYLES.transprent,
    icon: <MetricLembaranDanBeritaDesaIllustration />,
    position: {
      bottom: 0,
      right: "10px",
    },
  },
  Agenda: {
    style: CARD_STYLES.transprent,
    icon: <MetricAgendaIllustration />,
    position: {
      bottom: 0,
      right: "10px",
    },
  },
  Ekspedisi: {
    style: CARD_STYLES.transprent,
    icon: <MetricTanahKasDesaIllustration />,
    position: {
      bottom: 0,
      right: "10px",
    },
  },
  "Lembaran dan Berita Desa": {
    style: CARD_STYLES.transprent,
    icon: <MetricLembaranDanBeritaDesaIllustration />,
    position: {
      bottom: 0,
      right: "10px",
    },
  },
} as Record<string, any>

const CardStatisticCount: FC<Props> = ({
  name = "String Info",
  value = 0,
  style = "shadow",
  onClick,
  labelAsHeader = false,
  labelWrap = "nowrap",
  customStyles = {},
}) => {
  return (
    <CardStatistic
      onClick={onClick}
      style={{
        ...(WIDGETS[name] ? WIDGETS[name]?.style : WIDGETS["other"]?.style),
        ...customStyles,
      }}>
      {/* <BoxIcon
        style={{
          bottom: " 0",
          right: "0",
          ...(WIDGETS[name]?.position ? WIDGETS[name]?.position : {}),
        }}>
        {WIDGETS[name]?.icon ? WIDGETS[name]?.icon : WIDGETS["other"]?.icon}
      </BoxIcon> */}
      <Description
        style={{
          ...(WIDGETS[name] ? WIDGETS[name]?.style : WIDGETS["other"]?.style),
        }}>
        {labelAsHeader ? (
          <>
            <Label title={name} wrap={labelWrap === "wrap"}>
              {name}
            </Label>
            <CountInfo>{value}</CountInfo>
          </>
        ) : (
          <>
            <CountInfo>{value}</CountInfo>
            <Label title={name} wrap={labelWrap === "wrap"}>
              {name}
            </Label>
          </>
        )}
      </Description>
    </CardStatistic>
  )
}
export const BoxIcon = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
`

export const CardStatistic = styled(Card)`
  box-shadow: ${(props) =>
    props.theme?.style == "shadow"
      ? "0px 1px 2px rgba(0, 0, 0, 0.06)"
      : "none"};

  border: ${(props) =>
    props.theme?.style == "bordered"
      ? "1px solid var(--black-100) !important"
      : "none"};

  border-radius: 5px;
  border: 0;
  padding: 1.33rem;
  height: auto;
  overflow: hidden;
  position: relative;
  cursor: pointer;
`

const Description = styled.div`
  ${font({ size: "1rem" })}
  font-style: normal;
  font-weight: 700;
  line-height: 1.5rem;
  margin-top: 0.25rem;
`

const Label = styled.div<{ wrap: boolean }>`
  font-weight: 500;
  font-size: 1.04136rem;
  line-height: 1.25;
  // margin-top: 1.25rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: ${(props) => (props.wrap ? "wrap" : "nowrap")};
  width: ${(props) => (props.wrap ? "80%" : "100%")};
  line-break: strict;
  position: relative;
  z-index: 1;
`
const CountInfo = styled.h2`
  font-weight: 700;
  font-size: 3.07729rem;
  margin-bottom: 0;
  margin-top: 0.5rem;
`

type Props = {
  name: string
  badgeInfo?: any
  value?: any
  style?: "bordered" | "shadow"
  onClick?: React.MouseEventHandler<HTMLElement>
  labelAsHeader?: boolean
  labelWrap?: "wrap" | "nowrap"
  customStyles?: any
}

export default CardStatisticCount
