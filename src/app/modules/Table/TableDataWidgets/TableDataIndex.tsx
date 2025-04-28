import React from "react"
import TitleCaseTd from "./TitleCaseTd"
import DefaultTd from "./DefaultTd"

const TableDataIndexComponents: any = {
  toTitleCase: TitleCaseTd,
  default: DefaultTd,
}

export default function TableDataIndex({ type, data }: ITableDataIndexsIcon) {
  const TableDataIndex = ({ ...props }: any) => {
    const t = props?.type || "default"
    const TagName =
      TableDataIndexComponents[t] || TableDataIndexComponents["default"]
    return <TagName {...props} data={data} />
  }

  return <TableDataIndex type={type} />
}

interface ITableDataIndexsIcon {
  type: string
  data: any
}
