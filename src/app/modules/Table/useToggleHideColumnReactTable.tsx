import { useEffect, useMemo, useState } from "react"

type Props = {
  columns: any
  excludeColumns: string[]
}

export function useToggleHideColumnReactTable({
  columns,
  excludeColumns,
}: Props) {
  const [displayColumns, setDisplayColumns] = useState<any | null>(null)

  useEffect(() => {
    setDisplayColumns({ ...columns })
  }, [columns])

  const handleChangeDisplayColumn = (col: any, fn: any) => {
    const newSelectedisplayColumnsolumn = { ...col, show: !col.show }
    const newColumns = {
      ...displayColumns,
      [col.accessor]: newSelectedisplayColumnsolumn,
    }
    setDisplayColumns({ ...newColumns })
    fn(newColumns)
  }

  const displayColumnsValues = useMemo(
    () =>
      displayColumns
        ? Object.values(displayColumns).filter(
            (d: any) => excludeColumns.indexOf(d.accessor) < 0
          )
        : [],
    [displayColumns]
  )

  return {
    displayColumnsValues,
    handleChangeDisplayColumn,
  }
}
