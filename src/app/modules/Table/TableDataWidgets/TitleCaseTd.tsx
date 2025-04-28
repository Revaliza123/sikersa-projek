import { toTitleCase } from "@app/helper/string.helper"
import { ITableData } from "@app/interface/table-data.interface"
import React from "react"

export default function TitleCaseTd({ data }: ITableData) {
  return <>{toTitleCase(data)}</>
}
