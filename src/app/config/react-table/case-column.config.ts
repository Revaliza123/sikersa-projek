import { ACTION_COLUMN } from "./action-column.config"

export const CASE_MANAGEMENT_COLUMNS = () => {
  return [
    {
      Header: "Name",
      accessor: "name",
      disableFilters: true,
      minWidth: 320,
    },
    { Header: "Version", accessor: "version", disableFilters: true },
    {
      Header: "Total Layer",
      accessor: "layer",
      disableFilters: true,
      minWidth: 100,
    },
    {
      Header: "Status",
      accessor: "status",
      disableFilters: true,
      minWidth: 100,
    },
    {
      Header: "Last Update",
      accessor: "updatedAt",
      disableFilters: true,
      minWidth: 150,
    },
    ...ACTION_COLUMN,
  ]
}
