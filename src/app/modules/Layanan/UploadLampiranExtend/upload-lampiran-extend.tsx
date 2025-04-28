import React from "react"
import { LampiranExtendForm } from "./upload-lampiran-extend-form"
import { LampiranExtendList } from "./upload-lampiran-extend-list"

export function LampiranExtend({ fieldArray }: { fieldArray: any }) {
  return (
    <>
      <LampiranExtendForm
        selected={fieldArray.selected}
        onSubmit={(data: any) => {
          fieldArray.append({
            nama_file: data.nama_file,
            path_file: data.path_file,
          })
        }}
      />

      <LampiranExtendList
        items={fieldArray?.fields}
        onDelete={(idx: number) => fieldArray.remove(idx)}
        onEdit={(idx: number) => fieldArray.setSelectedIndex(idx)}
      />
    </>
  )
}
