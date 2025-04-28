import { ACTION_COLUMN } from "./action-column.config"

export const USERS_MANAGEMENT_COLUMNS = () => {
  return [
    {
      Header: "Name",
      accessor: "fullname",
      disableFilters: true,
      minWidth: 320,
    },
    {
      Header: "Role",
      accessor: "role",
      disableFilters: true,
      minWidth: 100,
    },
    { Header: "Last Login", accessor: "lastLogin", disableFilters: true },
    {
      Header: "Last Update",
      accessor: "updatedAt",
      disableFilters: true,
      minWidth: 150,
    },
    {
      Header: "Status",
      accessor: "status",
      disableFilters: true,
      minWidth: 150,
    },
    ...ACTION_COLUMN,
  ]
}
