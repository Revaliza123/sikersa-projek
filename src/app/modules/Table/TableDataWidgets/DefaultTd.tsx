import { ITableData } from "@app/interface/table-data.interface"
import { isArray, isPlainObject } from "lodash"
import React from "react"
import styled from "styled-components"

export default function DefaultTd({ data }: ITableData) {
  return (
    <>
      {isArray(data) || isPlainObject(data) ? (
        <DataType>{typeof data}</DataType>
      ) : (
        data || ""
      )}
    </>
  )
}

const DataType = styled.span`
  font-style: italic;
  color: var(--black-500);
`
