import CardStatisticIllustrationTotal from "@app/components/Card/CardIllustrationTotal"
import CardStatisticIllustration from "@app/components/Card/CardStatisticIllustration"
import useApiRequest from "@app/services/useApiRequest"
import React, { useState } from "react"

export default function CardIllustrationData({
  params = {},
  method = "POST",
  url,
  label = "Label Info",
  children,
  total,
  handleClick,
  status,
}: ICardIllustrationData) {
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
      {total ? (
        <CardStatisticIllustrationTotal
          status={status}
          handleClick={handleClick}
          illustration={children}
          name={label}
          value={apiRequest?.response?.data?.value | 0}
        />
      ) : (
        <CardStatisticIllustration
          status={status}
          handleClick={handleClick}
          illustration={children}
          name={label}
          value={apiRequest?.response?.data?.value | 0}
        />
      )}
    </>
  )
}

interface ICardIllustrationData {
  params?: any
  label?: string
  url: any
  children?: any
  handleClick: any
  method?: "GET" | "POST"
  total?: any
  status: any
}
