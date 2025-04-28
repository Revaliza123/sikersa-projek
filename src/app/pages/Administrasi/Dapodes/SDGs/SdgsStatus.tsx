import { SdgsStatusSuccessIcon } from "@app/components/Icons/SdgsIcon"
import { SDGsStatusErrorIcon } from "@app/components/Icons/SDGsStatusErrorIcon"
import React from "react"
import { Button } from "react-bootstrap"

type SdgsStatusStatusType = {
  isExist: boolean
  type: string
}

type SdgsStatusType = {
  status: SdgsStatusStatusType
  onAction: any
}

export function SdgsStatus(props: SdgsStatusType) {
  const { isExist, type: kuesionerType } = props.status
  let data
  if (kuesionerType === "kuesioner_individu") {
    data = {
      logo: isExist ? <SdgsStatusSuccessIcon /> : <SDGsStatusErrorIcon />,
      title: isExist ? "Terdata" : "Tidak Ada Data",
      body: isExist
        ? `NIK pernah mengisi pendataan SDGS`
        : `NIK belum pernah mengisi pendataan SDGS<br/>Silakan isi kuesioner`,
      ctaText: isExist ? "Tutup" : "Isi kuesioner",
    }
  } else if (kuesionerType === "kuesioner_keluarga") {
    data = {
      logo: isExist ? <SdgsStatusSuccessIcon /> : <SDGsStatusErrorIcon />,
      title: isExist ? "Terdata" : "Tidak Ada Data",
      body: isExist
        ? `Nomor KK pernah mengisi pendataan SDGS`
        : `Nomor KK belum pernah mengisi pendataan SDGS`,
      ctaText: isExist ? "Tutup" : "Isi kuesioner",
    }
  }

  return (
    <div className="d-flex flex-column justify-content-center align-items-center text-center">
      {data?.logo}
      <h4 className="fs-3 fw-bold my-3">{data?.title}</h4>
      <h5 className="fs-5 mb-3">{data?.body}</h5>
      <Button
        onClick={props.onAction}
        type="button"
        variant="primary"
        className="mb-3">
        {data?.ctaText}
      </Button>
    </div>
  )
}
