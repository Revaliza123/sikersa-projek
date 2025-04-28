import useApiRequest from "@app/services/useApiRequest"
import React, { useState } from "react"
import CardJumlahPenduduk from "./CardJumlahPenduduk"

export default function CardStatisticJumlahPenduduk({
  params = {},
  method = "POST",
  url,
}: ICardStatisticJumlahPenduduk) {
  /** REQ DATA */
  const [reqParams] = useState<any>({
    ...params,
  })

  const apiRequest = useApiRequest({
    url: url || "",
    method: method,
    params: reqParams,
  })

  return (
    <>
      <CardJumlahPenduduk data={apiRequest?.response?.data} />
    </>
  )
}

interface ICardStatisticJumlahPenduduk {
  params?: any
  label?: string
  url: any
  method?: "GET" | "POST"
}
