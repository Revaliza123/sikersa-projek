import CardStatisticCount from "@app/components/Card/CardStatisticCount"
import { formatThousand } from "@app/helper/number.helper"
import useApiRequest from "@app/services/useApiRequest"
import React, { useState } from "react"

export default function CardStatisticCountData({
  params = {},
  method = "POST",
  url,
  label = "Label Info",
  onClick,
  labelAsHeader = false,
  labelWrap = "nowrap",
  customStyles = {},
}: ICardStatisticCountData) {
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
      <CardStatisticCount
        onClick={onClick}
        name={label}
        value={formatThousand(apiRequest?.response?.data?.value, 0)}
        style="bordered"
        labelAsHeader={labelAsHeader}
        labelWrap={labelWrap}
        customStyles={customStyles}
      />
    </>
  )
}

interface ICardStatisticCountData {
  params?: any
  label?: string
  url: any
  method?: "GET" | "POST"
  onClick?: React.MouseEventHandler<HTMLElement>
  labelAsHeader?: boolean
  labelWrap?: "wrap" | "nowrap"
  customStyles?: any
}
