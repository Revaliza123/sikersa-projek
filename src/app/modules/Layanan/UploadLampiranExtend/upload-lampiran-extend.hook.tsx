import { useState } from "react"
import { Control, useFieldArray } from "react-hook-form"
import { get } from "lodash"

export function useLampiranExtendArray(control: Control<any>) {
  const lampiranExtendArray = useFieldArray({
    name: "lampiran_lainnya",
    control,
  })
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const selected =
    selectedIndex !== null
      ? get(lampiranExtendArray?.fields, selectedIndex)
      : null

  return {
    ...lampiranExtendArray,
    selected,
    selectedIndex,
    setSelectedIndex,
  }
}
