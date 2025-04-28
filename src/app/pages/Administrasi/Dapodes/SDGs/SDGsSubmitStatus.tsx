import { SDGsStatusErrorIcon } from "@app/components/Icons/SDGsStatusErrorIcon"
import { SDGsStatusSuccessIcon } from "@app/components/Icons/SDGsStatusSuccessIcon"
import React from "react"
import { Button } from "react-bootstrap"

export function KuesionerStatus({
  status,
  onAction,
}: {
  status: { isExist: boolean; type: string }
  onAction: any
}) {
  const { isExist, type: kuesionerType } = status

  return (
    <div className="d-flex flex-column justify-content-center align-items-center text-center">
      {!isExist ? <SDGsStatusErrorIcon /> : <SDGsStatusSuccessIcon />}
      <h5>{!isExist ? "Tidak Ada Data" : "Terdata"}</h5>
      <h6>
        {kuesionerType === "kuesioner_individu" ? "NIK" : "Nomor KK"}{" "}
        {isExist ? "sudah" : "belum"} ada pendataan SDGs
        <br />
        Data sebelumnya
      </h6>
      {!isExist ? <p className="py-2 fw-bold">Silakan isi kuesioner</p> : null}
      <Button onClick={onAction} type="button" variant="primary">
        {!isExist ? "Isi kuesioner" : "Lihat data"}
      </Button>
    </div>
  )
}
