import MoneyIconV2 from "@app/components/Icons/MoneyIconV2"
import useApiRequest from "@app/services/useApiRequest"
import { DFlex, DFlexJustifyBetween } from "@app/styled/flex.styled"
import { ListGroupItem } from "@app/styled/listgroup.styled"
import { DescriptionInfo } from "@app/styled/typography.styled"
import React, { useState } from "react"

export default function ListGroupItemData({
  params = {},
  method = "POST",
  url,
  label = "Label Info",
}: IListGroupItemData) {
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
    <ListGroupItem className="d-flex overflow-hidden">
      <DFlex className="align-items-center gap-2 flex-grow-1">
        <div className="flex-shrink-0">
          <MoneyIconV2 />
        </div>
        <DFlexJustifyBetween className="w-100">
          <div title={label} style={{ fontSize: "0.85rem" }}>
            {label}
          </div>
          <DescriptionInfo className="mb-0 w-10 fw-bolder text-end">
            {apiRequest?.response?.data?.value | 0}
          </DescriptionInfo>
        </DFlexJustifyBetween>
      </DFlex>
    </ListGroupItem>
  )
}

interface IListGroupItemData {
  params?: any
  label?: string
  url: any
  key?: any
  method?: "GET" | "POST"
}
